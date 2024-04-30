<template>
    <v-container>
        <v-row class="pl-4 pb-2 pt-4">
            <v-col cols="11">
                <v-row>
                    <span class="text-h4">Bienvenido <strong>Javier, Herrera</strong></span>
                </v-row>
                <v-row>
                    <span class="text-subtitle-1">Unidad 14</span>
                </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-row justify-center>
                    <v-menu rounded>
                        <template v-slot:activator="{ props }">
                            <v-btn icon v-bind="props">
                                <v-avatar size="large" color="primary">
                                    <span>JH</span>
                                </v-avatar>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-text>
                                <div class="mx-auto text-center">
                                    <v-avatar color="primary">
                                        <span>JH</span>
                                    </v-avatar>
                                    <h3>Javier Herrera</h3>
                                    <p class="text-caption mt-1">javier.herrera@example.com</p>
                                    <v-divider class="my-3"></v-divider>
                                    <v-btn variant="text">Editar cuenta</v-btn>
                                    <v-divider class="my-3"></v-divider>
                                    <v-btn @click="logout()">Cerrar sesión</v-btn>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-menu>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <span class="text-h4">Balance de hoy</span>
                <v-sheet :rounded="true" class="pa-8" color="primary">
                    <v-col>
                        <v-row>
                            <span class="text-body-1">{{ currentBalance?.dayOfWeek }}</span>
                        </v-row>
                        <v-row>
                            <span class="text-body-1">29 de mayo del 2024</span>
                        </v-row>
                        <v-row class="pt-4">
                            <span class="text-body">${{ currentBalance?.total }}</span>
                            <v-spacer></v-spacer>
                            <v-chip>{{ isApprobed(currentBalance?.approbed || false) }}</v-chip>
                        </v-row>
                    </v-col>
                </v-sheet>
            </v-col>
            <v-col>
                <span class="text-h4">Balance</span>
                <v-sheet v-for="balance in approbedBalances" :key="balance.id" :rounded="true" class="pa-8 mb-2"
                    color="primary">
                    <v-col>
                        <v-row>
                            <span class="text-body-1">{{ balance.dayOfWeek }}</span>
                        </v-row>
                        <v-row>
                            <span class="text-body-1">29 de mayo del 2024</span>
                        </v-row>
                        <v-row class="pt-4">
                            <span class="text-body">${{ balance.total }}</span>
                            <v-spacer></v-spacer>
                            <v-chip>{{ isApprobed(balance.approbed) }}</v-chip>
                        </v-row>
                    </v-col>
                </v-sheet>
            </v-col>
            <v-col>
                <span class="text-h4">Balance pendiente</span>
                <v-sheet v-for="balance in notApprobedBalances" :key="balance.id" :rounded="true" class="pa-8 mb-2"
                    color="primary">
                    <v-col>
                        <v-row>
                            <span class="text-body-1">{{ balance.dayOfWeek }}</span>
                        </v-row>
                        <v-row>
                            <span class="text-body-1">29 de mayo del 2024</span>
                        </v-row>
                        <v-row class="pt-4">
                            <span class="text-body">${{ balance.total }}</span>
                            <v-spacer></v-spacer>
                            <v-chip>{{ isApprobed(balance.approbed) }}</v-chip>
                        </v-row>
                    </v-col>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import useAuthentication from '../composables/useAuthentication'
import useBalance from '../composables/useBalance'
const { logout } = useAuthentication()
const { approbedBalances, notApprobedBalances, balances } = useBalance()
const isApprobed = ((approbed: boolean): String => approbed ? 'Aprobado' : 'Sin aprobar')
const currentBalance = balances.at(-1)
</script>