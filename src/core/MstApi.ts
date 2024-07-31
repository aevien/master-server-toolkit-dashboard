import { MstApiEvents } from "./constants";

interface Message {
    opcode: string;
    data: any;
}

interface Response {
    opcode: string;
    data?: any;
    error?: string;
}

interface PendingMessage {
    resolve: (response: Response) => void;
    reject: (reason?: any) => void;
    timeoutId: number;
}

export class MstApi extends EventTarget {
    private _TIMEOUT_MS = 10000;
    private _socket!: WebSocket
    private _pendingMessages: Map<string, PendingMessage> = new Map();
    private _isOpen: boolean = false

    constructor() {
        super()
    }

    private invokeEvent = (eventName: string, detail?: any) => {
        const event = new CustomEvent(eventName, { detail: { detail } });
        this.dispatchEvent(event);
    }

    get isOpen(): boolean {
        return this._isOpen
    }

    public stop = (): void => {
        this._socket.close()
    }

    public start = (address: string, username: string, password: string): void => {
        const url = `ws://${address}/api`
        this._socket = new WebSocket(url)

        this._socket.addEventListener('open', (_event) => {
            console.log('Connected to Mst API server');
            this._isOpen = true
            this.invokeEvent(MstApiEvents.ON_OPEN)
            // this.send("echo", "Hello World")
            //     .then(response => {
            //         console.log(response.data)
            //     })
            //     .catch(error => {
            //         console.error(error)
            //     })
        });

        this._socket.addEventListener('message', (event) => {
            const response: Response = JSON.parse(event.data);
            const pendingMessage = this._pendingMessages.get(response.opcode);

            if (pendingMessage) {
                clearTimeout(pendingMessage.timeoutId);
                if (response.error) {
                    pendingMessage.reject(new Error(response.error));
                } else {
                    pendingMessage.resolve(response);
                    this.invokeEvent(MstApiEvents.ON_MESSAGE, response.data)
                }
                this._pendingMessages.delete(response.opcode);
            } else {
                if (response.error) {
                    console.error(response.error)
                }
            }
        });

        this._socket.addEventListener('close', (_event) => {
            this._isOpen = false
            this.invokeEvent(MstApiEvents.ON_CLOSE)
            console.log('Disconnected from Mst API  server');
        });

        this._socket.addEventListener('error', (_event) => {
            console.error('WebSocket error: ', _event);
        });
    }

    public send = (opcode: string, data: any): Promise<Response> => {
        return new Promise((resolve, reject) => {
            const messageWithOpcode: Message = { opcode, data };

            const existingMessage = this._pendingMessages.get(opcode);
            if (existingMessage) {
                clearTimeout(existingMessage.timeoutId);
            }

            const timeoutId = window.setTimeout(() => {
                if (this._pendingMessages.has(opcode)) {
                    this._pendingMessages.delete(opcode);
                    reject(new Error(`Timeout waiting for response to message with opcode ${opcode}`));
                }
            }, this._TIMEOUT_MS);

            this._pendingMessages.set(opcode, { resolve, reject, timeoutId });
            this._socket.send(JSON.stringify(messageWithOpcode));
        });
    }
}