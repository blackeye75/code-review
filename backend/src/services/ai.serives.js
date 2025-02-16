const { GoogleGenerativeAI } = require("@google/generative-ai");


console.log();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMENI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",systemInstruction:"you are an code reviewer, who have expertise in development .you look for the code and try to find the problem and the best solution and suggest the suggestion to the developer .You always tyru to find the best solution for the developer and also try to make the code more efficient  and clean"});

async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();

}

module.exports = generateContent;