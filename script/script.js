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
            document.querySelector("#read-total").textContent = `Read: ${readTotal}`;
        };
        if (book.status === "Not Read") {
            notReadTotal++;
            document.querySelector("#not-read-total").textContent = `Not Read: ${notReadTotal}`;
        };
        if (book.status === "Dropped") {
            droppedTotal++;
            document.querySelector("#dropped-total").textContent = `Dropped: ${droppedTotal}`;
        };
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
    let bookGenre = document.querySelector("#book-genre").value;
    let bookDescription = document.querySelector("#book-description").value;
    let bookLink = document.querySelector("#book-link").value;
    let bookStatus = document.querySelector("#status-options").value;

    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookGenre, bookDescription, bookLink, bookStatus);

    if (bookTitle, bookAuthor, bookPages, bookGenre) {
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

        let bookGenreDisplay = document.createElement("div");
        bookGenreDisplay.classList.add("book-genre-display");
        let tagQnty = book.genre.split(", ")
        if(tagQnty.length > 2){
            bookGenreDisplay.innerHTML = `<em>${tagQnty[0]}, ${tagQnty[1]}...</em>`;
        } else if(tagQnty.length == 2){
            console.log
            bookGenreDisplay.innerHTML = `<em>${tagQnty[0]}, ${tagQnty[1]}</em>`;
        } else {
            bookGenreDisplay.innerHTML = `<em>${book.genre}</em>`;
        };

        let bookDetailDisplay = document.createElement("div");
        bookDetailDisplay.classList.add("book-detail-display");
        bookDetailDisplay.innerHTML = `<span>${book.status}</span>
        <span>Added: ${book.dateAdded.getMonth()}/${book.dateAdded.getUTCDate()}/${book.dateAdded.getUTCFullYear()}</span>`;

        aboutContainer.append(bookTitleDisplay, bookGenreDisplay, bookDetailDisplay);
        bookCover.append(aboutContainer);
        bookshelf.appendChild(bookCover);
    })
}

let bookDetailPopup = document.querySelector("#book-details");
let selectedBook = null;
function showBookDetail() {
    addBookPopupBG.style.display = "block";
    bookDetailPopup.style.display = "flex";

    let identifier = this.textContent.split(" ")[0];
    bookshelfArray.forEach(book => {
        console.log(book.title);
        if (book.title === identifier) {
            selectedBook = book;
        };
    });

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

    let bookGenres = document.querySelector(".tags");
    bookGenres.textContent = selectedBook.genre;

    let bookDescription = document.querySelector(".about");
    if(selectedBook.description){
        bookDescription.textContent = selectedBook.description;
    } else {
        bookDescription.textContent = "Nothing to show.";
    };
};

checkBookshelf();

function Book(title, author, pages, genre, description, link, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.description = description;
    this.link = link;
    this.pages = pages;
    this.status = status;
    this.id = title.trim().toUpperCase() + author.trim().toUpperCase() + pages;

    this.dateAdded = new Date();
    this.dateUpdated = this.dateAdded;
};
