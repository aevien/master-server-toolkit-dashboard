<script setup lang="ts">
import { inject,ref } from 'vue';
import { MstApi } from '../core/MstApi';
import { ProvideInjectKeys } from '../core/constants';

const address = ref('127.0.0.1:5555')
const username = ref('admin')
const password = ref('admin')

const mstApi = inject<MstApi>(ProvideInjectKeys.MST_API)

function connect() {
    console.log(address.value, username.value, password.value)
    mstApi?.start(address.value, username.value, password.value)
}

</script>

<template>

    <div class="container form-center">
        <div class="card p-4 shadow-sm" style="max-width: 400px; width: 100%;">
            <h3 class="text-center mb-3">Server Login</h3>
            <form>
                <div class="mb-3">
                    <label for="serverIp" class="form-label">IP адрес сервера</label>
                    <input v-model="address" type="text" class="form-control" id="serverIp" required>
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label">Логин</label>
                    <input v-model="username" type="text" class="form-control" id="username" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Пароль</label>
                    <input v-model="password" type="password" class="form-control" id="password" required>
                </div>
                <button @click="connect" type="button" class="btn btn-primary w-100">Войти</button>
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