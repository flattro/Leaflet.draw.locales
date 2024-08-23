"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={draw:{toolbar:{actions:{title:"መሳል ተው",text:"ተው"},finish:{title:"መሳል ጨርስ",text:"ጨርስ"},undo:{title:"መጨረሻ የተሳለውን ነጥብ አጥፋ",text:"መጨረሻ የተሳለውን ነጥብ አጥፋ"},buttons:{polyline:"ፖሊላየን ሳል",polygon:"ፖሊጎን ሳል",rectangle:"አራት መአዘን ሳል",circle:"ክብ ሳል",marker:"ምልክት ሳል",circlemarker:"ክብ ምልክት ሳል"}},handlers:{circle:{tooltip:{start:"ክብ ለመሳል ተጭንው ይጎትቱ"},radius:"ራዲየስ"},circlemarker:{tooltip:{start:"ክብ ምልክት ለመሳል ካርታውን ይጫኑ ይጎትቱ"}},marker:{tooltip:{start:"ምልክት ለመሳል ካርታውን ይጫኑ ይጎትቱ"}},polygon:{tooltip:{start:"ቅርጽን ለመሳል ካርታውን ተጭነው ይጎትቱ",cont:"ቅርጽን መሳሎን ለመቀጠል ይጫኑ",end:"ቅርጽን ስሎ ለመጨረስ የመጀመሪያውን ነጥብ ይጫኑ"}},polyline:{error:"<strong>ስህተት:</strong> መስመሮች እርስ በእርስ መተላለፍ አይችሉም!",tooltip:{start:"መስመር ለመሳል ካርታውን ተጭነው ይጎትቱ",cont:"መስመር መሳሎን ለመቀጠል ይጫኑ",end:"መስመር ስሎ ለመጨረስ የመጨረሻውን ነጥብ ይጫኑ"}},rectangle:{tooltip:{start:"ዐራት መአዝን ለመሳል ካርታውን ይጫኑ ይጎትቱ"}},simpleshape:{tooltip:{end:"ስለው ለመጨረስ አይጤን ይልቀቁ"}}}},edit:{toolbar:{actions:{save:{title:"ለውጦቹን አኑር",text:"አኑር"},cancel:{title:"ማስተካከሉን ተው፣ ሁሉንም ለውጦች ሰርዝ",text:"ተው"},clearAll:{title:"ሁሉንም የካርታ ገጾች አጥፋ",text:"ሁሉንም አጥፋ"}},buttons:{edit:"የካርታ ገጽ አስተካክል",editDisabled:"የሚስተካከል የካርታ ገጽ የለም",remove:"የካርታ ገጽ ሰርዝ.",removeDisabled:"የሚሰረዝ የካርታ ገጽ የለም"}},handlers:{edit:{tooltip:{text:"ለማስተካከል ምልክቱን ወይም መያዣውን ይጎትቱ",subtext:"ለውጥጡን ለመተው ተው የሚለውን ይጫኑ"}},remove:{tooltip:{text:"ማጥፋት የፈለጉትን ይጫኑ"}}}}},t={draw:{toolbar:{actions:{title:"Zrušit kreslení",text:"Zrušit"},finish:{title:"Dokončit kreslení",text:"Dokončit"},undo:{title:"Smazat poslední nakreslený bod",text:"Smazat poslední bod"},buttons:{polyline:"Nakreslit mnohoúhelník",polygon:"Nakreslit polygon",rectangle:"Nakreslit obdélník",circle:"Nakreslit kruh",marker:"Nakreslit značku",circlemarker:"Nakreslit kruhovou značku"}},handlers:{circle:{tooltip:{start:"Kliknout a táhnout pro nakreslení kruhu."},radius:"Poloměr"},circlemarker:{tooltip:{start:"Kliknout do mapy pro umístění kruhové značky."}},marker:{tooltip:{start:"Kliknout do mapy pro umístění značky."}},polygon:{tooltip:{start:"Kliknout pro začátek kreslení tvaru.",cont:"Kliknout pro pokračování v kreslení tvaru.",end:"Kliknout na pvní bod k uzavření tvaru."}},polyline:{error:"<strong>Chyba:</strong> hrany tvaru se nemohou protínat!",tooltip:{start:"Kliknout pro začátek kreslení úsečky.",cont:"Kliknout pro pokračování v kreslení úsečky.",end:"Kliknout na koncový bod k ukončení kreslení úsečky."}},rectangle:{tooltip:{start:"Kliknout a táhnout k nakreslení obdélníku."}},simpleshape:{tooltip:{end:"Pustit myš k dokončení kreslení."}}}},edit:{toolbar:{actions:{save:{title:"Uložit změny.",text:"Uložit"},cancel:{title:"Zrušit úpravu, zruší všechny změny.",text:"Zrušit"},clearAll:{title:"Vymazat všechny vrstvy.",text:"Vymazat vše"}},buttons:{edit:"Upravit vrstvy.",editDisabled:"Žádné vrstvy k úpravě.",remove:"Vymazat vrstvy.",removeDisabled:"Žádná vrstva k vymazání."}},handlers:{edit:{tooltip:{text:"Táhnout za úchopy pro editaci tvaru.",subtext:"Kliknutím na zrušit vrátite změny."}},remove:{tooltip:{text:"Kliknout na tvar pro smazání"}}}}},a={draw:{toolbar:{actions:{title:"Zeichnung abbrechen",text:"Abbrechen"},finish:{title:"Zeichnung fertigstellen",text:"Fertigstellen"},undo:{title:"Lösche den zuletzt gezeichneten Punkt",text:"Letzter Punkt löschen"},buttons:{polyline:"Zeichne eine Linie",polygon:"Zeichne ein Polygon",rectangle:"Zeichne ein Rechteck",circle:"Zeichne einen Kreis",marker:"Zeichne einen Marker",circlemarker:"Zeichne einen Kreis-Marker"}},handlers:{circle:{tooltip:{start:"Klicken und ziehen um einen Kreis zu zeichnen."},radius:"Radius"},circlemarker:{tooltip:{start:"Karte anklicken um einen Kreis-Marker zu platzieren."}},marker:{tooltip:{start:"Karte anklicken um einen Marker zu platzieren."}},polygon:{tooltip:{start:"Klicken um mit dem Zeichnen einer Form zu beginnen.",cont:"Klicken um mit dem Zeichnen dieser Form fortzufahren.",end:"Erster Punkt anklicken um diese Form abzuschliessen."}},polyline:{error:"<strong>Fehler:</strong> Form-Ecken dürfen sich nicht überschneiden!",tooltip:{start:"Klicken um mit dem Zeichnen einer Linie zu beginnen.",cont:"Klicken um mit dem Zeichnen dieser Linie fortzufahren.",end:"Erster Punkt anklicken um diese Linie abzuschliessen."}},rectangle:{tooltip:{start:"Klicken und ziehen um ein Rechteck zu zeichnen."}},simpleshape:{tooltip:{end:"Maustaste loslassen um die Zeichnung fertigzustellen."}}}},edit:{toolbar:{actions:{save:{title:"Speichere Änderungen.",text:"Speichern"},cancel:{title:"Bearbeitung abbrechen, alle Änderungen verwerfen.",text:"Abbrechen"},clearAll:{title:"Alle Layer bereinigen.",text:"Alles bereinigen"}},buttons:{edit:"Layer bearbeiten.",editDisabled:"Keine Layer zum bearbeiten.",remove:"Layer löschen.",removeDisabled:"Keine Layer zum löschen."}},handlers:{edit:{tooltip:{text:"Ziehe den Griff oder den Marker um die Eigenschaft zu bearbeiten.",subtext:"Klicke abbrechen um Änderungen rückgängig zu machen."}},remove:{tooltip:{text:"Klicke auf eine Eigenschaft um diese zu entfernen."}}}}},i={draw:{toolbar:{actions:{title:"Cancel drawing",text:"Cancel"},finish:{title:"Finish drawing",text:"Finish"},undo:{title:"Delete last point drawn",text:"Delete last point"},buttons:{polyline:"Draw a polyline",polygon:"Draw a polygon",rectangle:"Draw a rectangle",circle:"Draw a circle",marker:"Draw a marker",circlemarker:"Draw a circlemarker"}},handlers:{circle:{tooltip:{start:"Click and drag to draw circle."},radius:"Radius"},circlemarker:{tooltip:{start:"Click map to place circle marker."}},marker:{tooltip:{start:"Click map to place marker."}},polygon:{tooltip:{start:"Click to start drawing shape.",cont:"Click to continue drawing shape.",end:"Click first point to close this shape."}},polyline:{error:"<strong>Error:</strong> shape edges cannot cross!",tooltip:{start:"Click to start drawing line.",cont:"Click to continue drawing line.",end:"Click last point to finish line."}},rectangle:{tooltip:{start:"Click and drag to draw rectangle."}},simpleshape:{tooltip:{end:"Release mouse to finish drawing."}}}},edit:{toolbar:{actions:{save:{title:"Save changes.",text:"Save"},cancel:{title:"Cancel editing, discards all changes.",text:"Cancel"},clearAll:{title:"Clear all layers.",text:"Clear All"}},buttons:{edit:"Edit layers.",editDisabled:"No layers to edit.",remove:"Delete layers.",removeDisabled:"No layers to delete."}},handlers:{edit:{tooltip:{text:"Drag handles, or marker to edit feature.",subtext:"Click cancel to undo changes."}},remove:{tooltip:{text:"Click on a feature to remove"}}}}},r={draw:{toolbar:{actions:{title:"Cancelar dibujo",text:"Cancelar"},finish:{title:"Terminar dibujo",text:"Terminar"},undo:{title:"Eliminar último punto dibujado",text:"Eliminar último punto"},buttons:{polyline:"Dibujar una polilínea",polygon:"Dibujar un polígono",rectangle:"Dibujar un rectángulo",circle:"Dibujar un círculo",marker:"Dibujar un marcador",circlemarker:"Dibujar un marcador circular"}},handlers:{circle:{tooltip:{start:"Haz click y arrastra para dibujar un círculo"},radius:"Radio"},circlemarker:{tooltip:{start:"Haz click en el mapa para situar el marcador circular"}},marker:{tooltip:{start:"Haz click en el mapa para situar el marcador"}},polygon:{tooltip:{start:"Haz click para empezar a dibujar la forma",cont:"Haz click para continuar dibujando la forma",end:"Haz click en el primer punto para cerrar la forma"}},polyline:{error:"<strong>Error:</strong> las líneas no deben cruzarse",tooltip:{start:"Haz click para empezar a dibujar la línea",cont:"Haz click para continuar dibujando la línea",end:"Haz click en el último punto para terminar la línea"}},rectangle:{tooltip:{start:"Haz click y arrastra para dibujar un rectángulo"}},simpleshape:{tooltip:{end:"Suelta el ratón para terminar de dibujar"}}}},edit:{toolbar:{actions:{save:{title:"Guardar los cambios",text:"Guardar"},cancel:{title:"Cancelar la edición, descarta todos los cambios",text:"Cancelar"},clearAll:{title:"Limpiar todas las capas",text:"Limpiar todo"}},buttons:{edit:"Editar capas",editDisabled:"No hay capas que editar",remove:"Eliminar capas",removeDisabled:"No hay capas que eliminar"}},handlers:{edit:{tooltip:{text:"Arrastra el marcador para editar la forma",subtext:"Haz click en cancelar para deshacer los cambios"}},remove:{tooltip:{text:"Haz click en una forma para eliminarla"}}}}},l={draw:{toolbar:{actions:{title:"Peru piirustus",text:"Peru"},finish:{title:"Hyväksy piirustus",text:"Hyväksy"},undo:{title:"Poista viimeinen piirretty piste",text:"Poista viimeinen piste"},buttons:{polyline:"Piirrä murtoviiva",polygon:"Piirrä monikulmio",rectangle:"Piirrä suorakulmio",circle:"Piirrä ympyrä",marker:"Piirrä merkki",circlemarker:"Piirrä piirimerkki"}},handlers:{circle:{tooltip:{start:"Piirrä ympyrä pitämällä hiiri painettuna ja vetämällä."},radius:"Säde"},circlemarker:{tooltip:{start:"Aseta ympyrämerkki painamalla karttaa."}},marker:{tooltip:{start:"Aseta markkeri painamalla karttaa."}},polygon:{tooltip:{start:"Paina aloittaaksesi muodon piirtämisen.",cont:"Paina jatkaaksesi muodon piirtämistä.",end:"Sulje muoto painamalla ensimmäistä pistettä."}},polyline:{error:"<strong>Virhe:</strong> muodon reunaa ei voi ylittää!",tooltip:{start:"Paina aloittaaksesi viivan piirtämisen.",cont:"Paina jatkaaksesi viivan piirtämistä.",end:"Paina viimeistä pistettä päättäksesi viiva."}},rectangle:{tooltip:{start:"Piirrä suorakulmio pitämällä hiiri painettuna ja vetämällä."}},simpleshape:{tooltip:{end:"Vapauta hiiri päättääksesi piirtämisen."}}}},edit:{toolbar:{actions:{save:{title:"Hyväksy muutokset.",text:"Hyväksy"},cancel:{title:"Peru muokkaus, hylkää kaikki muutokset.",text:"Peru"},clearAll:{title:"Poista kaikki tasot.",text:"Poista kaikki"}},buttons:{edit:"Muokkaa tasoja.",editDisabled:"Ei muokattavia tasoja.",remove:"Poista tasot.",removeDisabled:"Ei poistettavia tasoja."}},handlers:{edit:{tooltip:{text:"Vedä pistettä tai markkeria muokataksesi piirrettyjä ominaisuuksia.",subtext:"Kumoa muutokset painamalla peruuta."}},remove:{tooltip:{text:"Paina piirrettyä ominaisuutta poistaaksesi"}}}}},o={draw:{toolbar:{actions:{title:"Annuler le dessin",text:"Annuler"},finish:{title:"Terminer le dessin",text:"Terminer"},undo:{title:"Supprimer le dernier point tiré",text:"Supprimer le dernier point"},buttons:{polyline:"Dessinez une polyligne",polygon:"Dessinez un polygone",rectangle:"Dessinez un rectangle",circle:"Dessiner un cercle",marker:"Dessinez un marqueur",circlemarker:"Dessinez un marqueur circulaire"}},handlers:{circle:{tooltip:{start:"Cliquez et faites glisser pour dessiner le cercle."},radius:"Rayon"},circlemarker:{tooltip:{start:"Cliquez sur la carte pour placer le marqueur circulaire."}},marker:{tooltip:{start:"Cliquez sur la carte pour placer le marqueur."}},polygon:{tooltip:{start:"Cliquez pour commencer à dessiner.",cont:"Cliquez pour continuer à dessiner.",end:"Cliquez sur le premier point pour fermer cette forme."}},polyline:{error:"<strong>Erreur:</strong> les polyligne ne peuvent pas traverser!",tooltip:{start:"Cliquez pour commencer à dessiner.",cont:"Cliquez pour continuer à dessiner.",end:"Cliquez sur le dernier point pour fermer cette forme."}},rectangle:{tooltip:{start:"Cliquez et faites glisser pour dessiner le rectangle."}},simpleshape:{tooltip:{end:"Relâchez la souris pour terminer le dessin."}}}},edit:{toolbar:{actions:{save:{title:"Sauvegarder les modifications.",text:"Sauvegarder"},cancel:{title:"Annuler l'édition, rejette toutes les modifications.",text:"Annuler"},clearAll:{title:"Effacez toutes les collections.",text:"Tout effacer"}},buttons:{edit:"Modifier les collections.",editDisabled:"Pas de collections à éditer.",remove:"Supprimez les collections.",removeDisabled:"Pas de collections à supprimer."}},handlers:{edit:{tooltip:{text:"Sélectionnez les poignées ou le marqueur pour modifier l'entité.",subtext:"Cliquez sur annuler pour rétablir les modifications."}},remove:{tooltip:{text:"Cliquez sur une entité pour supprimer"}}}}},n={draw:{toolbar:{actions:{title:"Rajzolás elvetése",text:"Mégse"},finish:{title:"Rajzolás befejezése",text:"Befejezés"},undo:{title:"Legutóbbi pont törlése",text:"Legutóbbi pont törlése"},buttons:{polyline:"Útvonal rajzolása",polygon:"Sokszög rajzolása",rectangle:"Négyszög rajzolása",circle:"Kör rajzolása",marker:"Jelölő rajzolása",circlemarker:"Kör-jelölő rajzolása"}},handlers:{circle:{tooltip:{start:"Kattintson és tartsa nyomva a rajzoláshoz."},radius:"Sugár"},circlemarker:{tooltip:{start:"Kör-jelölő elhelyezéséhez kattintson a térképre."}},marker:{tooltip:{start:"Jelölő elhelyezéséhez kattintson a térképre."}},polygon:{tooltip:{start:"Alakzat rajzolásához kattintson a térképre.",cont:"Alakzat folytatásához kattintson a térképre.",end:"Alakzat befejezéséhez kattintson a kezdőpontra."}},polyline:{error:"<strong>Error:</strong> shape edges cannot cross!",tooltip:{start:"Útvonal rajzolásához kattintson a térképre.",cont:"Útvonal folytatásához kattintson a térképre.",end:"Útvonal befejezéséhez kattintson a végpontra."}},rectangle:{tooltip:{start:"Kattintson és tartsa nyomva négyszög rajzolásához."}},simpleshape:{tooltip:{end:"Ha elégedett az alakzattal, engedje fel az egér gombját."}}}},edit:{toolbar:{actions:{save:{title:"Változtatások elmentése.",text:"Mentés"},cancel:{title:"Változtatások elvetése.",text:"Mégse"},clearAll:{title:"Összes réteg törlése.",text:"Összes törlése"}},buttons:{edit:"Rétegek szerkesztése.",editDisabled:"Nem állnak rendelkezésre szerkeszthető rétegek.",remove:"Rétegek törlése.",removeDisabled:"Nem állnak rendelkezésre törölhető rétegek."}},handlers:{edit:{tooltip:{text:"Módosításhoz használja a jelölők, alakzatok kezelőit.",subtext:"Változások elvetéséhez kattintson a 'Mégse' gombra."}},remove:{tooltip:{text:"Kattintson a jelölőkre, alakzatokra az eltávolításukhoz."}}}}},s={draw:{toolbar:{actions:{title:"Annulla disegno",text:"Annulla"},finish:{title:"Completa disegno",text:"Completa"},undo:{title:"Elimina l'ultimo punto disegnato",text:"Elimina l'ultimo punto"},buttons:{polyline:"Disegna una polilinea",polygon:"Disegna un poligono",rectangle:"Disegna un rettangolo",circle:"Disegna un cerchio",marker:"Disegna un marcatore",circlemarker:"Disegna un marker circolare"}},handlers:{circle:{tooltip:{start:"Clicca e trascina per disegnare un cerchio."},radius:"Raggio"},circlemarker:{tooltip:{start:"Clicca la mappa per posizionare un marcatore circolare."}},marker:{tooltip:{start:"Clicca la mappa per posizionare un marcatore."}},polygon:{tooltip:{start:"Clicca per iniziare a disegnare una figura.",cont:"Clicca per continuare a disegnare una figura.",end:"Clicca il primo punto per chiudere questa figura."}},polyline:{error:"<strong>Errore:</strong> i margini della figura non si possono incrociare!",tooltip:{start:"Clicca per iniziare a disegnare una linea.",cont:"Clicca per continuare a disegnare una linea",end:"Clicca l'ultimo punto per finire questa linea"}},rectangle:{tooltip:{start:"Clicca e trascina per disegnare un rettangolo."}},simpleshape:{tooltip:{end:"Rilascia il mouse per finire il disegno."}}}},edit:{toolbar:{actions:{save:{title:"Salva modifiche.",text:"Salva"},cancel:{title:"Annulla tutte le modifiche.",text:"Annulla"},clearAll:{title:"Pulisci tutti i livelli.",text:"Pulisci tutto"}},buttons:{edit:"Modifica i livelli.",editDisabled:"Nessun livello disponibile per la modifica.",remove:"Elimina livelli.",removeDisabled:"Nessun livello disponibile per l'eliminazione."}},handlers:{edit:{tooltip:{text:"Trascina le maniglie, o i marcatori per modificare l'elemento.",subtext:"Clicca annulla per annullare le modifiche."}},remove:{tooltip:{text:"Clicca un elemento per rimuoverlo"}}}}},c={draw:{toolbar:{actions:{title:"ხატვის გაუქმება",text:"გაუქმება"},finish:{title:"ხატვის დასრულება",text:"დასრულება"},undo:{title:"ბოლო დახატული წერტილის წაშლა",text:"ბოლო წერტილის წაშლა"},buttons:{polyline:"პოლილაინის დახაზვა",polygon:"პოლიგონის დახაზვა",rectangle:"მართკუთხედის დახაზვა",circle:"წრის დახაზვა",marker:"ადგილმდებარეობის დატანა",circlemarker:"ადგილმდებარეობის დატანა(წრის სახით)"}},handlers:{circle:{tooltip:{start:"დააწკაპუნეთ და გადაიტანეთ იმისათვის, რომ წრე დახაზოთ."},radius:"რადიუსი"},circlemarker:{tooltip:{start:"დააწკაპუნეთ რუკაზე ადგილმდებარეობის შესაქმნელად."}},marker:{tooltip:{start:"დააწკაპუნეთ რუკაზე ადგილმდებარეობის შესაქმნელად."}},polygon:{tooltip:{start:"დააწკაპუნეთ, კონტურის ხაზვის დაწყებისთვის.",cont:"დააწკაპუნეთ, კონტრუსი ხაზვის დასრულებისთვის.",end:"დააწკაპუნეთ პირველ წერტილზე, რათა დაასრულოთ კონტურის ხაზვა."}},polyline:{error:"<strong>შეცდომა:</strong> ხაზი ვერ გადაკვეთავს თავის თავს",tooltip:{start:"დააწკაპუნეთ, ხაზის ხაზვის დაწყებისთვის.",cont:"დააწკაპუნეთ, ხაზის ხაზვის დასრულებისთვის.",end:"დააწკაპუნეთ ბოლო წერტილზე, რათა დაასრულოთ ხაზის ხაზვა."}},rectangle:{tooltip:{start:"დააწკაპუნეთ და გადაიტანეთ იმისათვის, რომ მართკუთხედი დახაზოთ."}},simpleshape:{tooltip:{end:"გაათავისუფლეთ თაგვის ღილაკი ხაზვის დასასრულებლად."}}}},edit:{toolbar:{actions:{save:{title:"ცვლილებების შენახვა.",text:"შენახვა"},cancel:{title:"რედაქტირების გაუქმება, დააბრუნე ყველა ცვლილება.",text:"გაუქმება"},clearAll:{title:"ყველა რედაქტირებული ფენის გასუფთავება.",text:"გასუფთავება"}},buttons:{edit:"რედაქტირება.",editDisabled:"ფენები არ არის რედაქტირებისთვის.",remove:"წაშლა.",removeDisabled:"ფენები არ არის წაშლისთვის."}},handlers:{edit:{tooltip:{text:"გადაიტანეთ წვერები ან წერტილები ობიექტის რედაქტირებისთვის.",subtext:'დააჭირეთ "გაუქმება", საწყის მდგომარეობაში დასაბრუნებლად.'}},remove:{tooltip:{text:"დააწკაპუნეთ ობიექტზე წაშლისთვის"}}}}},u={draw:{toolbar:{actions:{title:"Tekening annuleren",text:"Annuleren"},finish:{title:"Tekening voltooien",text:"Voltooien"},undo:{title:"Laatst getekende punt verwijderen",text:"Verwijder laatst getekende punt"},buttons:{polyline:"Teken een polygonale lijn",polygon:"Teken een polygoon",rectangle:"Teken een rechthoek",circle:"Teken een cirkel",marker:"Plaats een marker",circlemarker:"Teken een cirkelmarkering"}},handlers:{circle:{tooltip:{start:"Klik en sleep om de cirkel te tekenen."},radius:"Radius"},circlemarker:{tooltip:{start:"Klik op de kaart om de cirkelmarkering te plaatsen."}},marker:{tooltip:{start:"Klik op de kaart om de markering te plaatsen."}},polygon:{tooltip:{start:"Klik om te beginnen met het tekenen van de polygoon.",cont:"Klik om door te gaan met het tekenen van de vorm.",end:"Klik op het eerste punt om dit polygoon te sluiten."}},polyline:{error:"<strong>Fout:</strong> vormranden kunnen niet kruisen!",tooltip:{start:"Klik om te beginnen met het tekenen van een lijn.",cont:"Klik om door te gaan met het tekenen van de lijn.",end:"Klik laatst getekende punt om deze lijn te voltooien."}},rectangle:{tooltip:{start:"Klik en sleep om een rechthoek te tekenen."}},simpleshape:{tooltip:{end:"Laat de muis los om de tekening te voltooien."}}}},edit:{toolbar:{actions:{save:{title:"Wijzigingen opslaan.",text:"Opslaan"},cancel:{title:"Annuleer bewerken en verwijder alle wijzigingen.",text:"Annuleren"},clearAll:{title:"Verwijder alle lagen.",text:"Verwijderd alles"}},buttons:{edit:"Lagen bewerken.",editDisabled:"Geen lagen om te bewerken.",remove:"Verwijder lagen.",removeDisabled:"Geen lagen om te verwijderen."}},handlers:{edit:{tooltip:{text:"Sleep hoeken om te schalen of middenpunt om te verplaatsen.",subtext:"Klik op annuleren om wijzigingen ongedaan te maken."}},remove:{tooltip:{text:"Klik op een vorm om die te verwijderen"}}}}},p={draw:{toolbar:{actions:{title:"Avbryt markering",text:"Avbryt"},finish:{title:"Ferdiggjør markering",text:"Ferdiggjør"},undo:{title:"Ta bort siste punkt",text:"Slett siste punkt"},buttons:{polyline:"Tegn flere linjer",polygon:"Tegn en mangekant",rectangle:"Tegn et rektangel",circle:"Tegn en sirkel",marker:"Sett et markeringspunkt",circlemarker:"Tegn et sirkelpunkt"}},handlers:{circle:{tooltip:{start:"Klikk og dra for å tegne en sirkel."},radius:"Radius"},circlemarker:{tooltip:{start:"Klikk på kartet for å plassere et sirkelpunkt."}},marker:{tooltip:{start:"Klikk på kartet for å markere et punkt."}},polygon:{tooltip:{start:"Klikk for å tegne et område.",cont:"Klikk for å fortsette tegningen.",end:"Klikk på det første punktet for å lukke området."}},polyline:{error:"<strong>Error:</strong> kantene kan ikke krysses!",tooltip:{start:"Klikk for å tegne en linje.",cont:"Klikk for å fortsette å tegne linjen.",end:"Kikk siste punkt for å ferdiggjøre linjen."}},rectangle:{tooltip:{start:"Klikk og dra for å tegne et rektangel."}},simpleshape:{tooltip:{end:"Slipp museknappen for å gjøre tegningen ferdig."}}}},edit:{toolbar:{actions:{save:{title:"Lagre endringer.",text:"Lagre"},cancel:{title:"Avbryt redigering og forkast endringer.",text:"Avbryt"},clearAll:{title:"Nullstill alle figurer.",text:"Nullstill alt."}},buttons:{edit:"Rediger figur.",editDisabled:"Ingen figur å redigere.",remove:"Slett figur.",removeDisabled:"Ingen figur å slette."}},handlers:{edit:{tooltip:{text:"Dra markør for å redigere.",subtext:"Klikk avbryt for å angre endringer."}},remove:{tooltip:{text:"Klikk for å ta bort"}}}}},d={draw:{toolbar:{actions:{title:"Anuluj wyznaczanie",text:"Anuluj"},finish:{title:"Zakończ wyznaczanie",text:"Zakończ"},undo:{title:"Usuń ostatnio wyznaczony punkt",text:"Usuń ostatni punkt"},buttons:{polyline:"Wyznacz wzór",polygon:"Wyznacz wielokąt",rectangle:"Wyznacz prostokąt",circle:"Wyznacz koło",marker:"Umieść znacznik",circlemarker:"Umieść okrągły znacznik"}},handlers:{circle:{tooltip:{start:"Kliknij i przeciągnij, aby wyznaczyć koło."},radius:"Promień"},circlemarker:{tooltip:{start:"Kliknij na mapę, aby umieścić okrągły znacznik."}},marker:{tooltip:{start:"Kliknij na mapę, aby umieścić znacznik."}},polygon:{tooltip:{start:"Kliknij, aby rozpocząć wyznaczanie kształtu.",cont:"Kliknij, aby kontynuować wyznaczanie kształtu.",end:"Kliknij pierwszy punkt, aby zakończyć ten kształt."}},polyline:{error:"<strong>Błąd:</strong> odcinki nie mogą się przecinać!",tooltip:{start:"Kliknij, aby rozpocząć wyznaczanie lini.",cont:"Kliknij, aby kontynuować wyznaczanie lini.",end:"Kliknij ostatni punkt, aby ukończyć linię."}},rectangle:{tooltip:{start:"Kliknij i przeciągnij, aby wyznaczyć prostokąt."}},simpleshape:{tooltip:{end:"Zwolnij przycisk myszy, aby ukończyć wyznaczanie."}}}},edit:{toolbar:{actions:{save:{title:"Zapisz zmiany.",text:"Zapisz"},cancel:{title:"Anuluj edytowanie i odrzuć zmiany.",text:"Anuluj"},clearAll:{title:"Wyczyść wszystkie warstwy.",text:"Wyczyść wszystko"}},buttons:{edit:"Edytuj warstwy.",editDisabled:"Brak warstw do edycji.",remove:"Usuń warstwy.",removeDisabled:"Brak warstw do usunięcia."}},handlers:{edit:{tooltip:{text:"Przeciągnij uchwyt lub znacznik, aby edytować.",subtext:"Kliknij anuluj, aby odrzucić zmiany."}},remove:{tooltip:{text:"Kliknij obiekt, aby go usunąć."}}}}},k={draw:{toolbar:{actions:{title:"Cancelar desenho",text:"Cancelar"},finish:{title:"Terminar desenho",text:"Terminar"},undo:{title:"Eliminar último ponto desenhado",text:"Eliminar último ponto"},buttons:{polyline:"Desenhar uma polilinha",polygon:"Desenhar um polígono",rectangle:"Desenhar um retângulo",circle:"Desenhar um círculo",marker:"Desenhar un marcador",circlemarker:"Desenhar um marcador circular"}},handlers:{circle:{tooltip:{start:"Clique e arrastrar para desenhar o círculo."},radius:"Raio"},circlemarker:{tooltip:{start:"Clique no mapa para colocar o marcador circular."}},marker:{tooltip:{start:"Clique no mapa para colocar o marcador."}},polygon:{tooltip:{start:"Clique para começar a desenhar a figura.",cont:"Clique para continuar desenhando a figura.",end:"Clique no primeiro ponto para fechar esta figura."}},polyline:{error:"<strong>Erro:</strong> as bordas de uma forma não podem atravessar!",tooltip:{start:"Clique para começar a desenhar a linha.",cont:"Clique para continuar desenhando a linha.",end:"Clique no último ponto para terminar a linha."}},rectangle:{tooltip:{start:"Clique e arrastrar para desenhar o retângulo."}},simpleshape:{tooltip:{end:"Solte o mouse para terminar o desenho."}}}},edit:{toolbar:{actions:{save:{title:"Guardar alterações.",text:"Guardar"},cancel:{title:"Cancelar edição, descarta todas as alterações.",text:"Cancelar"},clearAll:{title:"Limpar todas as camadas.",text:"Limpar tudo"}},buttons:{edit:"Editar camadas.",editDisabled:"Nenhuma camada que editar.",remove:"Eliminar camadas.",removeDisabled:"Nenhuma camada que eliminar."}},handlers:{edit:{tooltip:{text:"Arraste os manipuladores ou marcadores para editar a figura.",subtext:"Clique em cancelar para desfazer as alterações."}},remove:{tooltip:{text:"Clique em uma figura para removê-la"}}}}},m={draw:{toolbar:{actions:{title:"Отменить рисование",text:"Отмена"},finish:{title:"Завершить рисование",text:"Завершить"},undo:{title:"Удалить последнюю нарисованную точку",text:"Удалить последнюю точку"},buttons:{polyline:"Нарисовать полилинию",polygon:"Нарисовать полигон",rectangle:"Нарисовать прямоугольник",circle:"Нарисовать круг",marker:"Нарисовать точку",circlemarker:"Нарисовать точку(в виде круга)"}},handlers:{circle:{tooltip:{start:"Кликните и перетащите для того, чтобы нарисовать круг."},radius:"Радиус"},circlemarker:{tooltip:{start:"Кликните на карту для установки точки."}},marker:{tooltip:{start:"Кликните на карту для установки точки."}},polygon:{tooltip:{start:"Кликните, чтобы начать рисовать контур.",cont:"Кликните, чтобы завершить рисовать контур.",end:"Кликните на первую точку, чтобы завершить рисование контура."}},polyline:{error:"<strong>Ошибка:</strong> линия не может самопересекаться!",tooltip:{start:"Кликните, чтобы начать рисовать линию.",cont:"Кликните, чтобы завершить рисование линии.",end:"Кликните на последнюю точку, чтобы завершить рисование линии."}},rectangle:{tooltip:{start:"Кликните и перетащите, чтобы нарисовать прямоугольник."}},simpleshape:{tooltip:{end:"Отпустите кнопку мыши для завершения рисования."}}}},edit:{toolbar:{actions:{save:{title:"Сохранить изменения.",text:"Сохранить"},cancel:{title:"Отменить редактирование, откатить все изменения.",text:"Отмена"},clearAll:{title:"Очистить все редактируемые слои.",text:"Очистить всё"}},buttons:{edit:"Редактировать.",editDisabled:"Нет слоёв для редактирования.",remove:"Удалить.",removeDisabled:"Нет слоёв для удаления."}},handlers:{edit:{tooltip:{text:"Перетащите вершины или точки для редактирования фигуры.",subtext:'Нажмите "Отмена", чтобы откатить изменения.'}},remove:{tooltip:{text:"Кликните на фигуру для удаления"}}}}},g={draw:{toolbar:{actions:{title:"Zrušiť kreslenie",text:"Zrušiť"},finish:{title:"Dokončiť kreslenie",text:"Dokončiť"},undo:{title:"Zmazať posledný nakreslený bod",text:"Zmazať posledný bod"},buttons:{polyline:"Nakresliť čiaru",polygon:"Nakresliť polygón",rectangle:"Nakresliť obdĺžnik",circle:"Nakresliť kruh",marker:"Nakresliť bod",circlemarker:"Nakresliť kruhový bod"}},handlers:{circle:{tooltip:{start:"Kliknite a potiahnite, aby ste nakreslili kruh."},radius:"Polomer"},circlemarker:{tooltip:{start:"Kliknite na mapu aby ste umiestnili kruhový bod."}},marker:{tooltip:{start:"Kliknite na mapu aby ste umiestnili bod."}},polygon:{tooltip:{start:"Kliknite, aby ste začali kresliť útvar.",cont:"Kliknite, aby ste nakreslili ďalší bod útvaru.",end:"Kliknite na prvý bod, aby ste uzavreli útvar."}},polyline:{error:"<strong>Chyba:</strong> čiary sa nesmú pretínať!",tooltip:{start:"Kliknite, aby ste začali kresliť čiaru.",cont:"Kliknite, aby ste nakreslili ďalší bod čiary.",end:"Kliknite posledný bod, aby ste dokončili čiaru."}},rectangle:{tooltip:{start:"Kliknite a potiahnite, aby ste nakreslili štvorec."}},simpleshape:{tooltip:{end:"Uvoľnením tlačidla myši ukončíte kreslenie."}}}},edit:{toolbar:{actions:{save:{title:"Uložiť zmeny.",text:"Uložiť"},cancel:{title:"Ukončiť úpravu, zrušiť všetky zmeny.",text:"Zrušiť"},clearAll:{title:"Zmazať všetky vrstvy.",text:"Zmazať všetko"}},buttons:{edit:"Upraviť vrstvy.",editDisabled:"Žiadne vrstvy pre úpravu",remove:"Zmazať vrstvy.",removeDisabled:"Žiadne vrstvy pre zmazanie."}},handlers:{edit:{tooltip:{text:"Potiahnutím vyznačených štvorčekov, alebo bodov upravíte útvar.",subtext:"Kliknite zrušiť, pre zrušenie zmien."}},remove:{tooltip:{text:"Kliknite na útvar pre jeho zmazanie."}}}}},b={draw:{toolbar:{actions:{title:"Скасувати креслення",text:"Скасувати"},finish:{title:"Завершити креслення",text:"Завершити"},undo:{title:"Видалити останню нанесену точку",text:"Видалити останню точку"},buttons:{polyline:"Накреслити криву",polygon:"Накреслити многокутник",rectangle:"Накреслити прямокутник",circle:"Накреслити коло",marker:"Розмістити маркер",circlemarker:"Розмістити маркер-коло"}},handlers:{circle:{tooltip:{start:"Натисніть і перетягуйте вказівник, щоб накреслити коло."},radius:"Радіус"},circlemarker:{tooltip:{start:"Натисніть на мапу, щоб розмістити маркер-коло."}},marker:{tooltip:{start:"Натисніть на мапу, щоб розмістити маркер."}},polygon:{tooltip:{start:"Натисніть, щоб накреслити фігуру.",cont:"Натисніть, щоб продовжити креслення фігури.",end:"Натисніть на першу точку, щоб замкнути цю фігуру."}},polyline:{error:"<strong>Помилка:</strong> сторони фігури не мають перетинатись!",tooltip:{start:"Натисніть, щоб накреслити лінію.",cont:"Натисніть, щоб продовжити креслення лінії.",end:"Натисніть на останню точку, щоб завершити лінію."}},rectangle:{tooltip:{start:"Натисніть і перетягуйте вказівник, щоб накреслити прямокутник."}},simpleshape:{tooltip:{end:"Відпустіть мишку, щоб завершити рисування."}}}},edit:{toolbar:{actions:{save:{title:"Зберегти зміни.",text:"Зберегти"},cancel:{title:"Припинити редагування, скасувати всі зміни.",text:"Скасувати"},clearAll:{title:"Очистити всі шари.",text:"Очистити все"}},buttons:{edit:"Редагувати шари.",editDisabled:"Немає шарів для редагування.",remove:"Видалити шари.",removeDisabled:"Немає шарів для видалення."}},handlers:{edit:{tooltip:{text:"Перетягуйте важелі або маркер для редагування фігури.",subtext:"Натисніть «Скасувати» для скасування змін."}},remove:{tooltip:{text:"Натисніть на фігуру для видалення"}}}}},y={draw:{toolbar:{actions:{title:"الغاء الرسم",text:"الغاء"},finish:{title:"انهاء الرسم",text:"انهاء"},undo:{title:"مسح اخر رسمة",text:"مسح اخر نقطة"},buttons:{polyline:"رسم خط",polygon:"رسم منطقة",rectangle:"رسم مستطيل",circle:"رسم دائرة",marker:"رسم علامة",circlemarker:"رسم علامة دائرة"}},handlers:{circle:{tooltip:{start:"اضغط واسحب لرسم دائرة"},radius:"القطر"},circlemarker:{tooltip:{start:"اضغط على الخريطة لرسم دائرة"}},marker:{tooltip:{start:"اضغط على الخريطة لرسم نقطة"}},polygon:{tooltip:{start:"اضغط لبدء رسم منطقة",cont:"اضغط لاستمرار رسم منطقة",end:"اضغط على اول نقطة لاكمال المنطقة"}},polyline:{error:"<strong>خطأ:</strong> لا يمكن تقاطع الخطوط",tooltip:{start:"اضغط لبدئ رسم الخط",cont:"اضغط لاستكمال رسم الخط",end:"اضغط على اخر نقطة للانهاء"}},rectangle:{tooltip:{start:"اضغط واسحب لرسم مستطيل"}},simpleshape:{tooltip:{end:"اترك الماوس للانهاء"}}}},edit:{toolbar:{actions:{save:{title:"حفظ التغييرات",text:"حفظ"},cancel:{title:"الغاء كل التعديلات",text:"الغاء"},clearAll:{title:"مسح كل الطبقات",text:"مسح الكل"}},buttons:{edit:"تعديل الطبقات",editDisabled:"لاتوجد طبقات للتعديل",remove:"مسح الطبقات",removeDisabled:"لا يوجد طبقات للمسح"}},handlers:{edit:{tooltip:{text:"اسحب للتعديل",subtext:"اضغط الغاء لمسح التعديلات"}},remove:{tooltip:{text:"اضغط على رسمة للمسح"}}}}},z={draw:{toolbar:{actions:{title:"取消绘制",text:"取消"},finish:{title:"结束绘制",text:"结束"},undo:{title:"删除最后一个绘制点",text:"删除最后一个点"},buttons:{polyline:"绘制折线",polygon:"绘制多边形",rectangle:"绘制矩形",circle:"绘制圆形",marker:"绘制标志物",circlemarker:"绘制圆形标志物"}},handlers:{circle:{tooltip:{start:"单击并拖拽绘制圆形"},radius:"半径"},circlemarker:{tooltip:{start:"单击地图放置圆形标志物"}},marker:{tooltip:{start:"单击地图放置标志物"}},polygon:{tooltip:{start:"单击地图绘制图形",cont:"继续单击绘制图形",end:"单击起始点结束绘制"}},polyline:{error:"<strong>错误:</strong> 图形边缘不能交叉!",tooltip:{start:"单击地图绘制折线",cont:"继续单击绘制下一段折线",end:"单击最后一个点结束绘制"}},rectangle:{tooltip:{start:"单击并拖拽绘制矩形"}},simpleshape:{tooltip:{end:"松开鼠标结束绘制"}}}},edit:{toolbar:{actions:{save:{title:"保存变更",text:"保存"},cancel:{title:"取消编辑，放弃所有变更",text:"取消"},clearAll:{title:"清除所有图形",text:"清除所有"}},buttons:{edit:"编辑图形",editDisabled:"无图形可编辑",remove:"删除图形",removeDisabled:"无图形可删除"}},handlers:{edit:{tooltip:{text:"拖拽线段或标志点以编辑图形",subtext:"点击<strong>取消</strong>按钮撤销变更"}},remove:{tooltip:{text:"单击图形以移除"}}}}},h={draw:{toolbar:{actions:{title:"Çizimi iptal et",text:"İptal"},finish:{title:"Çizimi Bitir",text:"Bitir"},undo:{title:"Çizilen son noktayı sil",text:"Son noktayı sil"},buttons:{polyline:"Çoklu çizgi çiz",polygon:"Çokgen çiz",rectangle:"Dikdörtgen çiz",circle:"Yuvarlak çiz",marker:"İşaretçi çiz",circlemarker:"Yuvarlak işaretçi çiz"}},handlers:{circle:{tooltip:{start:"Yuvarlak çizmek için tıklayın ve sürükleyin."},radius:"Çap"},circlemarker:{tooltip:{start:"Yuvarlak işaretçi yerleştirmek için haritaya tıklayın."}},marker:{tooltip:{start:"İşaretçi yerleştirmek için haritaya tıklayın."}},polygon:{tooltip:{start:"Şekil çizmeye başlamak için tıklayın.",cont:"Şekil çizmeye devam etmek için tıklayın.",end:"Bu şekli tamamlamak için ilk noktayı tıklayın."}},polyline:{error:"<strong>Hata:</strong> şekil kenarları kesişemez!",tooltip:{start:"Hat çizmeye başlamak için tıklayın.",cont:"Hat çizmeye devam etmek için tıklayın.",end:"Bu hattı tamamlamak için ilk noktayı tıklayın."}},rectangle:{tooltip:{start:"Dikdörtgen çizmek için tıklayın ve sürükleyin."}},simpleshape:{tooltip:{end:"Çizimi bitirmek için fareyi bırakın."}}}},edit:{toolbar:{actions:{save:{title:"Değişiklikleri kaydet.",text:"Kaydet"},cancel:{title:"Düzenlemeyi iptal et, tüm değişiklikleri çıkar.",text:"İptal"},clearAll:{title:"Tüm katmanları temizle.",text:"Hepsini temizle"}},buttons:{edit:"Katmanları düzenle.",editDisabled:"Düzenlenecek katman bulunamadı.",remove:"Katmanları sil.",removeDisabled:"Silinecek katman bulunamadı."}},handlers:{edit:{tooltip:{text:"Çizimi düzenlemek için köşeleri veya işaretçiyi sürükleyin.",subtext:"Değişiklikleri geri almak için iptale tıklayın."}},remove:{tooltip:{text:"Çizimi silmek için tıklayın"}}}}},v={draw:{toolbar:{actions:{title:"Anulați desenul",text:"Anulare"},finish:{title:"Terminați desenul",text:"Termina"},undo:{title:"Șterge ultimul punct desenat",text:"Șterge ultimul punct"},buttons:{polyline:"Desenați o polilinie",polygon:"Desenați un poligon",rectangle:"Desenați un dreptunghi",circle:"Desenează un cerc",marker:"Desenați un marker",circlemarker:"Desenați un marcator de cerc"}},handlers:{circle:{tooltip:{start:"Dați clic și trageți pentru a desena cerc."},radius:"Rază"},circlemarker:{tooltip:{start:"Dați clic pe hartă pentru a plasa marcatorul cercului."}},marker:{tooltip:{start:"Dați clic pe hartă pentru a plasa marcatorul."}},polygon:{tooltip:{start:"Dați clic pentru a începe desenarea parcelei",cont:"Dați clic pentru a continua desenarea parcelei",end:"Dați clic pe primul punct pentru a închide această parcelei."}},polyline:{error:"<strong>Eroare:</strong> marginile formei nu se pot traversa!",tooltip:{start:"Daţi clic pentru a începe să desenezi o linie.",cont:"Daţi clic pentru a continua să desenezi linia.",end:"Dați clic pe ultimul punct pentru a ajunge la linia de sosire."}},rectangle:{tooltip:{start:"Dați clic și trageți pentru a desena dreptunghi."}},simpleshape:{tooltip:{end:"Eliberați mouse-ul pentru a termina desenul."}}}},edit:{toolbar:{actions:{save:{title:"Salvează modificările.",text:"Salvați"},cancel:{title:"Anulează editarea, anulează toate modificările.",text:"Anulare"},clearAll:{title:"Ștergeți toate straturile.",text:"Curata tot"}},buttons:{edit:"Editați straturi.",editDisabled:"Fără straturi de editat.",remove:"Ștergeți straturile.",removeDisabled:"Nu există straturi de șters."}},handlers:{edit:{tooltip:{text:"Trageți mânerele sau marcatorul pentru a edita caracteristica.",subtext:"Dați clic pe Anulare pentru a anula modificările."}},remove:{tooltip:{text:"Dați clic pe o caracteristică pentru a o elimina"}}}}},x={draw:{toolbar:{actions:{title:"Откажи очертаването",text:"Откажи"},finish:{title:"Завърши очертаването",text:"Завърши"},undo:{title:"Изтрий последната създадена точка",text:"Изтрий последната точка"},buttons:{polyline:"Начертай крива",polygon:"Начертай многоъгълник",rectangle:"Начертай правоъгълник",circle:"Начертай кръг",marker:"Начертай маркер",circlemarker:"Начертай кръгъл маркер"}},handlers:{circle:{tooltip:{start:"Кликни и дръпни, за да нарисуваш кръг."},radius:"Радиус"},circlemarker:{tooltip:{start:"Кликни върху картата, за да поставиш кръгъл маркер."}},marker:{tooltip:{start:"Кликни върху картата, за да поставиш маркер."}},polygon:{tooltip:{start:"Кликни, за да започнеш да чертаеш формата.",cont:"Кликни, за да продължиш да чертаеш формата.",end:"Кликни върху първата точка, за да затвориш тази форма."}},polyline:{error:"<strong>Грешка:</strong> краищата на формата не могат да се пресичат!",tooltip:{start:"Кликни, за да започнеш да чертаеш линия.",cont:"Кликни, за да продължиш да чертаеш линия.",end:"Кликни върху последната точка, за да завършиш линията."}},rectangle:{tooltip:{start:"Кликни и дръпни, за да начертаеш правоъгълник."}},simpleshape:{tooltip:{end:"Отпусни мишката, за да завършиш чертаенето."}}}},edit:{toolbar:{actions:{save:{title:"Запази промените.",text:"Запази"},cancel:{title:"Отмени редактирането, отхвърляйки всички промени.",text:"Отмени"},clearAll:{title:"Изчисти всички слоеве.",text:"Изчисти всички"}},buttons:{edit:"Редактирай слоевете.",editDisabled:"Няма слоеве за редактиране.",remove:"Изтрий слоевете.",removeDisabled:"Няма слоеве за изтриване."}},handlers:{edit:{tooltip:{text:"Плъзни дръжките или маркера, за да редактираш обекта.",subtext:"Кликни 'Отмени', за да върнеш промените."}},remove:{tooltip:{text:"Кликни върху обект, за да го премахнеш."}}}}},f=function(f){var D=i;switch(f.toLocaleLowerCase()){case"de":case"de-at":case"de-be":case"de-ch":case"de-de":case"de-li":case"de-lu":case"de-de.utf-8":case"german":D=a;break;case"en":case"en-us":case"en-ca":case"en-gb":case"en-us.utf-8":case"english":D=i;break;case"ar":case"ar-ae":case"ar-eg":case"arabic":D=y;break;case"fi":case"fi-fi":case"fi-fi.utf-8":case"finnish":D=l;break;case"fr":case"fr-us":case"fr-ca":case"fr-us.utf-8":case"french":D=o;break;case"es":case"es-us":case"es-ca":case"es-us.utf-8":case"spanish":D=r;break;case"sk":case"sk-sk":case"sk-sk.utf-8":case"slovak":D=g;break;case"pl":case"pl-pl":case"pl-pl.utf-8":case"polish":D=d;break;case"pt":case"pt-pt":case"pt-pt.utf-8":case"portuguese":D=k;break;case"uk":case"uk-ua":case"uk-ua.utf-8":case"ukrainian":D=b;break;case"cs":case"cs-cz":case"cs-cz.utf-8":case"czech":D=t;break;case"ru":case"ru-ru":case"ru-ru.utf-8":case"russian":D=m;break;case"ka":case"ka-ka":case"ka-ka.utf-8":case"georgian":D=c;break;case"no":case"no-no":case"no-no.utf-8":case"norwegian":D=p;break;case"am":case"am-et":case"am-et.utf-8":case"amharic":D=e;break;case"nl":case"nl-nl":case"nl-nl.utf-8":case"nl-be":case"nl-be.utf-8":case"dutch":case"belgian":case"flemish":D=u;break;case"it":case"it-it":case"it-ch":case"it-it.utf-8":case"it-ch.utf-8":case"italiano":case"italian":D=s;break;case"hu":case"hu-HU":case"hu-hu":case"hu-HU.utf-8":case"hu-hu.utf-8":case"magyar":case"hungarian":D=n;break;case"zh":case"zh-cn":case"zh-cn.utf-8":case"chinese":D=z;break;case"tr":case"tr-tr":case"tr-tr.utf-8":case"turkish":D=h;break;case"ro":case"ro-ro":case"ro-RO":case"ro-ro.utf-8":case"romanian":D=v;break;case"bg":case"bg-bg":case"bg-BG":case"bg-bg-utf-8":case"bulgarian":D=x;break;default:throw new Error("[language] not found")}try{L&&L.drawLocal&&(L.drawLocal=D)}catch(e){}return D};exports.default=f,exports.drawLocales=f,exports.languages=["ar","am","cs","de","en","es","fi","fr","hu","it","ka","nl","no","pl","pt","ru","sk","uk","zh","tr","ro","bg"];
//# sourceMappingURL=index.js.map
