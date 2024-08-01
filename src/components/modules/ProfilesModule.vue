<script setup lang="ts">
import { useFindMstModuleInfo } from '../../core/compositions';
import { ProfilesModuleInfo } from '../../core/interfaces';


const module = useFindMstModuleInfo<ProfilesModuleInfo>()

</script>

<template>
<pre>
    <code>
        {{ module }}
    </code>
</pre>
</template>