<template>
	<form @submit.prevent="submit">
		<input type="text" v-model="search.query">
		<button type="submit">Search</button>
	</form>

	<div class="search-results">
		<ul>
			<li v-for="image in images" :key="image.id">
				<img :src="image.images.original.url" :alt="image.alt_text">
			</li>
		</ul>
	</div>
</template>

<script>
import api from '@/api';

export default {
	name: "gihpy_search",

	data() {
		return {
			search: {
				query: "",
				results: []
			}
		}
	},

	computed: {
		images() {
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
		}
	}
};
</script>

<style scoped>
.search-results {

	ul,
	li {
		list-style-type: none;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	li {
		width: 250px;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
