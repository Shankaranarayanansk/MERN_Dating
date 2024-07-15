class cus_err extends Error {
    constructor(msg) {
        super(msg);
        this.name = "CustomError";
    }
}

module.exports = { cus_err };
