let addBookContainer = document.querySelector("#card-creator-container")

let closeButtons = document.querySelectorAll(".cancel")
let addBookPopup = document.querySelector("#card-creator-popup")
function closePopup(){
    addBookPopup.style.display = "none"
    addBookContainer.style.display = "none"
}
addBookPopup.addEventListener("click", closePopup)
closeButtons.forEach((button) => {
    button.addEventListener("click", closePopup)
})


let addBookButton = document.querySelector("#add-book-btn")
addBookButton.addEventListener("click", () =>{
    addBookPopup.style.display = "block"
    addBookContainer.style.display = "flex"
    console.log("oi")
})

let bookshelf = document.querySelector("#bookshelf")
let books = document.querySelectorAll(".book")

let statusPanel = document.querySelector("#status-panel")
function getStatus(){
    statusPanel.textContent = `Total: ${books.length} Read: Not Read: Dropped:`
}

// let addSymbol = document.createElement("div")
// addSymbol.classList.add("add-symbol")

let addBookCover = document.createElement("div")
// addBookCover.appendChild(addSymbol)
addBookCover.id = "add-book-cover"
addBookCover.textContent = "+"

function checker(){
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
checker()









function Book(title, author, pages, read, dateAdded, dateUpdated=dateAdded){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.dateAdded = dateAdded;
    this.dateUpdated = dateUpdated;
}

let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
Book.prototype.oi = () => {
    return "oi"
}

console.log(hobbit.oi())
