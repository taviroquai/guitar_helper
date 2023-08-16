<script>
	import { fade } from 'svelte/transition';

	export let selected;
</script>

<div class="text-3xl">
	{#if selected}
		<section id={selected.ID} class="song" in:fade>
			<h4 class="text-yellow-400">{selected.Song}</h4>
			<h6 class="text-yellow-400 text-xs">{selected.Tipo}</h6>
			<div class="pt-16 leading-tight text-2xl">{@html selected.Chords}</div>
			<div class="text-xl">{@html selected.Lyrics}</div>
		</section>
	{/if}
</div>

<style>
</style>
