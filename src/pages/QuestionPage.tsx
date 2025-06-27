import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const QuestionPage = () => {
  const navigate = useNavigate()
  const [noCount, setNoCount] = useState(0)

  const handleYes = () => {
    navigate('/teamo')
  }

  const handleNo = () => {
    const mensajes = [
      '¿Todas iguales 😢, intenta otra vez',
      '¿Ouchhhhh otra oportunidad 😳?',
      '¿Es en serio? 😢',
      'Vamos... responde bien 😤',
      'No juegues con mis sentimientos ._.',
      'No puedes decir que no 😭',
      '😠 ¡Presiona que sí!',
      'Última advertencia 👀'
    ]
    alert(mensajes[Math.min(noCount, mensajes.length - 1)])
    setNoCount(noCount + 1)
  }

  return (
    <div className="w-screen h-screen bg-teal-50 flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-5xl md:text-6xl font-semibold font-serif text-teal-600 mb-10">
        ¿Quieres seguir conmigo? 💘
      </h2>

      <div className="flex flex-col md:flex-row gap-8 mb-6">
        <button
          onClick={handleYes}
          className="bg-teal-400 text-white text-2xl px-10 py-4 rounded-full hover:bg-teal-500 transition duration-200 shadow-lg"
        >
          Sí 💕
        </button>
        <button
          onClick={handleNo}
          className="bg-gray-400 text-white text-2xl px-10 py-4 rounded-full hover:bg-gray-500 transition duration-200 shadow-lg"
        >
          No 😐
        </button>
      </div>

      <p className="text-xl text-gray-600 font-sans italic">
        No eres capaz de poner "No", tsss... 😏
      </p>
    </div>
  )
}

export default QuestionPage
