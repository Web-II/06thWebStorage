'use strict';
class Sticky {
  #id;
  #note;
  #color;

  constructor(note, color) {
    this.#id = 'sticky_' + Math.random().toString(36).substring(2);
    this.note = note;
    this.color = color;
  }

  get id() {
    return this.#id;
  }
  get note() {
    return this.#note;
  }
  get color() {
    return this.#color;
  }
  set note(value) {
    this.#note = value;
  }
  set color(value) {
    this.#color = value;
  }
  toJSON() {
    return {
      id: this.id,
      note: this.note,
      color: this.color,
    };
  }
}

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
      (result, [key, value]) => {
        // converteert JSON string naar object literal
        const storObj = JSON.parse(value);
        // converteert object literal naar object van class Sticky
        const sticky = new Sticky(storObj.note, storObj.color);
        return (result += `${key}:${sticky.note}-${sticky.color}\n`);
      },
      ''
    );
    alert(allStickies);
  }
  clear() {
    this.#storage.clear();
  }
  addSticky(note, color) {
    const sticky = new Sticky(note, color);
    this.#storage.setItem(sticky.id, JSON.stringify(sticky));
  }
}

function init() {
  const stickiesComponent = new StickiesComponent(localStorage);
  const addButton = document.getElementById('add');
  const clearButton = document.getElementById('clear');
  const noteText = document.getElementById('notetext');
  const noteColor = document.getElementById('notecolor');

  if (!stickiesComponent.storage) {
    alert('browser ondersteunt geen storage');
    addButton.disabled = true;
    clearButton.disabled = true;
    return;
  }

  addButton.onclick = function () {
    stickiesComponent.addSticky(noteText.value, noteColor.value);
    noteText.value = '';
    stickiesComponent.toHTML();
  };
  clearButton.onclick = function () {
    stickiesComponent.clear();
  };
}

window.onload = init;
