import { useState, useContext } from "react";

import { BookContext } from "../context/BookContext";

const Form = () => { 

  const { state, dispatch } = useContext(BookContext);
  const [nameBook, setNameBook] = useState('');
  const [stockBook, setStockBook] = useState(0);
 
  console.log(state.books);
  const submitBook = () => {
    dispatch({type: 'ADD_BOOK', payload: {name: nameBook, stock: stockBook}});
  }
  
  return (
    <form className="max-w-sm mx-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="bookName">Nom du livre :</label>
          <input value={nameBook} onChange={(e) => setNameBook(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" id="bookName" name="bookName" />
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="bookStock">Stock du livre :</label>
          <input value={stockBook} onChange={(e) => setStockBook(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" id="bookStock" name="bookStock" />
          <a onClick={() => submitBook} href="#" className="mt-10 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Ajouter le livre
          </a>
        </form>
  );
}

export default Form;
