import api from "./api";

interface Response {
  data: {
    token: string
    user: {
      id: number
      name: string
      email: string
      avatar: string
      whatsapp: string
      bio: string
    }
  }
}

export async function signIn(email: string, password: string): Promise<Response> {
  return await api.post('/sessions', { email, password })
}

export async function storeUser(name: string, email: string, password: string): Promise<void> {
  return await api.post('/users', { name, email, password })
}