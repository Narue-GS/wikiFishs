'use client'

import { useState } from "react";
// import sql from "@/db"

import { insert } from "../service";

export default function FishList(props:{list:any[]}) {
  const [list, setList] = useState(props.list)

  const [newFish, setNewFish] = useState({
    id: parseInt(list[list.length-1].id) + 1,
    name: '',
    s_name: '',
    score: 0,
    desc: '',
  })

  // async function post() {
  //   insert({id: +list[list.length-1].id + 1,name:"Tainha3", s_name:"Mugilidae3"})
  //   setList([...await select()])
  // }

  function post() {
    if(list.filter((i) => i.name == newFish.name || i.s_name == newFish.s_name).length){
      alert("Peixe já registrado")
      return
    }
    insert({id: newFish.id,name:newFish.name, s_name:newFish.s_name})
    setList([...list, newFish])
    setNewFish({
      id: newFish.id + 1,
      name: '',
      s_name: '',
      score: 0,
      desc: '',
    })
  } 


  return (
    <>
      {/* input box */}
      <div className="absolute right-10 bottom-0 flex gap-2 p-2 border rounded-lg hover:shadow-lg transition">
        <div className="flex flex-col">
          <span>adicione mais peixes!</span>
          <input placeholder="Nome" value={newFish.name} onChange={(e) => setNewFish({...newFish, name:e.target.value})} type="text"  className="outline-none border rounded-lg p-1"/>
          <input placeholder="Nome científico" value={newFish.s_name} onChange={(e) => setNewFish({...newFish, s_name:e.target.value})} type="text"  className="outline-none border rounded-lg p-1"/>
        </div>
        <button onClick={() => post()} className="border p-4 rounded-lg hover:border-green-500 transition">Add</button>
      </div>

      <h1 className="font-bold pl-4 text-3xl">Oba, bem vindo ao seu lugar de apreciação de peixes</h1>
      <hr />

      <div>
        <h1>{newFish.name}</h1>
        <div className="max-h-[90vh] divide-y w-fit flex flex-col flex-wrap place-items-start">
          {
            list.map((i) => (
              <div className="p-6 w-fit " key={i.id}>
                <span>{i.id} - {i.name} - {i.score}</span>
                <p>{i.s_name}</p>
              </div>
            ))
          }
        </div>
        
        
      </div>
    </>
  );
}
