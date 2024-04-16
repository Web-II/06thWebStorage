'use strict';
function init() {
  // In JavaScript wordt een cookie als volgt gecreëerd
  document.cookie = 'username=John Doe';

  // Je kan ook een datum aan toevoegen wanneer een cookie moet verstrijken
  // Een cookie wordt by default verwijderd als de browser wordt gesloten
  // Dit kan je ook zien.
  document.cookie = 'adblock_status=noactive; expires=Thu, 26 Dec 2030 12:00:00 UTC';

  // Met de parameter path, kan je het path opgeven waartoe de cookie behoort
  // Het path bepaalt op welke pagina's de cookie overal beschikbaar is
  // By default, behoort de cookie tot de huidige webpagina
  // Met path=/ kan de cookie voor de ganse website gelezen worden
  document.cookie = 'language=NL; expires=Thu, 26 Dec 2030 12:00:00 UTC; path=/';

  // Een cookie veranderen kan als volgt
  document.cookie = 'language=FR; expires=Thu, 26 Dec 2030 12:00:00 UTC; path=/';

  // Een cookie verwijderen, kan door de expires date vóór nu te plaatsen
  // document.cookie = 'language=FR; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/';

  // Alle cookies lezen
  const c = document.cookie;
  console.log(typeof c);
  console.log(c); // username=John Doe; adblock_status=noactive; language=FR
  c.split('; ').forEach((cookie) => {
    const [name, value] = cookie.split('=');
    console.log(`${name} --> ${value}`);
  });
}

window.onload = init;
// username --> John Doe
// adblock_status --> noactive
// language --> FR
