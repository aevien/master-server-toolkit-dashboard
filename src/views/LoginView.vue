<script setup lang="ts">
import { inject, ref } from 'vue';
import { MstApi } from '../core/MstApi';
import { ModalType, ProvideInjectKeys } from '../core/constants';
import { useModal } from '../core/compositions';

const address = ref('127.0.0.1:5555')
const username = ref('admin')
const password = ref('admin')

const mstApi = inject<MstApi>(ProvideInjectKeys.MST_API)
const { modalRef, Modal } = useModal()

function connect() {
    mstApi?.start(address.value, username.value, password.value)
        .catch(error => {
            if (modalRef && modalRef.value) {
                modalRef.value.showOkModal(error, ModalType.ERROR);
            }
        })
}

</script>

<template>
    <Modal ref="modalRef" />
    <div class="container form-center">
        <div class="card p-4 shadow-sm" style="max-width: 400px; width: 100%;">
            <h3 class="text-center mb-3">Server Login</h3>
            <form>
                <div class="mb-3">
                    <label for="serverIp" class="form-label">Server IP</label>
                    <input v-model="address" type="text" class="form-control" id="serverIp" required>
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input v-model="username" type="text" class="form-control" id="username" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input v-model="password" type="password" class="form-control" id="password" required>
                </div>
                <button @click="connect" type="button" class="btn btn-primary w-100">Login</button>
            </form>
        </div>
    </div>

</template>

<style scoped>
.form-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>