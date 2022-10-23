require('dotenv').config();
const express = require('express');
const { ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');

const authRouter = require('./routes/auth');

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@binance-ts.svqs5d9.mongodb.net/?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverApi: ServerApiVersion.v1,
            },
        );

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

connectDB();

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: ['http://localhost:3000', /\.hihihi\.com$/], // /\.wwư\.com$/
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    }),
);

app.use('/api/auth', authRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`server started at ${PORT}`));
