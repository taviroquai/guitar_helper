<script>
	import { fade } from 'svelte/transition';

	export let title;
	export let sortedSongs;
	export let selected;
	export let showSong = (id) => null;
</script>

<div>
	{#if !selected}
		<section id="index" in:fade>
			<h3 class="fixed pb-6 text-3xl font-bold underline">
				{title}
			</h3>

			<ul class="pt-16 text-sm grid grid-cols-3 gap-2">
				{#each sortedSongs as song}
					<li>
						<a href="#{song.ID}" class="block px-2 w-full" on:click={() => showSong(song.ID)}>
							{song.Song}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</div>

<style>
</style>
