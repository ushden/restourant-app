import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import dishesRouter from './routes/dishes';

dotenv.config();

const PORT = process.env.PORT || 4848;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gwsr8.mongodb.net/kitchen?retryWrites=true&w=majority`;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.use('/api/dishes', dishesRouter);

mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		app.listen(PORT, () => console.log(`Server run in port ${PORT}`));
	})
	.catch((e) => console.log(e.message));

mongoose.set('useFindAndModify', false);
