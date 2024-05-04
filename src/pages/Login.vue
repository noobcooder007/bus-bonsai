import useAuthentication from '../composables/useAuthentication';
<template>
    <v-container>
        <v-col cols="3">
            <v-sheet>
                <v-row>
                    <v-text-field v-model="user" clearable variant="outlined" label="Usuario"/>
                </v-row>
                <v-row>
                    <v-text-field v-model="password" clearable variant="outlined" label="Contraseña" @keydown.enter="login(user, password)"/>
                </v-row>
                <v-row>
                    <v-btn @click="login(user, password)">Iniciar sesion</v-btn>
                </v-row>
            </v-sheet>
        </v-col>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthentication from '../composables/useAuthentication'
const { login } = useAuthentication()
const user = ref('')
const password = ref('')
</script>