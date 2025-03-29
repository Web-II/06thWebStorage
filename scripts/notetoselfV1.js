'use strict';
class StickiesComponent {
  #storage;
  constructor(storage) {
    this.#storage = storage;
    this.#initializeEventHandlers();
  }
  get storage() {
    return this.#storage;
  }
  #toHTML() {
    const allStickies = Object.entries(this.#storage).reduce(
      (result, [key, value]) => (result += `${key}: ${value}\n`),
      ''
    );
    alert(allStickies);
  }
  #clear() {
    this.#storage.clear();
  }
  #addSticky(note) {
    const key = 'sticky_' + Math.random().toString(36).substring(2);
    this.#storage.setItem(key, note);
  }

  #initializeEventHandlers() {
    const addButton = document.getElementById('add');
    const clearButton = document.getElementById('clear');
    const noteText = document.getElementById('notetext');

    if (!this.#storage) {
      alert('browser ondersteunt geen storage');
      addButton.disabled = true;
      clearButton.disabled = true;
      return;
    }
    addButton.onclick = () => {
      this.#addSticky(noteText.value);
      noteText.value = '';
      this.#toHTML();
    };
    clearButton.onclick = () => {
      this.#clear();
    };

  }
}

function init() {
  new StickiesComponent(localStorage);
}

window.onload = init;
