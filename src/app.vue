<template>
	<header>
		<form @submit.prevent="submit">
			<input type="text" v-model="search.query" placeholder="Search for GIFs">
			<button type="submit">Search</button>
		</form>
	</header>

	<main class="search-results">
		<ul>
			<li v-for="(gif, index) in gifs" :key="gif.id">
				<a href="#" @click.prevent="show_modal( index )">
					<img class="thumbnail" v-lazyload="gif.images.fixed_height_still.url" :alt="gif.alt_text">
				</a>
			</li>
		</ul>
	</main>

	<GifModal v-if="selected_gif_index !== null" :gifs="gifs" :selectedIndex="selected_gif_index" @close="close_modal" />
</template>

<script>
	import api from '@/api';
	import GifModal from '@/components/gif-modal.vue';

	export default {
		name: "gihpy_search",

		components: {
			GifModal
		},

		data() {
			return {
				search: {
					query: "",
					results: []
				},

				selected_gif_index: null,
			}
		},

		computed: {
			gifs() {
				return this.search.results;
			}
		},

		methods: {
			submit: function () {
				let search = this.search;
				let query = search.query;

				api.giphy_search(query)
					.then(response => {
						search.results = response.data.data;
					});
			},

			show_modal(index) {
				this.selected_gif_index = index;
			},

			close_modal() {
				this.selected_gif_index = null;
			}
		}
	};
</script>

<style lang="scss" scoped>
	header {
		margin-bottom: 20px;
	}

	form {
		display: flex;
		align-items: center;
		justify-content: center;

		input {
			height: 30px;
			border-radius: 4px;
			border: 1px solid silver;
			padding: 0 8px;

			&:focus-visible {
				outline: none;
			}
		}

		button {
			height: 34px;
			border-radius: 4px;
			border: 1px solid silver;
			font-size: 15px;
			font-family: inherit;

			background-color: #f9f9f9;
			cursor: pointer;
		}

		input+button {
			margin-left: 5px;
		}
	}

	.search-results {
		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}

		li {
			width: 250px;
			overflow: hidden;
			margin: 5px;
		}

		.thumbnail {
			width: 250px;
			height: 250px;
			object-fit: cover;
		}
	}
</style>
