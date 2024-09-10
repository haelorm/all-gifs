import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AllGifs } from './AllGifs';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllGifs />
  </StrictMode>,
)
