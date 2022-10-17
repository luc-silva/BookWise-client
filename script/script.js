let addBookContainer = document.querySelector("#card-creator-container")

let addBookPopup = document.querySelector("#card-creator-popup")
addBookPopup.addEventListener("click", () =>{
    addBookPopup.style.display = "none"
    addBookContainer.style.display = "none"
})

let addBookButton = document.querySelector("#add-book-btn")
addBookButton.addEventListener("click", () =>{
    addBookPopup.style.display = "block"
    addBookContainer.style.display = "flex"
    console.log("oi")
})

let bookshelf = document.querySelector("#bookshelf")
let books = document.querySelectorAll(".book")

function checker(){
    if(books.length == 0){
        bookshelf.style.display = "flex"
        bookshelf.classList.add("empty-bookshelf")
        bookshelf.textContent = "Seems like you haven't added anything yet."
    } else {
        bookshelf.style.display = "grid"
        bookshelf.classList.remove("empty-bookshelf")
    }
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
