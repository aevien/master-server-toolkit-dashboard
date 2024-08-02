<script setup lang="ts">
import { useFindMstModuleInfoByRouteId } from '../../core/compositions';
import { CensorModule } from '../../core/interfaces';
import ModulePageLayout from '../../layouts/ModulePageLayout.vue';

const module = useFindMstModuleInfoByRouteId<CensorModule>()

</script>

<template>
    <ModulePageLayout :dependancies="module?.dependencies" :optional-dependancies="module?.optionalDependencies">
        <template #info>
            
        </template>
        <template #controls>
            
        </template>
    </ModulePageLayout>
</template>