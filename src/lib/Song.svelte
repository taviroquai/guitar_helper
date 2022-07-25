<script>
  import { fade } from 'svelte/transition';

  export let selected
</script>

<div class="text-5xl">

  {#if selected }
    <section id="{selected.ID}" class="song" in:fade>
      <h4 class="fixed text-yellow-400">{ selected.Song }</h4>
      <div class="pt-16">{@html selected.Chords }</div>
    </section>
  {/if}

</div>

<style>
</style>
