'use strict';
class StickiesComponent {
  #storage;
  constructor(storage) {
    this.#storage = storage;
  }
  get storage() {
    return this.#storage;
  }
  toHTML() {
    const allStickies = Object.entries(this.#storage).reduce(
      (result, [key, value]) => (result += `${key}: ${value}\n`),
      ''
    );
    alert(allStickies);
  }
  clear() {
    this.#storage.clear();
  }
  addSticky(note) {
    const key = 'sticky_' + Math.random().toString(36).substring(2);
    this.#storage.setItem(key, note);
  }
}

function init() {
  const stickiesComponent = new StickiesComponent(localStorage);
  const addButton = document.getElementById('add');
  const clearButton = document.getElementById('clear');
  const noteText = document.getElementById('notetext');

  if (!stickiesComponent.storage) {
    alert('browser ondersteunt geen storage');
    addButton.disabled = true;
    clearButton.disabled = true;
    return;
  }
  addButton.onclick = () => {
    stickiesComponent.addSticky(noteText.value);
    noteText.value = '';
    stickiesComponent.toHTML();
  };
  clearButton.onclick = function () {
    stickiesComponent.clear();
  };
}

window.onload = init;
