import { writable, get } from 'svelte/store';

export const selectSong = writable('');
export const selected = get(selectSong);
