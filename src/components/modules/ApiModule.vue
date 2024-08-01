<script setup lang="ts">
import { useFindMstModuleInfo } from '../../core/compositions';
import { ApiModuleInfo } from '../../core/interfaces';

const module = useFindMstModuleInfo<ApiModuleInfo>()

</script>

<template>
<pre>
    <code>
        {{ module }}
    </code>
</pre>
</template>