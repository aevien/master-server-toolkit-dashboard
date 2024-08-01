<script setup lang="ts">
import { inject } from 'vue';
import { MstApi } from '../core/MstApi';
import { MstApiMessageOpCodes, ProvideInjectKeys } from '../core/constants';
const mstApi = inject<MstApi>(ProvideInjectKeys.MST_API)
let mstServerInfo = inject<{
    data: any
}>(ProvideInjectKeys.MST_SERVER_INFO)

function getMstServerInfo() {
    mstApi?.send(MstApiMessageOpCodes.GET_SERVER_INFO)
        .then((response) => {
            if (mstServerInfo) {
                mstServerInfo.data = response.data;
            }
            console.log(response)
        })
}

function echo() {
    mstApi?.send(MstApiMessageOpCodes.ECHO)
        .then((response) => {
            alert(response.data)
        })
}

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click.prevent="mstApi?.stop()">Close</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click.prevent="echo()">Echo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click.prevent="getMstServerInfo()">Get server info</a>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Echo</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>