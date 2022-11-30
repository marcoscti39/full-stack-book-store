import React from "react";
import { BookTypes } from "../pages/Home";
import { useBookstore } from "../zustand/store";

const BookItem: React.FC<BookTypes> = ({ imageURL, name, text, price }) => {
  const books = useBookstore((store) => store.books);
  const updateBooks = useBookstore((store) => store.getBooks);

  const handleDeleteBook = async () => {
    const removeOnDatabase = async () => {
      const requisite = await fetch(`http://localhost:3000/delete-book`, {
        method: "DELETE",
        headers: {
          "Content-Type": " application/json",
        },
        body: JSON.stringify({ name: name }),
      });
    };
    const removeVisually = () => {
      const upToDateBooks = books.filter((book) => book.name !== name);
      console.log(upToDateBooks);
      updateBooks(upToDateBooks);
    };

    removeOnDatabase();
    removeVisually();
  };
  return (
    <article className="flex flex-col gap-2">
      <img
        src={imageURL}
        alt=""
        className="bg-yellow-400 w-[160px] mx-auto h-[230px] object-cover"
      />
      <h2 className="text-2xl font-medium text-center">{name}</h2>

      <p>{text.length > 150 ? `${text.substring(0, 150)}...` : text}</p>

      <strong>R${price}</strong>

      <button
        className="p-2 border-[2px] border-red-400 text-red-400 rounded"
        onClick={handleDeleteBook}
      >
        Delete
      </button>
    </article>
  );
};

export default BookItem;
