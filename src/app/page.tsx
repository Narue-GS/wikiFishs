
import Image from "next/image";
import FishList from "./components/fishList"
import { select } from "./service"

export const dynamic = "force-dynamic" 

export default async function Home() {
  const data = await select()
  


  return (
    <>

     <FishList list={data}/>
    </>
  );
}
