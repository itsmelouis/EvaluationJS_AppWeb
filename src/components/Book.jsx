import { useContext, useEffect, useState } from 'react';
import { BookContext } from "../context/BookContext";

const Book = () => {
  const { state, dispatch } = useContext(BookContext);
  const [books] = useState(state.books);

  const addStock = (id) => {
    dispatch({ type: 'ADD_STOCK', payload: id });
    console.log(state.books);
  }

  const removeStock = (id) => {
    dispatch({ type: 'REMOVE_STOCK', payload: id });
    console.log(state.books);
  }

  useEffect(() => {
    console.log(state);
  }, [books]);



  return (
    <div>{books.map((book) => (
      <div className={"flex flex-row gap-8 justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow self-center" && book.stock === 0 ? 'bg-gray-700' : ''} key={book.id}>
        <a href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">{book.name}</h5>
        </a>
        <p className="font-normal text-gray-700 ">Stock : {book.stock}</p>
        <div className="flex flex-row gap-2 items-center">
          <a onClick={() => addStock(book.id)} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            +
          </a>
          <a onClick={() => removeStock} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            -
          </a>
        </div>
      </div>
    ))}</div>

  );
};

export default Book;
