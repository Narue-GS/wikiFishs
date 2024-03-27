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

