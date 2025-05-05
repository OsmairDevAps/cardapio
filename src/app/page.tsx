import Image from "next/image";
import imgcapa from '../assets/capamenu.png'

export default function Home() {

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image src={imgcapa} width={700} height={700} alt="Cardápio Tio do Crepe" />
      <div className="flex flex-row justify-center items-center gap-4 mt-4">
        <div>PREV</div>
        <div>NEXT</div>
      </div>
    </div>
  );
}
