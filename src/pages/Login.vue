import useAuthentication from '../composables/useAuthentication';
<template>
    <v-container>
        <v-col cols="3">
            <v-sheet>
                <v-row>
                    <v-text-field clearable variant="outlined" label="Usuario"/>
                </v-row>
                <v-row>
                    <v-text-field clearable variant="outlined" label="Contraseña"/>
                </v-row>
                <v-row>
                    <v-btn @click="login()">Iniciar sesion</v-btn>
                </v-row>
            </v-sheet>
        </v-col>
    </v-container>
</template>

<script setup lang="ts">
import useAuthentication from '../composables/useAuthentication'
const { login } = useAuthentication()
</script>