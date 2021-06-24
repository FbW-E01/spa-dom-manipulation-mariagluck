const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];
// ## Book Details
// Display the book details on the page, such as author's name, book title and reading status. The book cover should appear above the book details and the image should link to the URL of the book cover.
// ## Status
// The styling of reading status should be updated depending on whether the book has been read - the bootstrap badge style should change as well as the text, which should appear as "Read".

// ## Order
// The authors' last names should appear first e.g. "Smith, John". Furthermore, the books should be displayed on the page in alphabetical order according to the authors' last names.

const list = document.querySelector(".book-list");


books.map((book) => {
  const writer = book.author.split(" ").reverse().join(", ");
  book.author = writer;
});

books.sort((a,b) => {
  if (a.author > b.author) 
    {  return 1 
    }  else { 
      return -1 };
});

books.forEach(book => {
   const li = document.createElement("li");
   li.classList.add("card","mx-2");
   li.style.width = "14rem";
   
 
   const img = document.createElement("img");
   img.src = book.img;
   img.classList.add("card-img-top");
   img.style.height = "300px";
   img.style.border = "solid 3px black";
   
 
   const cardBody = document.createElement("div");
   cardBody.classList.add("card-body");
 
   const h5 = document.createElement("h5");
   h5.innerText = book.title;
   h5.classList.add("card-title");

   const author = document.createElement("p");
   author.innerText = book.author;
   author.classList.add("card-text", "text-muted");

 
   const cardFooter = document.createElement("div");
   cardFooter.classList.add("card-footer","py-4");
   
   
   const badge = document.createElement("span");
   badge.classList.add("badge", "rounded-pill", "px-2", "font-italic", "float-right");
   badge.classList.add(book.alreadyRead ?  "bg-success" : "bg-danger");
   badge.style.color = "white";
   badge.innerText = book.alreadyRead ? "Read" : "To Read";
   

   li.appendChild(img);
   list.appendChild(li);
   li.appendChild(cardBody);
   
   li.appendChild(cardFooter);
   cardFooter.appendChild(badge);
   cardBody.appendChild(h5);
   cardBody.appendChild(author);
});

