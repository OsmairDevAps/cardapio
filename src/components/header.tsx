'use client'

import Link from "next/link"
export default function Header() {
  return (
    <div className="flex flex-row w-full h-20 justify-center items-center">
      <Link href='/' className="p-2 border-[1px] border-green-400 bg-green-200">Categoria 1</Link>
      <Link href='/' className="p-2 border-[1px] border-green-400 bg-green-200">Categoria 2</Link>
    </div>
  )
}