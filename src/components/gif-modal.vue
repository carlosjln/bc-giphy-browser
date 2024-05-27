<template>
	<div class="modal-overlay" @click.self="close_modal">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">GIF Viewer</h5>
				<button type="button" class="close-button" @click="close_modal">&times;</button>
			</div>

			<div class="modal-body">
				<img :src="current_gif.images.original.url" class="modal-image" alt="GIF" />
			</div>

			<div class="modal-footer">
				<button type="button" class="nav-button previous" @click.prevent="prev">&laquo; Previous</button>
				<button type="button" class="nav-button next" @click.prevent="next">Next &raquo;</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['gifs', 'selectedIndex'],

		data() {
			return {
				current_index: this.selectedIndex,
			};
		},

		computed: {
			current_gif() {
				return this.gifs[this.current_index];
			},
		},

		methods: {
			close_modal() {
				this.$emit('close');
			},

			prev() {
				this.current_index = (this.current_index - 1 + this.gifs.length) % this.gifs.length;
			},

			next() {
				this.current_index = (this.current_index + 1) % this.gifs.length;
			},
		},
	};
</script>

<style scoped>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		background: white;
		border-radius: 5px;

		width: 600px;
		height: 600px;
		overflow: hidden;
	}

	.modal-header,
	.modal-footer {
		padding: 10px;
		border-bottom: 1px solid #ccc;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.modal-title {
		margin: 0;
	}

	button {
		background: none;
		border: none;
		cursor: pointer;
	}

	.close-button {
		font-size: 25px;
	}
	
	.nav-button {
		padding: 8px 16px;
	}

	.nav-button+.nav-button {
		margin-left: 10px;
	}

	.previous {
		background-color: #f1f1f1;
		color: black;
	}

	.next {
		background-color: #04AA6D;
		color: white;
	}

	.modal-body {
		padding: 0;
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-image {
		width: 95%;
		max-height: 450px;
		object-fit: contain;
	}
</style>
