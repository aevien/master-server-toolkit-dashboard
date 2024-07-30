<script setup lang="ts">
import Navbar from '../components/NavbarDashboard.vue'
interface LayoutProps {
    title: string,
    container?: string
}
defineProps<LayoutProps>()
</script>

<template>
    <Navbar />
    <div class="container-fluid content bg-danger">
        <div class="row h-100 pt-3">
            <div class="col">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">{{ title }}</li>
                </ol>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    /* 56px - navbar height */
    height: calc(100vh - 56px);
}
.wrapper {
    height: calc(100vh - 56px - 80px);
}
</style>