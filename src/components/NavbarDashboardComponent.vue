<script setup lang="ts">
import { inject } from 'vue';
import { MstApi } from '../core/MstApi';
import { ProvideInjectKeys } from '../core/constants';
import { MstServerInfo } from '../core/interfaces';

const mstApi = inject<MstApi>(ProvideInjectKeys.MST_API)
const mstServerInfo = inject<MstServerInfo>(ProvideInjectKeys.MST_SERVER_INFO)

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
            <RouterLink :to="{ name: 'dashboard' }" class="navbar-brand">MST Dashboard</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Modules [{{ mstServerInfo?.modules?.length }}]
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="(item, index) in mstServerInfo?.modules" :key="index">
                                <RouterLink
                                    :to="{ name: 'module', params: { id: item.name.toLowerCase(), tab: 'info' }, query: { title: item.name } }"
                                    class="dropdown-item">{{ item.name }}</RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click.prevent="mstApi?.stop()"><i class="bi bi-box-arrow-right"></i>Exit</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>