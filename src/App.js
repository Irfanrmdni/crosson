import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import HomePages from './Pages/HomePage';
import News from './Pages/News';
import NewsDetail from './Pages/NewsDetail';
import NotFound from './Pages/NotFound';
import Products from './Pages/Products';
import ProductsDetail from './Pages/ProductsDetail';
import Services from './Pages/Services';

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<HomePages />} />
               <Route path="/about" element={<About />} />
               <Route path="/services" element={<Services />} />
               <Route path="/contact" element={<Contact />} />
               <Route exact path="/products" element={<Products />} />
               <Route path="/products/products-detail/:id" element={<ProductsDetail />} />
               <Route exact path="/news" element={<News />} />
               <Route path="/news/news-detail/:id" element={<NewsDetail />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
