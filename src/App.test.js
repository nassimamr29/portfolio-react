import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le profil et le lien des projets', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/du code aux/i);
  expect(screen.getByRole('heading', { name: /apprendre en construisant/i })).toBeInTheDocument();
});
