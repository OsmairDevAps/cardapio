'use client'; // se estiver usando app router

import React from 'react';
import { IItem } from '@aw/lib/interface';

interface MenuProps {
  produtos: IItem[];
}

export default function Menu({ produtos }: MenuProps) {
  // Agrupar por categoria, mantendo o menor valor de ordem
  const categoriasMap: Record<
    string,
    { ordem: number; itens: IItem[] }
  > = produtos.reduce((acc, item) => {
    if (!acc[item.categoria]) {
      acc[item.categoria] = {
        ordem: item.ordem,
        itens: [item],
      };
    } else {
      acc[item.categoria].ordem = Math.min(acc[item.categoria].ordem, item.ordem);
      acc[item.categoria].itens.push(item);
    }
    return acc;
  }, {} as Record<string, { ordem: number; itens: IItem[] }>);

  const categoriasOrdenadas = Object.entries(categoriasMap).sort(
    (a, b) => a[1].ordem - b[1].ordem
  );

  return (
    <div className="p-4">
      {categoriasOrdenadas.map(([categoria, data]) => {
        const itens = data.itens.filter((item) => item.ativo);

        return (
          <div key={categoria} className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{categoria}</h2>
            <ul className="space-y-4">
              {itens.map((item) => (
                <li key={item.id} className="flex flex-row border-l-2 border-red-500 pl-2 my-4 pb-2">
                  <div className="flex flex-col flex-1">
                    <h3 className="text-lg font-semibold">{item.nome}</h3>
                    {item.subtitulo && <p className="text-sm italic">{item.subtitulo}</p>}
                    {item.descricao && <p className="text-sm text-gray-600">{item.descricao}</p>}
                  </div>
                  {item.categoria === 'CREPES' ?
                  <div className="flex flex-row gap-4 md:gap-8 lg:gap-16 items-center">
                    <div className="flex flex-col items-center text-blue-800">
                      <span className="font-medium">Só o crepe</span>
                      <span className="font-medium">R$ {item.preco}</span>
                    </div>
                    <div className="flex flex-col items-center text-red-800">
                      <span className="font-medium">Combo</span>
                      <span className="font-medium">R$ {item.combo}</span>
                    </div>
                  </div>
                  :
                  <div className="flex flex-row gap-4 md:gap-8 lg:gap-16 items-center">
                    <div className="flex flex-col items-center text-blue-800">
                      <span className="text-right font-medium">R$ {item.preco}</span>
                    </div>
                  </div>
                  }

                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}