import React from 'react'

const FloatNav = () => {
  return (
    <div>
      <div className="bg-green-400 border-2 border-red-400 absolute float-right">
        <button className="px-2 border-2 border-blue-400 text-center text-large"> Home</button>
        <button className="px-2 border-2 border-blue-400 text-center text-large">About</button>
        <button className="px-2 border-2 border-blue-400 text-center text-large"> Projects</button>
        <button className="px-2 border-2 border-blue-400 text-center text-large">Contact</button>
      </div>
    </div>
  )
}

export default FloatNav
