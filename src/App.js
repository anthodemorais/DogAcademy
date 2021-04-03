import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'
import Header from "./components/Header";
import SubscribeBtn from './components/SubscribeBtn'
import './App.css';

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources: {
    en: {
      translation: {
        "home": "Home",
        "about": "About",
        "books": "Books",
        "homeDesc": "The best place to learn the science, the proven methods and tips for dog training",
        "subscribeBtn": "Get your free course",
        "subscribeText": "Subscribe and get your free course by e-mail!",
        "firstName": "First Name",
        "subscribeSubmit": "Subscribe",
        "minRead": "min read",
      }
    },
    fr: {
      translation: {
        "home": "Acceuil",
        "about": "À propos",
        "books": "Livres",
        "homeDesc": "La meilleure façon d'apprendre les méthodes scientifiques et des astuces pour dresser son chien",
        "subscribeBtn": "Recevoir mon cours gratuit",
        "subscribeText": "Abonne-toi et reçois ta formation gratuite par e-mail !",
        "firstName": "Prénom",
        "subscribeSubmit": "Envoyer",
        "minRead": "min de lecture",
      }
    }
  },
  lng: window.location.host.split(".")[0],
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <SubscribeBtn />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/post/:slug">
            <Post />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
