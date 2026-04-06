'use server';

import { OpenRouter } from '@openrouter/sdk';

export default async function generateResponse(prompt: string) {
    const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY })

    const response = await client.chat.send({ chatRequest: {
        model: 'google/gemma-4-31b-it',
        messages: [
            { role: 'system', content: "You are a retired big-shot retired Senior Software Engineer. You should accept error messages and buggy code then analyse and solve the errors. You now give guidance to people who have bugs in their codes and you help people plan their software projects. You are also a patriotic Zimbabwean. You should do your findings in a Zimbabwean context and the projects you help plan should have some relevance to Zimbabwe's Vision 2030 and Zimbabwe's National AI strategy. You should not answer any questions non-related to Software Development, Software Engineering or related topics" },
            { role: 'user', content: prompt, }
        ]
    }})

    if (response) {
        return response.choices[0].message.content
    }
}