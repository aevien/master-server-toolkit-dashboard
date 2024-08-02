import { inject, reactive, ref, watchEffect } from "vue"
import { useRoute } from "vue-router"
import { MstServerInfo } from "./interfaces"
import { ProvideInjectKeys } from "./constants"
import ModalComponent from "../components/ModalComponent.vue"

export function useFindMstModuleInfoByRouteId<T>(): T | null {
    const route = useRoute()
    const mstServerInfo = useMstServerInfo()
    let module: any = reactive<{}>({})

    watchEffect(() => {
        if (mstServerInfo && mstServerInfo.modules && route.params && route.params.id) {
            const modules = mstServerInfo.modules
            for (let i = 0; i < modules.length; i++) {
                if (modules[i].name.toLocaleLowerCase() === route.params.id) {
                    Object.assign(module, modules[i]);
                    break;
                }
            }
        }
    })

    return module as T
}

export function useMstServerInfo() {
    return inject<MstServerInfo>(ProvideInjectKeys.MST_SERVER_INFO);
}

export function useModal() {
    const modalRef = ref<typeof ModalComponent | null>(null);
    const Modal = ModalComponent

    return {
        modalRef,
        Modal
    }
}