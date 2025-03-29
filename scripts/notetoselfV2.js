// TODO:
// 1. Maak een Sticky-klasse met het volgende:
// - id (private)
// - note (getter + setter)
// - color (getter + setter)
// 2. constructor die zelf de key bepaald (zie v1) en de andere nodige waarden zet.
// 3. methode toJSON om het object om te zetten naar een object literal.

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
      (result, [key, value]) => {
        // converteert JSON string naar object literal
        const storObj = JSON.parse(value);

        // TODO: 
        // 1. Converteert object literal naar object van class Sticky en gebruik deze.
        return (result += `${key}:${key}-${color}\n`);
      },
      ''
    );
    alert(allStickies);
  }
  #clear() {
    this.#storage.clear();
  }
  #addSticky(note, color) {
    // TODO: 
    // 1. Maak een nieuw Sticky-object aan.
    // 2. Seraliseer het Sticky-object naar JSON en sla het op in localStorage. Gebruik het Id van de Sticky als sleutel.
  }

  #initializeEventHandlers() {
    const addButton = document.getElementById('add');
    const clearButton = document.getElementById('clear');
    const noteText = document.getElementById('notetext');
    const noteColor = document.getElementById('notecolor');

    if (!this.#storage) {
      alert('browser ondersteunt geen storage');
      addButton.disabled = true;
      clearButton.disabled = true;
      return;
    }

    addButton.onclick = () => {
      this.#addSticky(noteText.value, noteColor.value);
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
