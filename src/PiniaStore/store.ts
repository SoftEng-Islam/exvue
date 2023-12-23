import { defineStore } from 'pinia';
export const useTaskStore = defineStore('taskStore', {
	state: () => ({
		Users: [
			{ id: 1, title: "buy some milk", isFav: false },
		],
		name: 'Islam',
	}),
	getters: {
		fans() {}
	},
	actions: {
	}

});