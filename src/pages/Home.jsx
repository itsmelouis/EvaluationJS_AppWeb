import Book from "../components/Book";
import { BookProvider } from "../context/BookContext";

const Home = () => {
  return (
    <div className="flex flex-col justify-center mt-20">
      <BookProvider >
        <h1 className="text-center font-bold text-3xl mb-3">Accueil</h1>
        <Book />
      </BookProvider>
    </div>
  )
}

export default Home;
