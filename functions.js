
function createCard(data) {
    let li = document.createElement('li');
    li.classList = "card";

    let headerSection = document.createElement('section');
    headerSection.classList = "card-header";

    let cardTitle = document.createElement('h3');
    cardTitle.classList = "crd-title";
    cardTitle.textContent = data.title;

    let divSpan = document.createElement('div');

    let spanNoteType = document.createElement('span');
    spanNoteType.classList = "card-note-type";
    spanNoteType.textContent = data.type;

    divSpan.appendChild(spanNoteType);
    headerSection.appendChild(cardTitle);
    headerSection.appendChild(divSpan);

    let noteInput = document.createElement('p');
    noteInput.classList = "card-input";
    noteInput.textContent = data.input;

    let footerSection = document.createElement('section');
    footerSection.classList = "card-footer";

    let time = document.createElement('p');
    time.classList = "time-added";
    time.textContent = data.time;

    let date = document.createElement('p');
    date.classList = "date-added";
    date.textContent = data.date;

    footerSection.appendChild(time);
    footerSection.appendChild(date);

    li.appendChild(headerSection);
    li.appendChild(noteInput);
    li.appendChild(footerSection);

    return li;
}

function attachCards() {

    let lista = document.querySelector(".notes-cards");

    lista.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let card = createCard(data[i]);
        lista.appendChild(card);
    }

}

function findByName(title) {

    let aux = data.findIndex(a => a.title === title);
    return data[aux];

}

function colorNotes() {

    let lista = document.querySelectorAll(".notes-cards");

    //console.log(lista.length);

    //for (let i = 0; i < lista.length; i++) {

    //    let type = data[i].type;

    //    if (type == 'WORK') {
    //        console.log(type);
    //    }
    //}

}

let active = true;

function toggle() {

    let aside = document.querySelector('.aside-container');
    let header = document.querySelector('.header-container');
    let main = document.querySelector('.main');
    let createNoteTitle = document.querySelector('.create-title');
    let combobox = document.querySelector('.note-type');

    let toggle = document.querySelector('.toggle')
    active = !active
    if (active) {
        toggle.classList.add('active')
        aside.style.backgroundColor = "rgb(159, 159, 159)";
        header.style.backgroundColor = "rgb(159, 159, 159)";
        main.style.backgroundColor = "rgb(159, 159, 159)";
        createNoteTitle.style.backgroundColor = "rgb(159, 159, 159)";
        combobox.style.backgroundColor = "rgb(159, 159, 159)";

    } else {
        toggle.classList.remove('active')
        aside.style.backgroundColor = "white";
        header.style.backgroundColor = "white";
        main.style.backgroundColor = "white";
        createNoteTitle.style.backgroundColor = "white";
        combobox.style.backgroundColor = "white";
    }
}

function findCardByTitle(title) {

    let lista = document.querySelector(".notes-cards");
    let cards = Array.from(lista.children);

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].querySelector(".crd-title").textContent == title) {
            return cards[i];
        }
    }

    return null;
}

function addNote() {

    let titleNote = document.querySelector('.create-title');
    let inputNote = document.querySelector('.textarea');
    let typeNote = document.querySelector('.note-type');

    var date = new Date();
    var current_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

    var date = new Date();
    var current_time = date.getHours() + ":" + date.getMinutes() + " AM";

    let obj = {
        title: titleNote.value,
        type: typeNote.options[typeNote.selectedIndex].text,
        time: current_time,
        date: current_date,
        input: inputNote.textContent
    };

    data.push(obj);


}

function pagination() {

    let lista = document.querySelector(".notes-cards");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    attachCards();

}
