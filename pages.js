
function attachMainPage() {

    let container = document.querySelector(".container");

    container.innerHTML = `
<header class="header-container">
<section class="profile">
    <div>
        <img src="images/pfp.png" alt="" class="pfp">
    </div>
    <p>Ovidiu Gusteritan</p>
</section>
<section class="navbar">
    <p>All Notes</p>
    <div class="btn-toggle">
        <div class="toggle" onclick="toggle()">
            <div class="circle"></div>
        </div>
    </div>
</section>
</header>

<section class="main">

<aside class="aside-container">
    <div class="aside-card">
        <p>Wishlist</p>
        <div class="red">
            <p class="wishlist-notes">02</p>
        </div>
    </div>
    <div class="aside-card">
        <p>Assigment</p>
        <div class="blue">
            <p class="assigment-notes">00</p>
        </div>
    </div>
    <div class="aside-card">
        <p>Projects</p>
        <div class="orange">
            <p class="projects-notes">01</p>
        </div>
    </div>
    <div class="aside-card">
        <p>Work</p>
        <div class="gray">
            <p class="work-notes">04</p>
        </div>
    </div>
    <div class="aside-card">
        <p>Study</p>
        <div class="green">
            <p class="study-notes">03</p>
        </div>
    </div>
</aside>

<main class="main-container">
    <section class="main-header">
        <div class="create-note">
            <input type="text" class="create-title" placeholder="Title">
            <span class="textarea" role="textbox" contenteditable></span>
            <div class="create-note-footer">
                <select class="note-type">
                    <option selected>Select note type</option>
                    <option value="1">Whishlist</option>
                    <option value="2">Assigment</option>
                    <option value="3">Projects</option>
                    <option value="4">Work</option>
                    <option value="5">Study</option>
                </select>
                <button class="add-note-btn">Add</button>
            </div>
        </div>
    </section>

    <section class="cards">
        <ul class="notes-cards">
           
        </ul>
    </section>

</main>
</section>
    `

    attachCards();
    colorNotes();
    toggle();

    let btnAddNotes = document.querySelector('.add-note-btn');


    btnAddNotes.addEventListener("click", (eve) => {
        addNote();
        pagination();
    });
};




