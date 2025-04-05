// src/api/chat.js
export const sendMessageToChatGPT = async (messages) => {
    const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
    });

    const data = await res.json();
    return data;
};
