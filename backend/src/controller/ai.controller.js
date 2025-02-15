const aiServices = require('../services/ai.serives');

module.exports.getReview = async (req, res) => {
    const pormpt = req.body.prompt;
    if (!pormpt) {
        return res.status(400).send("Prompt is required")
    }
    const response = await aiServices(pormpt);

    res.send(response);
}