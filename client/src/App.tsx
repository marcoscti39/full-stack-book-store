import React from "react";
import { Route, Routes } from "react-router-dom";
import BookItem from "./components/BookItem";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </>
  );
};

export default App;
