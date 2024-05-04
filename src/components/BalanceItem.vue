<template>
	<v-col>
		<v-row>
			<span class="text-body-1">{{ balance.dayOfWeek }}</span>
		</v-row>
		<v-row>
			<span class="text-body-1">{{ balance.createdAt.toLocaleDateString() }}</span>
		</v-row>
		<v-row class="pt-4">
			<span class="text-body">${{ balance.total }}</span>
			<v-spacer></v-spacer>
			<v-chip>{{ isApprobed(balance.approbed) }}</v-chip>
		</v-row>
	</v-col>
</template>

<script setup lang="ts">
import { Balance } from '../models/Balance';

defineProps<{
	balance: Balance,
	isApprobed: (approbed: boolean) => String;
}>()
</script>
