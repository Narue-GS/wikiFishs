import { IFish } from "../types"

interface FishModalProps {
  fish:IFish,
  close: () =>  void,
  deleteFish: (id:number) =>  void,
}

export default function FishModal({fish, close, deleteFish} : FishModalProps) {
  return (
    <section className="fixed backdrop-brightness-75 w-screen h-screen top-0 flex justify-center pt-20">
      <div onClick={close} className="fixed cursor-pointer z-0 top-0 w-screen h-screen"></div>
      <div className="bg-white z-10 w-[30%] h-fit ma-h-[80%] p-6 outline rounded-lg ">
        <input className="text-center w-full text-2xl" type="text" value={fish.name}/><br />
        <input className="text-center w-full opacity-80 focus:" type="text" value={fish.s_name}/>
        <hr />
        <textarea className="w-full" name="" id="" value={fish.desc}></textarea>
        <div className="border-t w-full flex gap-6 border-red-500">
          <button className="flex-1 border rounded-lg mt-6 p-2 hover:bg-green-500 hover:text-white transition">salvar</button>
          <button onClick={() => {deleteFish(fish.id); close()}} className="flex-1 border rounded-lg mt-6 p-2 hover:bg-red-500 hover:text-white transition">deletar</button>
        </div>
      </div>
y    </section>
  )
}