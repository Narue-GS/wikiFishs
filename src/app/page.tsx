import Image from "next/image";
import sql from "../db"

export default async function Home() {
  const data = await sql`SELECT * FROM fish`

  console.log(data);


  return (
    <>
      <h1 className="font-bold pl-4 text-3xl">Oba, bem vindo ao seu lugar de apreciação de peixes</h1>
      <hr />

      <div>
        <h1>Peixes</h1>
        {
          data.map((i) => (
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
