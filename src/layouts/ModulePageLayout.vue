<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ModuleLayoutProps } from '../core/interfaces';

defineProps<ModuleLayoutProps>()
const route = useRoute()
</script>

<template>
    <div class="card">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" id="moduleInfoTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link" :class="{ 'active': route.params.tab === 'info' }" id="info-tab"
                        data-bs-toggle="tab" data-bs-target="#info-tab-pane" type="button" role="tab"
                        aria-controls="info-tab-pane" aria-selected="true">Information</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" :class="{ 'active': route.params.tab === 'controls' }" id="controls-tab"
                        data-bs-toggle="tab" data-bs-target="#controls-tab-pane" type="button" role="tab"
                        aria-controls="controls-tab-pane" aria-selected="false">Controls</button>
                </li>
            </ul>
        </div>
        <div class="card-body p-2">
            <div class="tab-content p-0" id="authModuleTabContent">
                <div class="tab-pane fade" :class="{ 'show active': route.params.tab === 'info' }" id="info-tab-pane"
                    role="tabpanel" aria-labelledby="info-tab" tabindex="0">
                    <div class="card text-bg-light mb-2">
                        <div class="card-header">
                            Base info
                        </div>
                        <div class="card-body p-1">
                            <table class="table table-striped table-bordered table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            Dependencies
                                        </th>
                                        <td>
                                            <RouterLink v-for="(item, index) in dependancies" :key="index"
                                                :to="{ name: 'module', params: { id: item.toLowerCase() }, query: { title: item } }"
                                                class="btn btn-primary btn-sm me-2">{{ item }}</RouterLink>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th width="300" scope="row">
                                            Optional dependencies
                                        </th>
                                        <td>
                                            <RouterLink v-for="(item, index) in optionalDependancies" :key="index"
                                                :to="{ name: 'module', params: { id: item.toLowerCase() }, query: { title: item } }"
                                                class="btn btn-primary btn-sm me-2">{{ item }}</RouterLink>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card text-bg-light">
                        <div class="card-header">
                            Custom info
                        </div>
                        <div class="card-body p-1">
                            <slot name="info"></slot>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" :class="{ 'show active': route.params.tab === 'controls' }"
                    id="controls-tab-pane" role="tabpanel" aria-labelledby="controls-tab" tabindex="0">
                    <slot name="controls"></slot>
                </div>
            </div>
        </div>
    </div>
</template>