<script setup lang="ts">
import { ref, watch } from 'vue';
import DashboardPageLayout from '../layouts/DashboardPageLayout.vue';
import { useRoute } from 'vue-router';
import AuthModule from '../components/modules/AuthModule.vue';
import PingModule from '../components/modules/PingModule.vue';
import ApiModule from '../components/modules/ApiModule.vue';
import HttpServerModule from '../components/modules/HttpServerModule.vue';
import NotificationModule from '../components/modules/NotificationModule.vue';
import ProfilesModule from '../components/modules/ProfilesModule.vue';

const route = useRoute()
const title = ref(route.query.title as string || '')

watch(() => route.query.title, (newTitle) => {
    title.value = newTitle as string;
});

</script>

<template>
    <DashboardPageLayout :title="title">
        <ApiModule v-if="route.params.id === 'apimodule'" />
        <AuthModule v-if="route.params.id === 'authmodule'" />
        <HttpServerModule v-if="route.params.id === 'httpservermodule'" />
        <NotificationModule v-if="route.params.id === 'notificationmodule'" />
        <PingModule v-if="route.params.id === 'pingmodule'" />
        <ProfilesModule v-if="route.params.id === 'profilesmodule'" />
    </DashboardPageLayout>
</template>