const books = [
  {
    title: "Septimus Heap Book One: Magyk",
    author: "Angie Sage",
    date: "2022-07-05",
    age: "10-14",
    genre: "Fantasy",
    rating: 4,
    image: "images/magyk.jpg",
    description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you."
  },
  {
    title: "Magnus Chase Book One: Sword of Summer",
    author: "Rick Riordan",
    date: "2021-12-12",
    age: "12-16",
    genre: "Fantasy",
    rating: 5,
    image: "images/magnus.jpg",
    description: "A fast-paced, mythology-filled adventure from the author of Percy Jackson. Magnus Chase is a must-read."
  }
];

const container = document.querySelector(".articles");

books.forEach(book => {
  const article = document.createElement("article");

  const leftCol = document.createElement("div");
  leftCol.classList.add("details");

  const date = document.createElement("time");
  date.setAttribute("datetime", book.date);
  date.textContent = new Date(book.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });

  const age = document.createElement("p");
  age.textContent = book.age;

  const genre = document.createElement("p");
  genre.textContent = book.genre;

  const rating = document.createElement("p");
  for (let i = 0; i < book.rating; i++) {
    rating.textContent += "★";
  }

  leftCol.appendChild(date);
  leftCol.appendChild(age);
  leftCol.appendChild(genre);
  leftCol.appendChild(rating);

  const middleCol = document.createElement("div");
  middleCol.classList.add("content");

  const h2 = document.createElement("h2");
  h2.textContent = book.title;

  const img = document.createElement("img");
  img.src = book.image;
  img.alt = `Cover of ${book.title}`;

  const desc = document.createElement("p");
  desc.innerHTML = `${book.description} <a href="#">Read More...</a>`;

  middleCol.appendChild(h2);
  middleCol.appendChild(img);
  middleCol.appendChild(desc);

  article.appendChild(leftCol);
  article.appendChild(middleCol);

  container.appendChild(article);
});
