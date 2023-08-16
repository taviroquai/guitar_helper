import { writable, get } from 'svelte/store';

export const selectSong = writable('');
export const selected = get(selectSong);

export const sortValue = writable('Song');
export const sortType = get(sortValue);
