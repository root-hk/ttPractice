const home = async (req, res) => {
    try {
        res.status(200).send("Hello Hemant");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);

        res.status(200).send({ message: req.body });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { home, register };
