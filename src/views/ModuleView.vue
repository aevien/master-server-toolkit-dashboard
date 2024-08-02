<script setup lang="ts">
import { computed, defineAsyncComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import DashboardPageLayout from '../layouts/DashboardPageLayout.vue';
import { useMstServerInfo } from '../core/compositions';

const mstServerInfo = useMstServerInfo();

const components: any[] = [];
const componentIndexes: Record<string, number> = {};

if (mstServerInfo && mstServerInfo.modules) {
    for (let i = 0; i < mstServerInfo.modules.length; i++) {
        const name = mstServerInfo.modules[i].name;
        try {
            components.push(defineAsyncComponent(() => import(`../components/modules/${name}Component.vue`)));
            componentIndexes[name.toLocaleLowerCase()] = i;
        } catch (error) {
            console.error(`Failed to load component for module: ${name}`, error);
        }
    }
}

console.log('Loaded components:', components);
console.log('Component indexes:', componentIndexes);

const route = useRoute();
const title = ref(route.query.title as string || '');
const panelId = ref<string>(route.params.id as string || '');
const currentPanelIndex = computed(() => componentIndexes[panelId.value]);

watch(() => route.query.title, (newTitle) => {
    title.value = newTitle as string;
});

watch(() => route.params.id, (newPanelId) => {
    panelId.value = newPanelId as string;
});
</script>

<template>
    <DashboardPageLayout :title="title">
        <component :is="components[currentPanelIndex]"></component>
    </DashboardPageLayout>
</template>
