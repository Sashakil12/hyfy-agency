import type { APIRoute } from 'astro'
import { submitContactForm } from '@/lib/strapi'

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json()
    const { data, status } = await submitContactForm(body)
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
