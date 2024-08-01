<script setup lang="ts">
import { inject, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { MstApi } from './core/MstApi';
import { MstApiEvents, ProvideInjectKeys } from './core/constants';

const route = useRoute()
const router = useRouter()
const mstApi = inject<MstApi>(ProvideInjectKeys.MST_API)
mstApi?.addEventListener(MstApiEvents.ON_OPEN, mstApiSocketEvent)
mstApi?.addEventListener(MstApiEvents.ON_CLOSE, mstApiSocketEvent)

onMounted(()=>{
  mstApiSocketEvent()
})

function mstApiSocketEvent() {
  if (mstApi?.isOpen) {
      changePageTo('dashboard')
    } else {
      changePageTo('login')
    }
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