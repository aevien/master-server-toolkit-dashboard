<script setup lang="ts">
import { useFindMstModuleInfo } from '../../core/compositions';
import { AuthModuleInfo } from '../../core/interfaces';

const module = useFindMstModuleInfo<AuthModuleInfo>()

</script>

<template>
<pre>
    <code>
        {{ module }}
    </code>
</pre>
</template>