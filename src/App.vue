<template>
	<div>
		<RouterView />
		<div>
			tut date

			<OButton text="text" @click="console.log('test')" />
		</div>
	</div>
</template>
<script setup lang="ts">
import { OButton } from "orange-ui-kit";
</script>
<style scoped></style>
