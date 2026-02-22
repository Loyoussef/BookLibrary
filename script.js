const library = [];
    
class Book{
    
    constructor(id, title, author, pages, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    toggleRead() {
        this.read = !this.read;
    }
}

  function createBook(book){
       
        const container = document.getElementById("cards");
    
        const div = document.createElement("div");
        div.classList.add("card");
        div.id = `book-${book.id}`;

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`; 

        const read = document.createElement("p");
        read.textContent = `Read: ${book.read ? "Yes" : "No"}`;
  
        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.addEventListener("click", () => {
        const card = document.getElementById(`book-${book.id}`);
        card.remove();
        library.splice(library.indexOf(book), 1);
        });

        const readButton = document.createElement("button");
        readButton.textContent = "Read";
        readButton.addEventListener("click", () => {
        book.toggleRead();
        read.textContent = `Read: ${book.read ? "Yes" : "No"}`;  
        });

        div.append(title, author, pages, read, remove, readButton);
        container.appendChild(div);
    }


const addBook = document.getElementById("addBook");
addBook.addEventListener("click", () => {
    const title = prompt("Enter the title of the book:");
    const author = prompt("Enter the author of the book:");
    const pages = prompt("Enter the number of pages:");
    var read = prompt("Have you read the book?");
    if (read === 'Yes') {
        read = true;
    } else if (read === 'No') {
        read = false;
    }

    let id = crypto.randomUUID();
    const bookid = new Book(id,title,author,pages,read); 
    library.push(bookid);
    createBook(bookid);
});
