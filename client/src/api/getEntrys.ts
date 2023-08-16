import API_URL from "./config";

export type TEntry = {
    title: string;
    id: number;
}

export async function getEntrys(): Promise<TEntry[]> {
    const response = await fetch(`${API_URL}/entrys`, {
        method: 'get',
        headers:{"Content-Type": "application/json"},
    })
    return response.json();
}