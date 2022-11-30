import React, { FormEvent } from "react";
import { Link } from "react-router-dom";

const AddBook = () => {
  const bookNameRef = React.useRef<HTMLInputElement>(null);
  const bookImageURLRef = React.useRef<HTMLInputElement>(null);
  const bookTextRef = React.useRef<HTMLTextAreaElement>(null);
  const bookPriceRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const newBookData = {
      name: bookNameRef?.current!.value,
      imageURL: bookImageURLRef?.current!.value,
      text: bookTextRef?.current!.value,
      price: bookPriceRef?.current!.value,
    };

    const postBook = async () => {
      try {
        const postingBook = await fetch("http://localhost:3000/add-book", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBookData),
        });
        const book = await postingBook.json();
        if (book?.message) {
          alert(book.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    postBook();
  };

  return (
    <div className="flex flex-col align-center w-screen">
      <h1 className="text-2xl font-semibold my-4 text-center">
        Register the book
      </h1>

      <form
        className="flex flex-col max-w-[500px] p-2 w-full bg-yellow-200 mx-auto gap-4 rounded pb-0"
        onSubmit={handleSubmit}
      >
        <label>
          <p>Book Name:</p>
          <input ref={bookNameRef} type="text" className="w-full p-1" />
        </label>

        <label>
          <p>Book Image URL:</p>
          <input ref={bookImageURLRef} type="text" className="w-full p-1" />
        </label>

        <label>
          <p>Book Text:</p>
          <textarea ref={bookTextRef} rows={5} className="w-full"></textarea>
        </label>

        <label>
          <p>Book Price:</p>
          <input ref={bookPriceRef} type="number" className="w-full p-1" />
        </label>
        <div className="flex gap-2 pt-4 ">
          <Link to="/" className="p-2 text-center bg-red-400 text-white flex-1">
            Back Home
          </Link>
          <button
            type="submit"
            className="p-2 bg-green-400 text-white font-semibold flex-1"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
