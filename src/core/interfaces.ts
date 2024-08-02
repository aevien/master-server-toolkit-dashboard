export interface LayoutProps {
    title: string;
    container?: string;
}

export interface ModuleLayoutProps {
    dependancies?: string[];
    optionalDependancies?: string[];
}

export interface HttpControllerInfo {
    name: string;
    description: string;
    localIp: string;
    port: number;
    checkHeartBeatUrl?: string;
    controllers: string[];
    requestActions: any[];
}

export interface ModuleInfo {
    name: string;
    description: string;
    dependencies: string[];
    optionalDependencies: string[];
    error: string
}

export interface HttpServerModuleInfo extends ModuleInfo {
    localIp: string;
    port: number;
    checkHeartBeatUrl: string;
    controllers: HttpControllerInfo[];
    requestActions: any[];
}

export interface AuthModuleInfo extends ModuleInfo {
    loggedInUsers: number;
    allowGuests: boolean;
    guestNamePrefix: string;
    emailConfirmRequired: boolean;
    minUsernameLength: number;
    minPasswordLength: number;
}

export interface ApiModuleInfo extends ModuleInfo { }
export interface ProfilesModuleInfo extends ModuleInfo { }
export interface NotificationModuleInfo extends ModuleInfo { }
export interface PingModuleInfo extends ModuleInfo { }
export interface CensorModule extends ModuleInfo { }

export interface MstServerInfo {
    initializedModules?: number;
    uninitializedModules?: number;
    activeClients?: number;
    inactiveClients?: number;
    unauthenticatedPeers?: number;
    totalClients?: number;
    highestClients?: number;
    peersAccepted?: number;
    peersRejected?: number;
    useSecure?: boolean;
    certificatePath?: string;
    certificatePassword?: string;
    service?: string;
    localIp?: string;
    publicIp?: string;
    port?: number;
    incomingTraffic?: number;
    outgoingTraffic?: number;
    modules?: (AuthModuleInfo | ProfilesModuleInfo | HttpServerModuleInfo | ApiModuleInfo | PingModuleInfo | NotificationModuleInfo | CensorModule)[];
}