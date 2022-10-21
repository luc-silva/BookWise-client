let addBookContainer = document.querySelector("#card-creator-container");
let bookshelfArray = [];

let closeButtons = document.querySelectorAll(".cancel");
let addBookPopupBG = document.querySelector("#card-creator-popup");
addBookPopupBG.addEventListener("click", closePopup);
closeButtons.forEach((button) => {
    button.addEventListener("click", closePopup);
});


let addBookPopupBGButton = document.querySelector("#add-book-popup-btn");
addBookPopupBGButton.addEventListener("click", () => {
    addBookPopupBG.style.display = "block";
    addBookContainer.style.display = "flex";
});


let addBookCover = document.createElement("div");
addBookCover.id = "add-book-cover";
addBookCover.textContent = "+";


let warning = document.querySelector("#warning-popup");
function showWarning() {
    warning.style.display = "flex";
};

document.querySelector(".close").addEventListener("click", closePopup)
function closePopup() {
    addBookPopupBG.style.display = "none";
    addBookContainer.style.display = "none";
    bookDetailPopup.style.display = "none";
    warning.style.display = "none";
    document.querySelector("#edit-popup").style.display = "none";
    
};

function clearInput() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    });
};

let bookshelf = document.querySelector("#bookshelf");
let statusPanel = document.querySelector("#status-panel");
function checkBookshelf() {
    if (bookshelfArray.length == 0) {
        bookshelf.style.display = "flex";
        bookshelf.classList.add("empty-bookshelf");
        bookshelf.textContent = "Seems like you haven't added anything yet."
    } else {
        bookshelf.textContent = "";
        bookshelf.style.display = "grid";
        bookshelf.classList.remove("empty-bookshelf");
        insertBook();
        bookshelf.appendChild(addBookCover);
    };
    let books = document.querySelectorAll(".book");
    books.forEach((book) => {
        book.addEventListener("click", showBookDetail);
    });

    setStatus();
};

function setStatus() {
    let readTotal = 0;
    let notReadTotal = 0;
    let droppedTotal = 0;
    for (let book of bookshelfArray) {
        if (book.status === "Read") {
            readTotal++;
        };
        if (book.status === "Not Read") {
            notReadTotal++;
        };
        if (book.status === "Dropped") {
            droppedTotal++;
        };
        
        document.querySelector("#read-total").textContent = `Read: ${readTotal}`;
        document.querySelector("#not-read-total").textContent = `Not Read: ${notReadTotal}`;
        document.querySelector("#dropped-total").textContent = `Dropped: ${droppedTotal}`;
    };

    let readPercentageDisplay = document.querySelector("#percentage-books-read");
    if (bookshelfArray.length !== 0) {
        readPercentageDisplay.textContent = `${Math.trunc((readTotal / bookshelfArray.length) * 100)}%`;
    };
}



let addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", () => {
    let bookTitle = document.querySelector("#book-title").value;
    let bookAuthor = document.querySelector("#book-author").value;
    let bookPages = document.querySelector("#book-pages").value;
    let bookTags = document.querySelector("#book-tags").value;
    let bookDescription = document.querySelector("#book-description").value;
    let bookLink = document.querySelector("#book-link").value;
    let bookStatus = document.querySelector("#status-options").value;

    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookTags, bookDescription, bookLink, bookStatus);

    if (bookTitle, bookAuthor, bookPages, bookTags) {
        bookshelfArray.push(newBook);
        closePopup();
        clearInput();
        checkBookshelf();
    } else {
        showWarning();
    };
});

function insertBook() {
    bookshelfArray.forEach(book => {
        let bookCover = document.createElement("div");
        bookCover.classList.add("book");

        let aboutContainer = document.createElement("div");
        aboutContainer.classList.add("about-container");

        let bookTitleDisplay = document.createElement("div");
        bookTitleDisplay.classList.add("book-title-display");
        bookTitleDisplay.textContent = `${book.title} - ${book.author}`;

        let bookTagsDisplay = document.createElement("div");
        bookTagsDisplay.classList.add("book-tags-display");
        let tagQnty = book.tags.split(", ")
        if(tagQnty.length > 2){
            bookTagsDisplay.innerHTML = `<em>${tagQnty[0]}, ${tagQnty[1]}...</em>`;
        } else if(tagQnty.length == 2){
            console.log
            bookTagsDisplay.innerHTML = `<em>${tagQnty[0]}, ${tagQnty[1]}</em>`;
        } else {
            bookTagsDisplay.innerHTML = `<em>${book.tags}</em>`;
        };

        let bookDetailDisplay = document.createElement("div");
        bookDetailDisplay.classList.add("book-detail-display");
        bookDetailDisplay.innerHTML = `<span>${book.status}</span>
        <span>Added: ${book.dateAdded.getMonth()}/${book.dateAdded.getUTCDate()}/${book.dateAdded.getUTCFullYear()}</span>`;

        aboutContainer.append(bookTitleDisplay, bookTagsDisplay, bookDetailDisplay);
        bookCover.append(aboutContainer);
        bookshelf.appendChild(bookCover);
    })
}

let selectedBook = null;
let bookDetailPopup = document.querySelector("#book-details");
let editPanel = document.querySelector("#edit-popup")

let editTitleInput = document.querySelector("#edit-title")
let editAuthorInput = document.querySelector("#edit-author")
let editPagesInput = document.querySelector("#edit-pages")
let editTagsInput = document.querySelector("#edit-tags")
let editBookStatus = document.querySelector("#edit-status")
let editWebstorelink = document.querySelector("#edit-webstorelink")
let editDescription = document.querySelector("#description-input")


function showBookDetail() {
    addBookPopupBG.style.display = "block";
    bookDetailPopup.style.display = "flex";

    let identifier = this.textContent.split(" ")[0];
    bookshelfArray.forEach(book => {
        if (book.title === identifier) {
            selectedBook = book;
        };
    });

    let dateCreatedDisplay = document.querySelector(".date-created");
    dateCreatedDisplay.textContent = `Date created: ${selectedBook.dateAdded.getMonth()}/${selectedBook.dateAdded.getUTCDate()}/${selectedBook.dateAdded.getUTCFullYear()}`;

    let lastTimeUpdated = document.querySelector(".last-time-updated");
    lastTimeUpdated.textContent = `Last time updated: ${selectedBook.dateUpdated.getMonth()}/${selectedBook.dateUpdated.getUTCDate()}/${selectedBook.dateUpdated.getUTCFullYear()}`

    let buyLink = document.querySelector(".buy-btn")
    if(selectedBook.link){
        buyLink.style.display = "block"   
        buyLink.addEventListener("click", () => {
            window.location.href = `${selectedBook.link}`;
        });
    };

    let bookTitle = document.querySelector(".book-title");
    bookTitle.textContent = selectedBook.title;

    let bookAuthor = document.querySelector(".book-author");
    bookAuthor.textContent = `By ${selectedBook.author}`;

    let bookStatus = document.querySelector(".book-status-display");
    bookStatus.textContent = selectedBook.status;
    if(selectedBook.status == "Dropped"){
        bookStatus.style.color = "red";
        if(selectedBook.status == "Not Read"){
            bookStatus.style.color == "yellow";
        };
    };

    let bookPages = document.querySelector(".book-pages");
    bookPages.textContent = `| ${selectedBook.pages} Pages`;

    let bookTags = document.querySelector(".tags");
    bookTags.textContent = selectedBook.tags;

    let bookID = document.querySelector(".book-id");
    bookID.textContent = `ID: ( ${selectedBook.id} )`

    let bookDescription = document.querySelector(".about");
    if(selectedBook.description){
        bookDescription.textContent = selectedBook.description;
    } else {
        bookDescription.textContent = "Nothing to show.";
    };

    let editBtn = document.querySelector(".edit-btn")
    editBtn.addEventListener("click", () =>{
        let editPanel = document.querySelector("#edit-popup")
        editPanel.style.display = "flex"
        addBookPopupBG.style.display = "block";
    })
    setBookInfo()
};
function setBookInfo(){
    editTitleInput.value = selectedBook.title;
    editAuthorInput.value = selectedBook.author;
    editPagesInput.value = selectedBook.pages;
    editTagsInput.value = selectedBook.tags;
    editWebstorelink.value = selectedBook.link;
}

let closeEditPanelBtn = document.querySelector("#close-edit-panel")
closeEditPanelBtn.addEventListener("click", () =>{
    editPanel.style.display = "none"
})

let saveEditChanges = document.querySelector("#save-changes")
saveEditChanges.addEventListener("click",() =>{
    bookshelfArray.forEach(book => {
        if(selectedBook.id === book.id){
            book.title = editTitleInput.value
            book.author = editAuthorInput.value
            book.pages = editPagesInput.value
            book.tags = editTagsInput.value
            book.status = editBookStatus.value
            book.link = editWebstorelink.value
            book.description = editDescription.value
            book.dateUpdated = new Date()
        }
        checkBookshelf()
        closePopup()
    })
})


checkBookshelf();

function Book(title, author, pages, tags, description, link, status) {
    this.title = title;
    this.author = author;
    this.tags = tags;
    this.description = description;
    this.link = link;
    this.pages = pages;
    this.status = status;
    this.id = title.trim().toUpperCase() + author.split(" ").join("").toUpperCase() + pages;

    this.dateAdded = new Date();
    this.dateUpdated = this.dateAdded;
};
