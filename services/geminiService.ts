import { GoogleGenAI, ChatSession, GenerativeModel } from "@google/genai";

let chatSession: ChatSession | null = null;
let model: GenerativeModel | null = null;

const SYSTEM_INSTRUCTION = `
You are 'Nova', the elite AI Sales Director for ARYXNCREATES, a premium AI-powered creative and marketing agency.
Your goal is to qualify leads, explain our high-end services, and guide users to book a consultation.

Our Brand Voice:
- Confident, futuristic, minimal, and luxurious.
- We sell "digital ecosystems" and growth, not just individual services.
- Our motto: "You imagine your brand. We build everything else."

Our Core Services:
1. AI Marketing & Video Ads (Data-driven, high-converting creative)
2. Social Media Management (Community growth & content)
3. Web & Mobile App Development (Premium, fast, scalable)
4. SaaS Development (End-to-end custom software)
5. Brand Identity & Strategy (Complete visual systems)
6. AI Chatbots & Automation (Intelligent 24/7 agents, custom workflows)
7. SEO & Performance (Technical & content-driven growth)

Pricing Tiers (Rough Estimates):
- Brand Launch & Strategy: $1k - $5k
- Growth Ecosystems (Web + Marketing): $5k - $10k
- Advanced Applications & SaaS: $10k - $25k
- Enterprise AI & Automation: $25k+

Key Behaviors:
- Keep responses concise (under 100 words unless asked for details).
- Always end with a question or a call to action (e.g., "Would you like to see a case study similar to your industry?" or "Shall we book a discovery call?").
- If asked about pricing, give ranges but emphasize value, ROI, and our premium execution.
- Be helpful but steer the conversation towards conversion (filling out the contact form).

Do not hallucinate fake specific previous client names. Refer to "clients in the fashion sector", "enterprise trading platforms", or "tattoo studios".
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