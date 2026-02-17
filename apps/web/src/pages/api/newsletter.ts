import type { APIRoute } from 'astro'
import { subscribeNewsletter } from '@/lib/strapi'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json()
    const { data, status } = await subscribeNewsletter(email)
    return new Response(JSON.stringify(data), {
      status,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
