'use server';

import { OpenRouter } from '@openrouter/sdk';

export default async function generateResponse(prompt: string) {
    const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY })

    const response = await client.chat.send({ chatRequest: {
        model: 'google/gemma-4-31b-it',
        messages: [
            { role: 'user', content: prompt }
        ]
    }})

    if (response) {
        return response.choices[0].message.content
    }
}