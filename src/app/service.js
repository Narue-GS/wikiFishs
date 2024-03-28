'use server'

import sql from "@/db"

export async function insert(info) {
  return await sql`INSERT INTO fish (id, name, s_name) VALUES (${info.id}, ${info.name}, ${info.s_name})`
}

export async function select() {
  return await sql`SELECT * FROM fish`
}

export async function delete_(id) {
  return await sql`DELETE FROM fish WHERE id = ${id}` 
}

export async function update(fish) {
  console.log(fish);
  return await sql`UPDATE fish SET name = ${fish.name}, s_name = ${fish.s_name}, "desc" = ${fish.desc} WHERE id = ${fish.id}
  ` 
}

