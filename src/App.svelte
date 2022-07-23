<script>
  import { onDestroy } from 'svelte'
  import { selectSong } from './stores.js'

  import SongIndex from './SongIndex.svelte';
  import Song from './Song.svelte';
  import IndexButton from './IndexButton.svelte';

  export let title
  export let songs
  export let selected
  const unsubscribe = selectSong.subscribe(value => {
    selected = value ? songs.find(item => item.ID === value) : null
  })
  onDestroy(unsubscribe)

  function showIndex() {
    selectSong.update(() => '');
  }

  function showSong(id) {
    selectSong.update(() => id);
  }

</script>

<main class="h-screen p-4 bg-black text-white">
  
  <SongIndex title={title} songs={songs} {selected} {showSong} />
  <Song {selected} />
  <IndexButton {showIndex} />

</main>

<style>
</style>
