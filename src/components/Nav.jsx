import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='flex flex-row justify-center items-center p-5 bg-white border border-gray-200 rounded-lg shadow'>
    <ul className='flex flex-row gap-4 list-none' >
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-extrabold text-lg' : 'text-lg font-bold'} >Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/add-book" className={({ isActive }) => isActive ? 'text-blue-600 font-extrabold text-lg' : 'text-lg font-bold'} >Ajout d'un livre</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
