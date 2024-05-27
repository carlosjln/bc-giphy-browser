<template>
	<header>
		<form @submit.prevent="submit">
			<input type="text" v-model="search.query">
			<button type="submit">Search</button>
		</form>
	</header>

	<main class="search-results">
		<ul>
			<li v-for="       image in images       " :key="image.id">
				<img :src="image.images.original.url" :alt="image.alt_text">
			</li>
		</ul>
	</main>
</template>

<script>
import api from '@/api';

export default {
	name: "gihpy_search",

	data() {
		return {
			search: {
				query: "zim invader",
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
