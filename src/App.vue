<script setup lang="ts">
import { inject, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { MstApi } from './core/MstApi';
import { MstApiEvents, MstApiMessageOpCodes, ProvideInjectKeys } from './core/constants';
import { MstServerInfo } from './core/interfaces';

const route = useRoute()
const router = useRouter()
const mstApi = inject<MstApi>(ProvideInjectKeys.MST_API)
const mstServerInfo = inject<MstServerInfo>(ProvideInjectKeys.MST_SERVER_INFO)

mstApi?.addEventListener(MstApiEvents.ON_OPEN, mstApiSocketEvent)
mstApi?.addEventListener(MstApiEvents.ON_CLOSE, mstApiSocketEvent)

onMounted(() => {
  mstApiSocketEvent()
})

function mstApiSocketEvent() {
  if (mstApi?.isOpen) {
    getMstServerInfo();
    changePageTo('dashboard')
  } else {
    changePageTo('login')
  }
}

function getMstServerInfo() {
  mstApi?.send(MstApiMessageOpCodes.GET_SERVER_INFO)
    .then((response) => {
      if (mstServerInfo) {
        Object.assign(mstServerInfo, response.data);
      }
      console.log(response)
    })
}

function changePageTo(name: string): void {
  if (route.name !== name) {
    router.push({ name: name })
  }
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>