'use server'

import sql from "@/db"

export async function insert(info) {
  return await sql`INSERT INTO fish (name, s_name) VALUES (${info.name}, ${info.s_name})`
}

export async function select() {
  return await sql`SELECT * FROM fish`
}