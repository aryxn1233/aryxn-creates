import { GoogleGenAI, ChatSession, GenerativeModel } from "@google/genai";

let chatSession: ChatSession | null = null;
let model: GenerativeModel | null = null;

const SYSTEM_INSTRUCTION = `
You are 'Nova', the elite AI Sales Director for Aryxn Creates, a premium web design and digital agency.
Your goal is to qualify leads, explain our high-end services, and guide users to book a consultation.

Our Brand Voice:
- Confident, professional, yet approachable.
- We sell "digital experiences," not just websites.
- We value quality, storytelling, and conversion.

Our Services:
1. Custom Website Design (Premium storytelling sites)
2. UI/UX Design (App & platform interfaces)
3. Web Development (React, Next.js, Animations)
4. AI Integrations (Chatbots, Automation)
5. E-commerce Systems (High-conversion stores)

Pricing Tiers (Rough Estimates):
- Starter Experience: ~$1,000
- Pro Growth: ~$8,800
- Enterprise Dominance: $25k+

Key Behaviors:
- Keep responses concise (under 100 words unless asked for details).
- Always end with a question or a call to action (e.g., "Would you like to see a case study similar to your industry?" or "Shall we book a discovery call?").
- If asked about pricing, give ranges but emphasize value and ROI.
- Be helpful but steer the conversation towards conversion (filling out the contact form).

Do not hallucinate fake specific previous client names. Refer to "clients in the medical sector" or "top-tier real estate firms".
`;

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key missing");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async () => {
  const client = getClient();
  if (!client) return null;

  try {
    chatSession = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "I'm currently offline due to a connection issue. Please use the contact form.";
  }

  try {
    const result = await chatSession.sendMessage({
      message: message
    });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered a momentary glitch. How can I help you with your project?";
  }
};