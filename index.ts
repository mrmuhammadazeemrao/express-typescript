import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes';
import sequelize from './database';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/api', blogRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.get('/api/database', (req: Request, res: Response) => {
  res.send(`Connected to database: ${sequelize.config.database}`);
});
