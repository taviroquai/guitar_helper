<script>
	import { onDestroy } from 'svelte';
	import { selectSong, sortValue } from './stores';

	import SongIndex from './lib/SongIndex.svelte';
	import Song from './lib/Song.svelte';
	import IndexButton from './lib/IndexButton.svelte';
	import SortButton from './lib/SortButton.svelte';

	export let title;
	export let selected;
	export let songs;
	export let sortedSongs = songs;
	export let sortType = 'Song';

	const unsubscribeSelect = selectSong.subscribe((value) => {
		selected = value ? songs.find((item) => item.ID === value) : null;
	});
	onDestroy(unsubscribeSelect);

	const unsubscribeSort = sortValue.subscribe((value) => {
		sortType = value;
		console.log(value, sortType);
		sortedSongs = songs.sort((a, b) => (a[value] < b[value] ? -1 : 1));
	});
	onDestroy(unsubscribeSort);

	function showIndex() {
		selectSong.update(() => '');
	}

	function showSong(id) {
		selectSong.update(() => id);
	}

	function toggleSort() {
		sortValue.update(() => (sortType === 'Song' ? 'Ordem' : 'Song'));
	}
</script>

<main class="p-4 text-white">
	<SongIndex {title} {sortedSongs} {selected} {showSong} />
	<Song {selected} />
	<SortButton {toggleSort} />
	<IndexButton {showIndex} />
</main>

<style>
</style>
