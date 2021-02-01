/*
För att undersöka/felsöka buggar använder man sig av "developer tools" fliken, (f12) i Google Chrome där man sedan ska navigera sig till "sources" tabben för att med hjälp av breakpoints kunna steppa igenom kod och kontrollera det som skrivs ut i console.
*/ 

document.addEventListener("DOMContentLoaded", pageLoader); //Detta är ett ställe där koden körs i samband med ett event. Den lägger till ett event som lyder och används efter användarens input (musklick) för att acceptera båda en funktion samt object med hjälp av "pageLoader" som agerar callback.

function pageLoader() {
  let inputBox = document.querySelector("#input-number");

  inputBox.oninput = function() {
    sectionRemover();
    createSection(parseInt(inputBox.value));
  };
}

function createSection(count){
  for (var i = 0; i < count; i++) {
    var parent = document.querySelector("main"); //Detta selectar(bestämmer) parent.

    var child = document.createElement("section"); //skapar section child.
    var title = document.createElement("h4"); //skapar en titel med h4.
    var blurb = document.createElement("p"); //kapar en blurb paragraph.

    title.innerText = "Titel Postinlägg " + i;
    blurb.innerText = `Beyblade, Beyblade LET IT RIP!
    Lets Fight an epic Battle, Face off, and spin the Metal, No time for doubt now, no place for backing down.
    Beyblade Beyblade Let it Rip! Beyblade Beyblade Let it Rip!
    Spin now the bey now, bring on the power! Right to the top yeah, We're never giving up!!
    Here comes Here comes... Metal Fusion!
    Lets go Beyblade Let it Rip! Metal Fusion, Let it rip... Beyblade, Beyblade Let it rip, This is it, Get a grip, LET IT RIP!`;

    editMaker(title);
    editMaker(blurb);

    child.append(title); // en child inne i boxen eller rutans append vilket i detta scenario är titeln "inlägg".
    child.append(blurb); // här sker det i princip samma sak fast med texten istället för "inlägg".
    parent.append(child); // i detta moment läggs det till på parent.
  }
}

function sectionRemover(){
  var test_sections = document.querySelectorAll("section");  //den selectar, loopar igenom, och tar sedan bort allt (secktionRemover).
  for (var i = 0; i < test_sections.length; i++) {
    test_sections[i].remove();
  }
}

function editMaker(elem){
  elem.onclick = function(e) {
    elem.contentEditable = true;
    elem.focus();
  };
  elem.onblur = function(e) {
    elem.contentEditable = false;
  };
}
