<template>
    <v-row class="pl-4 pb-2 pt-4">
        <v-col cols="11">
            <v-row>
                <span class="text-h4">Bienvenido <strong>{{ user.fullname }}</strong></span>
            </v-row>
            <v-row>
                <span class="text-subtitle-1">Unidad {{ user.numberOfBus }}</span>
            </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
            <v-row justify-center>
                <v-menu rounded>
                    <template v-slot:activator="{ props }">
                        <v-btn icon v-bind="props">
                            <v-avatar size="large" color="primary">
                                <span>{{ user.username }}</span>
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-text>
                            <div class="mx-auto text-center">
                                <v-avatar color="primary">
                                    <span>{{ user.username }}</span>
                                </v-avatar>
                                <h3>{{ user.fullname }}</h3>
                                <p class="text-caption mt-1">{{ user.email }}</p>
                                <v-divider class="my-3"></v-divider>
                                <v-btn variant="text">Editar cuenta</v-btn>
                                <v-divider class="my-3"></v-divider>
                                <v-btn @click="$emit('logout')">Cerrar sesión</v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-menu>
            </v-row>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { User } from '../models/User';
defineEmits(['logout'])
defineProps<{
    user: User
}>()
</script>