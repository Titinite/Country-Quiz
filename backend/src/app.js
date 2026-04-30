import express from 'express';
import authRoutes from './routes/auth.routes.js';
import chapterRoutes from './routes/chapter.routes.js';
import progressRoutes from './routes/progress.routes.js';
import questionRoutes from './routes/question.routes.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chapters', chapterRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api', questionRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API is running 🚀' });
});

export default app;