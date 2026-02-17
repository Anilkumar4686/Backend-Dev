const responseTimeLogger = (req, res, next) => {
    const start = Date.now();

    res.on("finish", () => {
        const end = Date.now();
        console.log(`${req.method} ${req.originalUrl} - ${end - start}ms`);
    });

    next();
};

module.exports = responseTimeLogger;
