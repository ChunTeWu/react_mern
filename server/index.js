import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import itemRoutes from './routes/item.js';

const app = express();
// mongoDB url and port setting
const CONNECTION_URL = 'mongodb+srv://davidpypy:a12345678@cluster0.zl0m7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// body-parser is included in express by default
// app.use(bodyParser.json({limit: "20mb", extended:true}));
// app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

// set file size limit and accept data other than string
app.use(express.json({limit: "20mb", extended:true}));
app.use(express.urlencoded({limit: "20mb", extended:true}));

app.use(cors());

// set CRUD function, everything import will start from /items
app.use('/items', itemRoutes);

// connect to mongoDB
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, 
    () => console.log(`connection is running on port ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);