class HelloController {
    async getAll(req, res) {
        return res.json({ word: "Hello"});
    }
}

module.exports = new HelloController();