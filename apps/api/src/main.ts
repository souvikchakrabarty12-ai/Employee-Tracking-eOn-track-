import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.post('/api/v1/employees/bulk-upload', (_req, res) => {
  res.status(202).json({ message: 'Bulk upload accepted' });
});

app.listen(4000, () => {
  console.log('API running on :4000');
});
