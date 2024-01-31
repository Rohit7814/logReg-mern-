const mongoose = require("mongoose");

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        if (!process.env.DB) {
            throw new Error("DB environment variable not set");
        }

        await mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error(error.message);
        console.error("Could not connect to the database!");
        process.exit(1); // Terminate the application if the connection fails
    }
};
