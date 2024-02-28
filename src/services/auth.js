import { client, checkError } from './client'

export async function signUp(credentials) {
  const res = await client.auth.signUp(credentials)
  return checkError(res)
}

export async function signIn(credentials) {
  const res = await client.auth.signInWithPassword(credentials)
  return checkError(res)
}

export async function signOut() {
  const res = await client.auth.signOut()
  return checkError(res)
}

export async function getUser() {
  const res = await client.auth.getUser()
  return checkError(res)
}

export async function verifyUSer() {
  const res = await client.auth.getSession()
  return checkError(res)
}

export function localUser(user) {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user))
  } else {
    localStorage.removeItem('user')
  }
}

export function checkLocalUser() {
  const user = localStorage.getItem('user')
  try {
    if (user) {
      return JSON.parse(user)
    }
  } catch (e) {
    console.error(e)
    localUser()
  }
}
