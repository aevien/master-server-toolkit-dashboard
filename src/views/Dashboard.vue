<script setup lang="ts">
import { inject } from 'vue';
import { ProvideInjectKeys } from '../core/constants';
import DashboardPageLayout from '../layouts/DashboardPageLayout.vue';

let mstServerInfo = inject<{
    data: any
}>(ProvideInjectKeys.MST_SERVER_INFO)
</script>

<template>
    <DashboardPageLayout title="Dashboard">
        <pre>
            {{ mstServerInfo?.data }}
        </pre>
    </DashboardPageLayout>
</template>

<style scoped></style>