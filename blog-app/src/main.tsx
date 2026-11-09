import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactQueryProvider from './providers/ReactQueryProvider.tsx';
import RegisterPage from './pages/register/index.tsx';

createRoot(document.getElementById('root')!).render(
  <ReactQueryProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </ReactQueryProvider>,
);
