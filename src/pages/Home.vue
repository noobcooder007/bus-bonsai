<template>
    <v-container>
        <Header @logout="logout" :user="user" />
        <v-row>
            <v-col>
                <span class="text-h4">Balance de hoy</span>
                <v-sheet v-if="currentBalance" :rounded="true" class="pa-8 mt-2" color="primary">
                    <BalanceItem :isApprobed="isApprobed" :balance="currentBalance" />
                </v-sheet>
                <v-row class="pt-8 pl-4">
                    <v-btn variant="tonal" @click="isDialogOpened = !isDialogOpened">Añadir balance</v-btn>
                </v-row>
            </v-col>
            <v-col>
                <span class="text-h4">Balance</span>
                <v-infinite-scroll @load="loadBalances">
                    <template v-for="balance in approbedBalances" :key="balance.id">
                        <v-sheet :rounded="true" class="pa-8 mb-2" color="primary">
                            <BalanceItem :isApprobed="isApprobed" :balance="balance" />
                        </v-sheet>
                    </template>
                    <template v-slot:load-more="{ props }">
                        <v-btn icon="mdi-refresh" variant="text" v-bind="props" />
                    </template>
                    <template v-slot:empty>
                        <span>
                            Esta muy vacío aqui
                        </span>
                    </template>
                </v-infinite-scroll>
            </v-col>
            <v-col>
                <span class="text-h4">Balance pendiente</span>
                <v-sheet v-for="balance in notApprobedBalances" :key="balance.id" :rounded="true" class="pa-8 mb-2"
                    color="primary">
                    <BalanceItem :isApprobed="isApprobed" :balance="balance" />
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
    <v-bottom-sheet v-model="isDialogOpened">
        <AddBalanceDialog @cancel="isDialogOpened = !isDialogOpened" @save="saveBalance" />
    </v-bottom-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Balance } from '../models/Balance'
import useAuthentication from '../composables/useAuthentication'
import useBalance from '../composables/useBalance'
const user = useAuthentication().user
const logout = useAuthentication().logout
const { approbedBalances, notApprobedBalances, currentBalance, addBalance, loadBalances } = useBalance()
const isApprobed = ((approbed: boolean): String => approbed ? 'Aprobado' : 'Sin aprobar')
const isDialogOpened = ref(false)
const saveBalance = (balance: Balance) => {
    addBalance(balance)
    isDialogOpened.value = !isDialogOpened.value
}
</script>