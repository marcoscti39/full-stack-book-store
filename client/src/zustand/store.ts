import create from "zustand";
import { BookTypes } from "../pages/Home";

interface BookStore {
  books: BookTypes[];
  getBooks: (data: BookTypes[]) => void;
  filterBooks: (data: BookTypes[]) => void;
}

export const useBookstore = create<BookStore>()((set) => ({
  books: [],
  getBooks: (data: BookTypes[]) => set((state) => ({ books: data })),
  filterBooks: (data: BookTypes[]) =>
    set((state) => ({ ...state, books: data })),
}));
