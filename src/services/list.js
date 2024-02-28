import { client, checkError } from './client'

export async function getItems() {
  const res = await client
    .from('list')
    .select('*')
  return checkError(res)
}

export async function getItem(id) {
  const res = await client
    .from('list')
    .select('*')
    .match({ 'id': id })
    .single()
  return checkError(res)
}

export async function createItem(data) {
  const res = await client
    .from('list')
    .insert(data)
  return checkError(res)
}

export async function updateItem(id, data) {
  const res = await client
    .from('list')
    .update({ ...data })
    .match({ 'id': id })
    .single()
  return checkError(res)
}

export async function deleteItem(id) {
  const res = await client
    .from('list')
    .delete()
    .eq('id', id)
  return checkError(res)
}
