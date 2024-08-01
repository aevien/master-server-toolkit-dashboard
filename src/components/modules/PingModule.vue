<script setup lang="ts">
import { useFindMstModuleInfo } from '../../core/compositions';
import { PingModuleInfo } from '../../core/interfaces';


const module = useFindMstModuleInfo<PingModuleInfo>()

</script>

<template>
<pre>
    <code>
        {{ module }}
    </code>
</pre>
</template>