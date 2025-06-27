import { useState } from 'react'

const ValePage = () => {
  const [deseo, setDeseo] = useState('')

  const handleEnviar = () => {
    if (!deseo.trim()) {
      alert('¡Primero escribe algo! 🙈')
    } else {
      alert(`Vale por: "${deseo}" 😍\nAhora mándale una foto de eso a Martín 📸💕`)
    }
  }

  return (
    <div className="w-screen h-screen bg-teal-50 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-serif text-teal-600 mb-6">🎁 Vale por...</h1>
      <p className="text-xl text-gray-800 font-sans mb-6 max-w-xl">
        Escribe lo que más deseas ahora mismo. Este vale es para ti 💖
      </p>
      <input
        type="text"
        value={deseo}
        onChange={(e) => setDeseo(e.target.value)}
        placeholder="Un helado, un beso, un paseo..."
        className="border border-gray-300 rounded px-4 py-2 text-lg w-full max-w-md mb-4"
      />
      <button
        onClick={handleEnviar}
        className="bg-teal-400 text-white text-lg px-6 py-2 rounded-full hover:bg-teal-500 transition shadow"
      >
        Enviar vale 💌
      </button>
    </div>
  )
}

export default ValePage
