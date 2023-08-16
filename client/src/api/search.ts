import API_URL from './config.ts'

export async function searchTerm (search: string) {
  const response = await fetch(`${API_URL}/search`, {
    method: 'POST',
    body: JSON.stringify({search}),
    headers:{"Content-Type": "application/json"},
  })
  return response.json();
}