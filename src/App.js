import React, { useState } from "react";
import "./styles.css";

const bookList = {
  SELFHELP: [
    {
      tittle: "As a man thinketh",
      author: "James Allen",
      rating: "4.2/5",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/41HGktRdVPL._SX322_BO1,204,203,200_.jpg"
    },
    {
      tittle: "Man's Search for meaning",
      author: "Victore E. Frankl",
      rating: "4.4/5",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/41Pgvpm83yL._SX313_BO1,204,203,200_.jpg"
    },
    {
      tittle: "The AlChemest",
      author: "Poulo Coelho",
      rating: "3.9/5",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
    },
    {
      tittle: "21 Lessons for the 21st Century",
      author: "Yuval Noah Harari",
      rating: "4.2/5",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/41ea1fBfXrL._SX329_BO1,204,203,200_.jpg"
    },
    {
      tittle: "Atomic Habits",
      author: "James Clear",
      rating: "4.4/5",
      img:
        "https://jamesclear.com/wp-content/uploads/2021/01/atomic-habits-dots.png"
    }
  ],
  BIOGRAPHY: [
    {
      tittle: "Autobiography of a Yogi",
      author: " Paramahansa Yogananda",
      rating: "4.6/5",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/41I2+sdbuQL._SX349_BO1,204,203,200_.jpg"
    },
    {
      tittle: "Wings of Fire: An Autobiography",
      author: "  A. P. J. Abdul Kalam, Arun Tiwari",
      rating: "4.2/5",
      img:
        "https://rukminim1.flixcart.com/image/416/416/juk4gi80/book/4/6/6/wings-of-fire-original-imaffmk4gx5pxqvf.jpeg?q=70"
    },
    {
      tittle: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future ",
      author: " Ashlee Vance",
      rating: "4.2/5",
      img: "https://m.media-amazon.com/images/I/51IQzkj0+NL.jpg"
    }
  ],
  PROGRAMMING: [
    {
      tittle: "Eloquent Javascript ",
      author: " Marijn Haverbeke",
      rating: "4.5/5",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg"
    },
    {
      tittle: "JavaScript and JQuery: Interactive Front-End Web Development ",
      author: "Jon Duckett",
      rating: "4.6/5",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX258_BO1,204,203,200_.jpg"
    }
  ],
  FICTIONAL: [
    {
      tittle: "A Thousand Splendid Suns",
      author: " Khaled Hosseini",
      rating: "4.4/5",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/51EGc3z4HFL._SX325_BO1,204,203,200_.jpg"
    }
  ],
  FINANCE: [
    {
      tittle: "Rich dad poor dad",
      author: "Robert Kiyosaki, Sharon Lechter",
      rating: "4.5/5",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
    },
    {
      tittle: " The Intelligent Investor",
      author: "Benjamin GrahamBenjamin Graham",
      rating: "4.1/5",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/51DLoxAJ68L._SX324_BO1,204,203,200_.jpg"
    }
  ]
};

const bestBooks = Object.keys(bookList);

export default function App() {
  const [booksHolder, setBooksHolder] = useState("SELFHELP");

  const onclickHandler = (item) => {
    setBooksHolder(item);
  };

  return (
    <div className="App">
      <h1 className="heading">Book Recommendations</h1>
      <div className="book-category">
        {bestBooks.map((item) => (
          <button
            className="btn"
            onClick={() => onclickHandler(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {bookList[booksHolder].map((itemOne, b) => (
          <div className="book-container" key={b}>
            <img className="book-cover" src={itemOne.img} />
            <div className="book-text">
              <h1>{itemOne.tittle}</h1>
              <h2>{itemOne.author}</h2>
              <h3>{itemOne.rating}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
