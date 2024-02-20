/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

export const BookContext = createContext();

const initialState = {
  books: [
    { id: 1, name: 'Le Seigneur des Anneaux', stock: 10 },
    { id: 2, name: 'Harry Potter', stock: 7 },
    { id: 3, name: 'Les Misérables', stock: 5 },
    { id: 4, name: 'La Promesse de l\'Aube', stock: 1 },
    { id: 5, name: 'Le ROuge et le Noir', stock: 4 },
  ]
};

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, {id: state.books.length + 1, ...action.payload}]
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };
    case 'ADD_STOCK':
      return {
        ...state,
        books: state.books.map(book => {
          if (book.id === action.payload) {
            return { ...book, stock: book.stock + 1 };
          }
          return book;
        })
      };
    case 'REMOVE_STOCK':
      return {
        ...state,
        books: state.books.map(book => {
          if (book.id === action.payload) {
            return { ...book, stock: book.stock === 0 ? book.stock : book.stock - 1 };
          }
          return book;
        })
      };
    default:
      return state;
  }
}

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}
