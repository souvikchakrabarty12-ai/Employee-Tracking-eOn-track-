import React from 'react';
import { createRoot } from 'react-dom/client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './styles.css';

const kpis = [
  { label: 'Active Employees', value: 1842 },
  { label: 'POS Covered Today', value: 924 },
  { label: 'Late Check-ins', value: 47 },
  { label: 'Outside Route Alerts', value: 12 }
];

const productivity = [
  { name: 'Mon', visits: 540 },
  { name: 'Tue', visits: 610 },
  { name: 'Wed', visits: 590 },
  { name: 'Thu', visits: 640 },
  { name: 'Fri', visits: 690 }
];

function App() {
  return (
    <main className="app">
      <h1>eOn Track Command Center</h1>
      <p>Live field-force visibility and operational analytics.</p>
      <section className="grid">
        {kpis.map((item) => (
          <article key={item.label} className="card">
            <h3>{item.label}</h3>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>
      <section className="card chart">
        <h3>Daily POS Productivity</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={productivity}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visits" fill="#2563eb" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
