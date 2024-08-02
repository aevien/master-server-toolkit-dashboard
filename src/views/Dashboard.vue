<script setup lang="ts">

import DashboardPageLayout from '../layouts/DashboardPageLayout.vue';
import { useMstServerInfo } from '../core/compositions';

const mstServerInfo = useMstServerInfo()

</script>

<template>
    <DashboardPageLayout title="Dashboard">
        <div class="row g-2">
            <div v-for="(item, index) in mstServerInfo?.modules" class="col-md-3">
                <div :key="index" class="card module-card">
                    <h5 class="card-header"><i class="bi bi-boxes"></i>{{ item.name }}</h5>
                    <div class="card-body">
                        <p class="card-text">
                            {{ item.description }}
                        </p>
                        <RouterLink
                            :to="{ name: 'module', params: { id: item.name.toLowerCase(), tab: 'info' }, query: { title: item.name } }"
                            class="btn btn-info me-2"><i class="bi bi-info-square"></i>Info</RouterLink>
                        <RouterLink
                            :to="{ name: 'module', params: { id: item.name.toLowerCase(), tab: 'controls' }, query: { title: item.name } }"
                            class="btn btn-success"><i class="bi bi-toggles2"></i>Control panel</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </DashboardPageLayout>
</template>

<style scoped>
.card-text {
    min-height: 120px;
}
</style>