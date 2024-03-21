
import Image from "next/image";
import sql from "../db"
import FishList from "./components/fishList";

export default async function Home() {
  const data = await sql`SELECT * FROM fish`
  
  return (
    <>
     <FishList list={data}/>
    </>
  );
}
