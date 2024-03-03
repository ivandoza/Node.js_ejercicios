import express from 'express';
import "express-async-errors";
import morgan from "morgan";
import { getAll, getOneById, create, updateById, deleteById } from './controllers/planets.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get('/api/planets', getAll);
app.get('/api/planets/:id', getOneById);
app.post('/api/planets', create);
app.put('/api/planets/:id', updateById);
app.delete('/api/planets/:id', deleteById);

app.listen(port, () => {
  console.log(`App listening on port http:/localhost:${port}`);
});
