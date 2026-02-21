const library = [];
const data = [];

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


Book.prototype.toggleRead = function( ) {
  this.read = this.read === "No" ? "Yes" : "No";
};

function bookCreate(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
   
    id= crypto.randomUUID()
    

    const bookid = new Book(id,this.title,this.author,this.pages,this.read); 
    
    library.push(bookid);
    data.push(bookid);
    getBooks(bookid);
}


function getBooks(item){
  const container = document.getElementById("cards");

  const div = document.createElement("div");
  div.classList.add("card");
  div.id = `book-${item.id}`;

  const title = document.createElement("h3");
  title.textContent = item.title;

  const author = document.createElement("p");
  author.textContent = `Author: ${item.author}`;

  const pages = document.createElement("p");
  pages.textContent = `Pages: ${item.pages}`; 

  const read = document.createElement("p");
  read.textContent = `Read: ${item.read}`; 
  
  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.addEventListener("click", () => {
   const card = document.getElementById(`book-${item.id}`);
   card.remove();
  });

  const readButton = document.createElement("button");
  readButton.textContent = "Read";
  readButton.addEventListener("click", () => {
  item.toggleRead();                 
  read.textContent = `Read: ${item.read}`;
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
  read = 'Yes'
} else {
  read = 'No'
}
  bookCreate(title, author, pages, read);
});






  





