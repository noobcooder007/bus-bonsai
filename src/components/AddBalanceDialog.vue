<template>
	<v-card>
		<v-card-item>
			<v-card-title>
				Añadir balance
			</v-card-title>
			<v-card-subtitle>
				Ingresa los datos que se piden a continuación
			</v-card-subtitle>
		</v-card-item>
		<v-card-text>
			Añade el balance de cualquier dia, en caso de no haberlo registrado
		</v-card-text>
		<v-form v-model="isFormValid">
			<v-container>
				<v-col cols="4">
					<v-date-picker color="primary"></v-date-picker>
					<v-text-field v-model="total" class="pb-4" label="Total" type="number" min="0" max="20000"
						inputmode=""></v-text-field>
					<v-row>
						<v-btn @click="saveBalance()">Guardar</v-btn>
						<v-btn class="ml-4" @click="$emit('cancel')"
							variant="outlined">Cancelar</v-btn>
					</v-row>
				</v-col>
			</v-container>
		</v-form>
	</v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['save','cancel'])
const isFormValid = ref(false)
const total = ref(0)
const saveBalance = () => {
	emit('save',{
		dayOfWeek: 'Sabado',
		week: 1,
		total: total.value,
		driver: 1,
		approbed: false,
		createdAt: new Date(),
		isActive: true
	})
	total.value = 0
}
</script>
