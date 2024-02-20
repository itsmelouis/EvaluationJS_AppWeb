import { BookProvider } from "../context/BookContext";
import Form from "../components/Form";


const AddBook = () => {
  
  return (
    <BookProvider>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-center font-bold text-3xl mb-5">Ajout d'un livre</h1>
        <Form />
      </div>
    </BookProvider>

  )
}

export default AddBook;
