const API_URL = "http://localhost:8081/api";

async function login(data) {
    const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const user = await res.json();
    return user;
}

async function logout() {
    const res = await fetch(`${API_URL}/logout`);
    await res.json();
}

async function getTicketInfo(id) {
    const res = await fetch(`${API_URL}/ticket/${id}`);
    const data = await res.json();

    return data;
}

export { login, logout, getTicketInfo };
