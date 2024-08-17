import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Islemler from './pages/Islemler';
import MusteriListesi from './pages/MusteriListesi';
import Donguler from './pages/Donguler';
import ArrowFunction from './pages/ArrowFunction';
import HesapMakinesi from './pages/HesapMakinesi';
import HesapIslemleri from './pages/HesapIslemleri';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Login />
);
