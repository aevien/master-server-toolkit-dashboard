<script setup lang="ts">
import NavbarDashboardComponent from '../components/NavbarDashboardComponent.vue'
import { LayoutProps } from '../core/interfaces';

defineProps<LayoutProps>()
</script>

<template>
    <NavbarDashboardComponent />
    <div class="container-fluid content">
        <div class="row h-100">
            <div class="col p-2">
                <div class="card h-100">
                    <h4 class="card-header">{{ title }}</h4>
                    <div class="card-body p-2">
                        <div class="scrollable-div">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    /* 56px - navbar height */
    height: calc(100vh - 56px);
}

.card-body {
    position: relative !important;
}

.scrollable-div {
    overflow-y: auto;
    overflow-x: hidden;
    position: absolute;
    top: 0.5rem;
    bottom: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
}

.scrollable-div::-webkit-scrollbar {
    width: 8px;
}

.scrollable-div::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.scrollable-div::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}

.scrollable-div::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>