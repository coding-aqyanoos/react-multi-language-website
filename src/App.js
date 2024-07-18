
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from "./components/Contact"
import Services from "./components/Services"
import PageHeader from "./components/PageHeader"
import Footer from './components/Footer';
import { getLang } from './lib';

function App() {
  const lang = getLang()

  return (
    <BrowserRouter>
      <div className="App">
        <PageHeader langName={lang}/>
        <Routes>
          <Route index Component={Home} />
          <Route path='/:lang/' Component={Home} />
          <Route path='/:lang/about' Component={About} />
          <Route path='/:lang/contact' Component={Contact} />
          <Route path='/:lang/services' Component={Services} />
        </Routes>
        <Footer langName={lang}/>
      </div>
    </BrowserRouter>

  );
}

export default App;
