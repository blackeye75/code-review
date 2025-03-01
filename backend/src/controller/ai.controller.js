const aiServices = require('../services/ai.serives');

module.exports.getReview = async (req, res) => {
    const code = req.body.prompt;
    console.log(prompt);
    
    if (!code) {
        return res.status(400).send("Prompt is required")
    }
    const response = await aiServices(code);

    res.send(response);
}