<script setup lang="ts">
import { inject } from 'vue';
import { ProvideInjectKeys } from '../core/constants';
import { MstServerInfo } from '../core/interfaces';

import DashboardPageLayout from '../layouts/DashboardPageLayout.vue';

const mstServerInfo = inject<MstServerInfo>(ProvideInjectKeys.MST_SERVER_INFO)

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
                            :to="{ name: 'module', params: { id: item.name.toLowerCase() }, query: { title: item.name } }"
                            class="btn btn-info"><i class="bi bi-toggles2"></i>Control panel</RouterLink>
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