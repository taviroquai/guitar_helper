import './index.css'
import App from './App.svelte'
import data from './data.json'
console.log(data)
const app = new App({
  target: document.getElementById('app'),
  props: {
    title: 'Song List',
    songs: data,
    selected: ''
  }
});

export default app
