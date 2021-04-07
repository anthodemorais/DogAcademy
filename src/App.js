import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'
import Header from "./components/Header";
import SubscribeBtn from './components/SubscribeBtn'
import postsFr from './posts/fr'
import postsEn from './posts/en'
import './App.css';

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources: {
    en: {
      translation: {
        "metaTitle": "Dog Academy - All you need to know about dog training",
        "metaDesc": "The best place for you to learn the science, the proven methods and tips for dog training, grooming, hygiene, health and nutrition. Your dog will love you !",
        "metaKeywords": "dog,dog training,dog nutrition,dog health,hypoallergenic dog,dog barking,dog grooming",
        "home": "Home",
        "about": "About",
        "books": "Books",
        "homeDesc": "The best place to learn the science, the proven methods and tips for dog training",
        "subscribeBtn": "Get your free course",
        "subscribeText": "Subscribe and get your free course by e-mail!",
        "firstName": "First Name",
        "subscribeSubmit": "Subscribe",
        "minRead": "min read",
        "aboutTitle": "All the secrets and scientific methods about dog training",
        "aboutDesc": "Dog training is our passion. We tried many different methods before finding the right ones. The ones that are backed by scientific researches and renowned experts in this field. Here, we compile everything we know so you don't have waste your time doing the research and making the mistakes we made. We have a ton of free content but the best value and all our knowledge is in our books. If you don't want to spend time, our books are for you. Follow us and your dog will thank you and love you!"
      }
    },
    fr: {
      translation: {
        "metaTitle": "Dog Academy - Tous les secrets pour dresser son chien",
        "metaDesc": "La meilleure façon d'apprendre les méthodes scientifiques pour dresser son chien. Tu sauras aussi tout sur l'hygiène, la santé et la nutrition des chiens",
        "metaKeywords": "chien,dresser son chien,nourrir son chien,santé des chiens,chien hypoallergenique,faire taire son chien,toilettage chien",
        "home": "Acceuil",
        "about": "À propos",
        "books": "Livres",
        "homeDesc": "La meilleure façon d'apprendre les méthodes scientifiques et des astuces pour dresser son chien",
        "subscribeBtn": "Recevoir mon cours gratuit",
        "subscribeText": "Abonne-toi et reçois ta formation gratuite par e-mail !",
        "firstName": "Prénom",
        "subscribeSubmit": "Envoyer",
        "minRead": "min de lecture",
        "aboutTitle": "Tous les secrets et les méthodes scientifiques pour dresser son chien",
        "aboutDesc": "Le dressage des chiens est notre passion. Nous avons essayé de nombreuses méthodes différentes avant de trouver les bonnes. Celles qui sont soutenues par des recherches scientifiques et des experts reconnus dans ce domaine. Ici, nous compilons tout ce que nous savons pour que vous n'ayez pas à perdre votre temps à faire des recherches et à commettre les erreurs que nous avons faites. Nous avons une tonne de contenu gratuit mais la meilleure valeur et toutes nos connaissances se trouvent dans nos livres. Si vous ne voulez pas perdre de temps, nos livres sont faits pour vous. Suivez-nous et votre chien vous remerciera et vous aimera !"
      }
    }
  },
  lng: window.location.host.split(".")[0] === "fr" ? "fr" : "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});


function App() {
  const posts = i18n.language === "fr" ? postsFr : postsEn

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <Header isHome={false} />
            <SubscribeBtn />
            <About />
          </Route>
          <Route path="/post/:slug">
            <Header isHome={false} />
            <SubscribeBtn />
            <Post posts={posts} />
          </Route>
          <Route path="/">
            <Header isHome={true} />
            <SubscribeBtn />
            <Home posts={posts} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
