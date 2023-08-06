// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Store } from '@/types/Store'

const STORES_API_URL = process.env.API_URL || 'https://dondeusarmijuna-api-production.up.railway.app/api/locales'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Store[] | Store | {}>) {
  try {
    const { data } = await axios.get(STORES_API_URL)
    const storesData = data
    res.status(200).json(storesData)
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error)
    res.status(500).json({ error: 'Error al obtener los datos de la API' })
  }
}
