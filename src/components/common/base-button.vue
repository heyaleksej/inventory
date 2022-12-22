<template>
	<button
		class="button pointer"
		:class="{'button_secondary': secondary }"
		@click.prevent="onClick"
	>
	</button>
</template>

<script>
export default {
	props: ['secondary', 'onClick'],
}
</script>

<style lang="scss">
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 15px;
	border-radius: 8px;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	background: #ffffff;
	span {
		color: #2d2d2d;
	}
	&_secondary {
		background: #fa7272;
		transition: all 0.5s;
		span {
			color: #ffffff;
		}
		&:hover {
			background: #ff8888;
		}
	}
}
</style>
