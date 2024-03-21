'use client'

import sql from "@/db"

export default function FishList(props:{list:any[]}) {

  async function insert(info:{name:string, s_name:string}) {
    return await sql`INSERT INTO fish (name, s_name) VALUES (${info.name}, ${info.s_name})`
  }

  return (
    <>
      <button onClick={() => insert({name:"Pacu", s_name:"Piaractus brachypomus"})} className="absolute right-10 border p-4 rounded-lg top-10 hover:border-red-500 transition">Add</button>
      <h1 className="font-bold pl-4 text-3xl">Oba, bem vindo ao seu lugar de apreciação de peixes</h1>
      <hr />

      <div>
        <h1>Peixes</h1>
        {
          props.list.map((i) => (
            <div className="p-6" key={i.id}>
              <span>{i.id} - {i.name} - {i.score}</span>
              <p>{i.s_name}</p>
            </div>
          ))
        }
        
        
      </div>
    </>
  );
}
