<script>
  import { onDestroy } from 'svelte'
  import { selectSong } from './stores'

  import SongIndex from './lib/SongIndex.svelte'
  import Song from './lib/Song.svelte'
  import IndexButton from './lib/IndexButton.svelte'

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

<main class="p-4 text-white">
  
  <SongIndex title={title} songs={songs} {selected} {showSong} />
  <Song {selected} />
  <IndexButton {showIndex} />

</main>

<style>
</style>
