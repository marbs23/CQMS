import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="w-screen h-screen bg-teal-50 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-6xl font-bold font-serif text-teal-600 mb-6">
                ¡Felices 8 Meses! 🌿
            </h1>
            <p className="text-2xl text-gray-800 font-sans mb-10 max-w-3xl">
                Este regalo es para ti, hecho con cariño y mucho amor. Gracias por cada momento compartido 💕
            </p>
            <p className="text-2xl text-gray-800 font-sans mb-10 max-w-3xl italic">
                'Je suis complètement à tes pieds...'
            </p>
            <Link to="/pregunta">
                <button className="bg-teal-400 text-white text-2xl px-10 py-4 rounded-full hover:bg-teal-500 transition duration-300 shadow-md">
                    Prueba de amor 💫
                </button>
            </Link>
            <Link to="/acertijo">
                <button className="bg-teal-400 text-white text-xl px-8 py-3 rounded-full hover:bg-teal-500 transition shadow">
                    Resolver un acertijo 🧠
                </button>
            </Link>
        </div>
    )
}

export default Home
