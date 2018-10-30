import React from 'react';
import MainLayout from '../layouts/mainLayout';

const cities = ['madrid', 'barcelona', 'london'];

const Index = () => (
  <MainLayout>
    <div>
      <ul>
        {cities.map(c => (
          <li key={c}>
            <a href={`/rooms/${c}`}>{`${c.slice(0, 1).toUpperCase()}${c.slice(1)}`}</a>
          </li>
        ))}
      </ul>
    </div>
  </MainLayout>
);

export default Index;
