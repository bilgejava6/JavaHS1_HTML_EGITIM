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
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './pages/Register';
import UserList from './pages/UserList';
import ProductList from './pages/ProductList';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const route = 
<BrowserRouter>
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/app' element={<App />} />
    <Route path='/musteri-listesi' element={<MusteriListesi />} />
    <Route path='/islemler' element={<Islemler />} />
    <Route path='/user-list' element={<UserList />} />
    <Route path='/product-list' element={<ProductList />} />
  </Routes>
</BrowserRouter>;

root.render(route);
