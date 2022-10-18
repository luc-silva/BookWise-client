let addBookContainer = document.querySelector("#card-creator-container")

let closeButtons = document.querySelectorAll(".cancel")
let addBookPopupBG = document.querySelector("#card-creator-popup")
addBookPopupBG.addEventListener("click", closePopup)
closeButtons.forEach((button) => {
    button.addEventListener("click", closePopup)
})


let addBookPopupBGButton = document.querySelector("#add-book-popup-btn")
addBookPopupBGButton.addEventListener("click", () =>{
    addBookPopupBG.style.display = "block"
    addBookContainer.style.display = "flex"
    console.log("oi")
})

let books = document.querySelectorAll(".book")

let addBookCover = document.createElement("div")
addBookCover.id = "add-book-cover"
addBookCover.textContent = "+"

let statusPanel = document.querySelector("#status-panel")
function getStatus(){
    statusPanel.textContent = `Total: ${books.length} Read: Not Read: Dropped:`
}

function closePopup(){
    addBookPopupBG.style.display = "none"
    addBookContainer.style.display = "none"
}

function clearInput(){
    let inputs = document.querySelectorAll("input")
    inputs.forEach(input => {
        input.value = ""
    })
}

let bookshelf = document.querySelector("#bookshelf")
function checkBookshelf(){
    if(books.length == 0){
        bookshelf.textContent = ""
        bookshelf.style.display = "flex"
        bookshelf.classList.add("empty-bookshelf")
        bookshelf.textContent = "Seems like you haven't added anything yet."
    } else {
        bookshelf.style.display = "grid"
        bookshelf.classList.remove("empty-bookshelf")
        bookshelf.appendChild(addBookCover)
    }
    getStatus()
}
checkBookshelf()




let addBookButton = document.querySelector("#add-book-button")
addBookButton.addEventListener("click", () => {
    let bookTitle = document.querySelector("#book-title").value
    let bookAuthor = document.querySelector("#book-author").value
    let bookDescription = document.querySelector("#book-description").value
    let bookLink = document.querySelector("#book-link").value
    let bookPages = document.querySelector("#book-pages").value
    let bookStatus = document.querySelector("#status-options").value
    
    let newBook = new Book(bookTitle, bookAuthor, bookDescription, bookLink, bookPages, bookStatus)
    bookshelfArray.push(newBook)
    closePopup()
    clearInput()
    insertBook(newBook)
    checkBookshelf()
})

let bookshelfArray = []
function insertBook(book){
    let bookCover = document.createElement("div")
    bookCover.classList.add("book")

    let bookTitleDisplay = document.createElement("div")
    bookTitleDisplay.classList.add("book-title-display") 
    bookTitleDisplay.textContent = `${book.title} - ${book.author}`

    let bookGenreDisplay = document.createElement("div")
    bookGenreDisplay.classList.add("book-genre-display")
    bookGenreDisplay.innerHTML = `<em>${book.genre}</em>`

    let bookDetailDisplay = document.createElement("div")
    bookDetailDisplay.classList.add("book-detail-display")
    bookDetailDisplay.innerHTML = `<span>${book.status}</span> 
    <span>Added: ${book.dateAdded.getMonth()}/${book.dateAddedgetUTCDate()}/${book.dateAdded.getUTCFullYear()}</span>`

    bookCover.append(bookTitleDisplay, bookGenreDisplay, bookDetailDisplay)
    bookshelf.appendChild(bookCover)
    checkBookshelf()
}


function Book(title, author, genre, description, link, pages, status){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.description = description;
    this.link = link;
    this.pages = pages;
    this.status = status;
    this.id = title.trim().toUpperCase() + author.toUpperCase() + pages;

    this.dateAdded = new Date();
    this.dateUpdated = this.dateAdded;
    // console.log(hoje.getUTCDate(), hoje.getUTCMonth() + 1, hoje.getUTCDate())
}
