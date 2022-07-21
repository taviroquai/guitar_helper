function hideSongs() {
  var items = document.getElementsByClassName('song');
  for (var i = 0; i < items.length; i++) {
    items.item(i).className = 'song hidden';
  }
}

function showSong(id) {
  hideIndex();
  hideSongs();
  var el = document.getElementById(id);
  el.className = "song block";
}

function hideIndex() {
  var el = document.getElementById('index');
  el.className = "hidden";
}

function showIndex() {
  hideSongs();
  var el = document.getElementById('index');
  el.className = "block";
}

