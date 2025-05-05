'use client'

import Image from "next/image";
import { useEffect, useState } from 'react'
import imgcapa from '../assets/capamenu.png'
import { itens } from "@aw/lib/database";


export default function Home() {
  const [sections, setSections] = useState([])

  useEffect(() => {
    // async function fetchSections() {
      // const { data, error } = await supabase.from('cardapio').select('*')
      // if (!error) setSections(data)
    // }
    // fetchSections()
  }, [])
  
  return (
    <div className="scroll-smooth">
      {/* Barra de navegação fixa */}
      <nav className="fixed top-0 w-full bg-white shadow z-50 flex justify-center gap-6 p-4">
        {itens.map((cardapio) => (
          <a
            key={cardapio.id}
            href={`#secao-${cardapio.categoria}`}
            className="text-blue-600 hover:underline"
          >
            {cardapio.categoria}
          </a>
        ))}
      </nav>

      {/* Imagem de topo */}
      <div className="mt-0">
        <Image
          src={imgcapa}
          alt="Topo"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Conteúdos das seções */}
      <div className="p-8">
        {itens.map((cardapio) => (
          <section
            key={cardapio.id}
            id={`secao-${cardapio.categoria}`}
            className="min-h-screen"
          >
            <h2 className="text-3xl font-bold">{cardapio.nome}</h2>
            <p>{cardapio.descricao}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
