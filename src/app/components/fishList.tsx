'use client'

import { useState } from "react";

import { insert, delete_ } from "../service";

import { IFish, deafultModalState } from "../types";

import FishModal from "./fishModal";

export default function FishList(props:{list:any[]}) {
  let [list, setList] = useState(props.list)

  const [modalState, setModalState] = useState(deafultModalState)

  const defaultFish = {
    id: parseInt(list[list.length-1]?.id) + 1 || 0,
    name: '',
    s_name: '',
    score: 0,
    desc: '',
  }

  const [newFish, setNewFish] = useState(defaultFish)

  function post() {
    if(list.filter((i) => i.name == newFish.name || i.s_name == newFish.s_name).length){
      alert("Peixe já registrado")
      return
    }
    insert({id: newFish.id,name:newFish.name, s_name:newFish.s_name})
    setList([...list, newFish])
    setNewFish({...defaultFish, id:newFish.id + 1})
  } 

  function catchFish(fish:IFish) {
    setModalState({
      display:true,
      data:fish
    })
  }

  function deleteFish(id:number) {
    delete_(id)
    list = [...list.filter((i) => i.id != id)]
    setList(list)
    setNewFish({...defaultFish, id:parseInt(list[list.length -1].id) + 1 || 0})
  }

  return (
    <>
      {
        modalState.display ? <FishModal deleteFish={deleteFish} close={() => setModalState(deafultModalState)} fish={modalState.data}/> : ""
      }

      <h1 className="font-bold pl-4 text-3xl">Oba, bem vindo ao seu lugar de apreciação de peixes</h1>
      <hr />
      <div>
        <div className="max-h-[90vh] max-w-[50vw] overflow-scroll divide-y w-fit flex flex-wrap justify-start ">
          {
            list.map((i, index) => (
              <div onClick={() => catchFish(i)} className="p-6 w-fit cursor-pointer" key={i.id}>
                <span>{i.id} - {i.name} - {i.score}</span>
                <p>{i.s_name}</p>
              </div>
            ))
          }
        </div>
      </div>

      {/* input box */}
      <div className="absolute right-10 bottom-9 flex gap-2 p-2 border rounded-lg hover:shadow-lg transition">
        <div className="flex flex-col">
          <span>adicione mais peixes!</span>
          <input placeholder="Nome" value={newFish.name} onChange={(e) => setNewFish({...newFish, name:e.target.value})} type="text"  className="outline-none border rounded-lg p-1"/>
          <input placeholder="Nome científico" value={newFish.s_name} onChange={(e) => setNewFish({...newFish, s_name:e.target.value})} type="text"  className="outline-none border rounded-lg p-1"/>
        </div>
        <button onClick={() => post()} className="border p-4 rounded-lg hover:border-green-500 transition">Add</button>
      </div>
    </>
  );
}

