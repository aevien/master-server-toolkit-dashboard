<script setup lang="ts">
import { useFindMstModuleInfo } from '../../core/compositions';
import { NotificationModuleInfo } from '../../core/interfaces';


const module = useFindMstModuleInfo<NotificationModuleInfo>()

</script>

<template>
<pre>
    <code>
        {{ module }}
    </code>
</pre>
</template>