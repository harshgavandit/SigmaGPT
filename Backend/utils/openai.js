import "dotenv/config";

const getOpenAIAPIResponse = async(message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{
                role: "user",
                content: message
            }]
        })
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (!data.choices || data.choices.length === 0) {
            throw new Error("No response from OpenAI API");
        }
        return data.choices[0].message.content; //reply
    } catch(err) {
        console.log(err);
        return "Sorry, I couldn't generate a response right now. Please try again.";
    }
}

export default getOpenAIAPIResponse;