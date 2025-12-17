const API_URL = 'https://spiestestserver-8l55.onrender.com';

async function fetchJson(path) {
    const res = await fetch(`${API_URL}${path}`);
    if (!res.ok) throw new Error('error');
    return res.json();
}

export const getPeople = () => fetchJson('/people');
export const getTranscriptions = () => fetchJson('/transcriptions');

