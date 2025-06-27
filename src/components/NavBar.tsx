import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        <div className="space-x-6">
          <Link
            to="/"
            className="bg-teal-400 text-white text-lg md:text-xl px-6 py-3 rounded-full hover:bg-teal-500 transition shadow"
          >
            Inicio 💌
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
