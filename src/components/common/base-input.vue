<template>
	<input
		:type="type"
		class="ui-input"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		:placeholder="placeholder"
		min="1"
		step="1"
	/>
</template>

<script>
export default {
	props: ['type', 'placeholder', 'modelValue'],
}
</script>

<style lang="scss">
.ui-input {
	outline: none;
  width: 100%;
	padding: 11px 12px;
	background: #262626;
	border: 1px solid #4d4d4d;
	border-radius: 4px;
	color: #ffffff;
	font-weight: 500;
	font-size: 14px;
	&::placeholder {
		color: #ffffff;
		opacity: 0.4;
	}

	&:-ms-input-placeholder {
		color: #ffffff;
		opacity: 0.4;
	}

	&::-ms-input-placeholder {
		color: #ffffff;
		opacity: 0.4;
	}
	&[type='color'] {
		padding: 0;
	}
}
</style>
