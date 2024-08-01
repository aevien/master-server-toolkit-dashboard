<script setup lang="ts">
import Navbar from '../components/NavbarDashboard.vue'
import { LayoutProps } from '../core/interfaces';

defineProps<LayoutProps>()
</script>

<template>
    <Navbar />
    <div class="container-fluid content">
        <div class="row h-100 pt-3">
            <div class="col">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">{{ title }}</li>
                </ol>
                <div class="wrapper scrollable-div">
                    <slot></slot>
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

.wrapper {
    height: calc(100vh - 56px - 70px);
}

.scrollable-div {
    overflow-y: auto;
    overflow-x: hidden;
}

/* Стиль для тонкого скроллбара */
.scrollable-div::-webkit-scrollbar {
    width: 8px;
    /* Ширина скроллбара */
}

.scrollable-div::-webkit-scrollbar-track {
    background: #f1f1f1;
    /* Цвет трека */
}

.scrollable-div::-webkit-scrollbar-thumb {
    background: #888;
    /* Цвет ползунка */
    border-radius: 4px;
    /* Закругление углов */
}

.scrollable-div::-webkit-scrollbar-thumb:hover {
    background: #555;
    /* Цвет ползунка при наведении */
}
</style>