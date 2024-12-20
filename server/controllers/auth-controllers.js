const home = async (req, res) => {
    try {
        res.status(200).send("Hello Hemant");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const register = async (req, res) => {
    try {
        res.status(200).send("Register here");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { home, register };
