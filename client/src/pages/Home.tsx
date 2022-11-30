import React from "react";
import { Link } from "react-router-dom";
import BookItem from "../components/BookItem";
import { useBookstore } from "../zustand/store";

export interface BookTypes {
  name: string;
  imageURL: string;
  text: string;
  price: string;
}

const Home = () => {
  const books = useBookstore((store) => store.books);
  const setBooks = useBookstore((store) => store.getBooks);
  React.useEffect(() => {
    const getBooks = async () => {
      const response = await fetch("http://localhost:3000/get-all-books");
      const data = await response.json();
      setBooks(data);
    };
    getBooks();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-4 mb-8 text-center">
        Book shelf
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,360px)] justify-center gap-12 pb-12">
        {books.length > 0
          ? books?.map((book, index) => <BookItem key={index} {...book} />)
          : ""}
      </div>

      <Link
        to="/add-book"
        className="block fixed bottom-0 text-center bg-green-600 p-2 text-white mt-4 mx-auto w-full "
      >
        Add a New Book
      </Link>
    </div>
  );
};

export default Home;
