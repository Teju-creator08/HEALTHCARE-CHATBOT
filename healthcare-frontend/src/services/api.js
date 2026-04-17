import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const chatWithBot = async (message) => {
    try {
        const response = await axios.post(`${API_URL}/chat`, {
            message: message
        });
        return response.data;
    } catch (error) {
        console.error('Error chatting with bot:', error);
        return null;
    }
};