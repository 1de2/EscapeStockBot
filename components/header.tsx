import * as React from 'react'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 bg-black shadow-md">
      {/* Logo y Título Personalizado */}
      <div className="flex items-center">
        <Image
          src="https://i.ibb.co/d49xhd6/LOGO-ESCAPE-BOT.jpg" // Cambia esta URL si usas el logo local
          alt="Escape Stock Analysis Bot Logo"
          width={50}
          height={50}
          className="mr-4"
        />
        <h1 className="text-white text-xl font-bold">
          Escape Stock Analysis Bot
        </h1>
      </div>
    </header>
  )
}
