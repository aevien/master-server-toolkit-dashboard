<script setup lang="ts">
import { useFindMstModuleInfo } from '../../core/compositions';
import { HttpServerModuleInfo } from '../../core/interfaces';


const module = useFindMstModuleInfo<HttpServerModuleInfo>()

</script>

<template>
<pre>
    <code>
        {{ module }}
    </code>
</pre>
</template>