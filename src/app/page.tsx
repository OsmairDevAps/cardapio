import Image from "next/image";
import { itens } from "@aw/lib/database";
import Menu from "@aw/components/menu";
import logotipo from '../assets/logotipo.png'

export default function Home() {
  
  return (
    <div className="scroll-smooth flex flex-col justify-center items-center">
      <div className="fixed top-0 w-full">
        <div className="flex flex-row h-20 gap-4 justify-center items-center bg-black text-white">
          <Image src={logotipo} className="w-20 h-20" alt="Tio do Crepe" />
        </div>
        <nav className="w-full shadow flex justify-center gap-4 p-1 bg-blue-800 opacity-70">
          <h1 className="font-bold text-2xl text-white">MENU</h1>
        </nav>
      </div>

      <div className="flex flex-col justify-start items-start w-full h-full mt-28 p-1 md:p-4 lg:p-8">
      <div className="flex flex-col w-full">
        <Menu produtos={itens} />
      </div>
      </div>
    </div>
  );
}
