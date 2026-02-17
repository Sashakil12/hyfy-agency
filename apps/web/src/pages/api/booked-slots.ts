import type { APIRoute } from 'astro'
import { getBookedSlots } from '@/lib/strapi'

export const GET: APIRoute = async ({ url }) => {
  try {
    const date = url.searchParams.get('date')

    if (!date) {
      return new Response(JSON.stringify({ error: 'Date parameter is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const data = await getBookedSlots(date)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
