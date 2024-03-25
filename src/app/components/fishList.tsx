'use client'

import { useState } from "react";
// import sql from "@/db"

import { insert } from "../service";

export default function FishList(props:{list:any[]}) {
  const [list, setList] = useState(props.list)
  console.log(list);

  function post() {
    setList([...list, {
      id: '6',
      name: 'Tainha',
      s_name: 'Mugilidae',
      score: 0,
      desc: '...',
      
    }])
    insert({name:"Tainha", s_name:"Mugilidae"})
  }
  
  

  return (
    <>
      <button onClick={() => post()} className="absolute right-10 border p-4 rounded-lg top-10 hover:border-red-500 transition">Add</button>
      <h1 className="font-bold pl-4 text-3xl">Oba, bem vindo ao seu lugar de apreciação de peixes</h1>
      <hr />

      <div>
        <h1>Peixes</h1>
        {
          list.map((i) => (
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
