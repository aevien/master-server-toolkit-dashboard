<script setup lang="ts">
import { useFindMstModuleInfoByRouteId } from '../../core/compositions';
import { AuthModuleInfo } from '../../core/interfaces';
import ModulePageLayout from '../../layouts/ModulePageLayout.vue';

const module = useFindMstModuleInfoByRouteId<AuthModuleInfo>()

</script>

<template>
    <ModulePageLayout :dependancies="module?.dependencies" :optional-dependancies="module?.optionalDependencies">
        <template #info>
            <table class="table table-striped table-bordered table-hover">
                <tbody>
                    <tr>
                        <th scope="row" width="300">
                            Logged in users
                        </th>
                        <td>
                            {{ module?.loggedInUsers }}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Allow guests
                        </th>
                        <td>
                            {{ module?.allowGuests }}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Guest name prefix
                        </th>
                        <td>
                            {{ module?.guestNamePrefix }}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Email confirm required
                        </th>
                        <td>
                            {{ module?.emailConfirmRequired }}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Min username length
                        </th>
                        <td>
                            {{ module?.minUsernameLength }}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Min password length
                        </th>
                        <td>
                            {{ module?.minPasswordLength }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </template>
        <template #controls>
            
        </template>
    </ModulePageLayout>
</template>