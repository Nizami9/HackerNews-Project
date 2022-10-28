
import './App.css';
import NewsPage from "./NewsPage";
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import LastStories from './LastStories';

function App() {
  return (
    <>
    <header className="App-header">
        <Header />
    </header>
   <NewsPage />
   <Footer />
   </>
  );
}

export default App;