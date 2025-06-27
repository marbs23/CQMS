import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RiddlePage = () => {
  const [respuesta, setRespuesta] = useState('')
  const [mensaje, setMensaje] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    const normalizada = respuesta.trim().toLowerCase()
    if (normalizada === 'tiempo') {
      setMensaje('¡Correcto! 😍 私の善、私の夢、私の喜び、私の執着…')
      setTimeout(() => {
        navigate('/vale')
      }, 2000)
    } else {
      setMensaje('Mmmm... piensa con el corazón 💭💚')
    }
  }

  return (
    <div className="w-screen h-screen bg-teal-50 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-serif text-teal-600 mb-6">
        Adivina esto 💌
      </h1>
      <p className="text-xl text-gray-800 font-sans mb-6 max-w-2xl">
        Soy invisible, pero puedo cambiarlo todo. Si me das amor, te doy recuerdos. ¿Qué soy?
      </p>

      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 text-lg mb-4 w-full max-w-md"
        placeholder="Escribe tu respuesta..."
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-teal-400 text-white text-lg px-6 py-2 rounded-full hover:bg-teal-500 transition shadow"
      >
        Responder
      </button>

      {mensaje && <p className="mt-6 text-xl font-semibold text-teal-700">{mensaje}</p>}
    </div>
  )
}

export default RiddlePage
