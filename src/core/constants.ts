export enum ProvideInjectKeys {
    MST_API = 'mstApi',
    MST_SERVER_INFO = 'mstServerInfo'
}

export enum MstApiEvents {
    ON_OPEN = "onOpen",
    ON_CLOSE = "onClose",
    ON_MESSAGE = "onMessage"
}

export enum MstApiMessageOpCodes {
    ECHO = "echo",
    LOGIN = "login",
    GET_SERVER_INFO = "getServerInfo"
}