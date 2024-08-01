import { inject } from "vue"
import { useRoute } from "vue-router"
import { MstServerInfo } from "./interfaces"
import { ProvideInjectKeys } from "./constants"

export function useFindMstModuleInfo<T>(): T | null {
    const route = useRoute()
    const mstServerInfo = inject<MstServerInfo>(ProvideInjectKeys.MST_SERVER_INFO)
    
    if (mstServerInfo && mstServerInfo.modules && route.params && route.params.id) {
        for (let i = 0; i < mstServerInfo.modules.length; i++) {
            if (mstServerInfo.modules[i].name.toLocaleLowerCase() === route.params.id) {
                return mstServerInfo.modules[i] as T;
            }
        }
    }

    return null
}