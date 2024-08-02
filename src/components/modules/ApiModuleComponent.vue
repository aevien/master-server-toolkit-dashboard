<script setup lang="ts">
import { useFindMstModuleInfoByRouteId } from '../../core/compositions';
import { ApiModuleInfo } from '../../core/interfaces';
import ModulePageLayout from '../../layouts/ModulePageLayout.vue';

const module = useFindMstModuleInfoByRouteId<ApiModuleInfo>()

</script>

<template>
    <ModulePageLayout :dependancies="module?.dependencies" :optional-dependancies="module?.optionalDependencies">
        <template #info>
        </template>
        <template #controls>

        </template>
    </ModulePageLayout>
</template>