import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'
import Tag from "./pages/Tag";
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
        "subscribeText": "Subscribe and get your free 'Dog Training Basics' course by e-mail!",
        "firstName": "First Name",
        "subscribeSubmit": "Subscribe",
        "subscribeAlt": 'Dog Training Basics Course',
        "minRead": "min read",
        "aboutTitle": "All the secrets and scientific methods about dog training",
        "aboutDesc": "Dog training is our passion. We tried many different methods before finding the right ones. The ones that are backed by scientific researches and renowned experts in this field. Here, we compile everything we know so you don't have waste your time doing the research and making the mistakes we made. We have a ton of free content but the best value and all our knowledge is in our books. If you don't want to spend time, our books are for you. Follow us and your dog will thank you and love you!",
        "all-Tag": "Discover here all our articles and methods from all areas of dog ownership to make sure your dog is well trained, clean, healthy, happy and that he loves you!",
        "dog-training-Tag": "Learn how to train a dog with our scientific methods and secrets without hurting your dog! Training your dog becomes easy when you have the right methods!",
        "dog-health-Tag": "Want to know everything about dog health ? Then read our articles and learn all the science behind dog health to help your dog live a long and healthy life !",
        "dog-nutrition-Tag": "Dog nutrition is one of the most important aspects of dog health. With science, our recipes, and our secrets, your dog will eat like a king and be healthy!",
        "dog-grooming-Tag": "Learn how to house train your dog, take care of him and everything about dog grooming. Dogs are clean by nature so a clean dog is a happy and healthy dog!",
      }
    },
    fr: {
      translation: {
        "metaTitle": "Dog Academy - Tous les secrets pour dresser son chien",
        "metaDesc": "La meilleure fa??on d'apprendre les m??thodes scientifiques pour dresser son chien. Tu sauras aussi tout sur l'hygi??ne, la sant?? et la nutrition des chiens",
        "metaKeywords": "chien,dresser son chien,nourrir son chien,sant?? des chiens,chien hypoallergenique,faire taire son chien,toilettage chien",
        "home": "Acceuil",
        "about": "?? propos",
        "books": "Livres",
        "homeDesc": "La meilleure fa??on d'apprendre les m??thodes scientifiques et des astuces pour dresser son chien",
        "subscribeBtn": "Recevoir mon cours gratuit",
        "subscribeText": "Abonne-toi et re??ois ta formation gratuite par e-mail sur 'Les Bases pour Dresser son Chien'!",
        "firstName": "Pr??nom",
        "subscribeSubmit": "Envoyer",
        "subscribeAlt": 'Cours sur les bases pour dresser son chien',
        "minRead": "min de lecture",
        "aboutTitle": "Tous les secrets et les m??thodes scientifiques pour dresser son chien",
        "aboutDesc": "Le dressage des chiens est notre passion. Nous avons essay?? de nombreuses m??thodes diff??rentes avant de trouver les bonnes. Celles qui sont soutenues par des recherches scientifiques et des experts reconnus dans ce domaine. Ici, nous compilons tout ce que nous savons pour que vous n'ayez pas ?? perdre votre temps ?? faire des recherches et ?? commettre les erreurs que nous avons faites. Nous avons une tonne de contenu gratuit mais la meilleure valeur et toutes nos connaissances se trouvent dans nos livres. Si vous ne voulez pas perdre de temps, nos livres sont faits pour vous. Suivez-nous et votre chien vous remerciera et vous aimera !",
        "all-Tag": "Retrouve ici tous nos articles et nos m??thodes de toutes les diff??rentes cat??gories pour que ton chien soit bien dress??, propre, en bonne sant?? et qu'il t'aime!",
        "dresser-son-chien-Tag": "Apprends comment dresser un chien avec nos m??thodes scientifiques et sans faire de mal ?? ton chien ! Dresser son chien, c'est facile avec les bonnes m??thodes !",
        "sante-chien-Tag": "Tu veux tout savoir sur la sant?? des chiens ? Nos articles contiennent toute la science de la sant?? canine pour que ton chien vive longtemps et en bonne sant??",
        "nutrition-des-chiens-Tag": "La nutrition canine joue un r??le majeur dans la sant?? des chiens. Avec la science et nos recettes, ton chien mangera comme un roi et aura une sant?? au top !",
        "proprete-et-toilettage-des-chiens-Tag": "D??couvre comment apprendre la propret?? ?? ton chien et comment tu peux l'entretenir et le toiletter. Un chien propre est un chien heureux et en bonne sant?? !",
      }
    }
  },
  lng: window.location.host.split(".")[0] === "fr" ? "fr" : "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});

const tagsFr = [
  {name: 'Tous Nos Articles', slug: 'all'},
  {name: 'Dresser son chien', slug: 'dresser-son-chien'},
  {name: 'Sant?? du chien', slug: 'sante-chien'},
  {name: 'Nutrition canine', slug: 'nutrition-canine'},
  {name: 'Propret?? et toilettage des chiens', slug: 'proprete-et-toilettage-des-chiens'},
]

const tagsEn = [
  {name: 'All Our Articles', slug: 'all'},
  {name: 'Dog Training', slug: 'dog-training'},
  {name: 'Dog Health', slug: 'dog-health'},
  {name: 'Dog Nutrition', slug: 'dog-nutrition'},
  {name: 'Dog Grooming', slug: 'dog-grooming'},
]


function App() {
  const posts = i18n.language === "fr" ? postsFr : postsEn
  const tags = i18n.language === "fr" ? tagsFr : tagsEn

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
            <Post posts={posts} tags={tags} />
          </Route>
          <Route path="/tag/:tag">
            <Header isHome={false} />
            <SubscribeBtn />
            <Tag posts={posts} tags={tags} />
          </Route>
          <Route path="/">
            <Header isHome={true} />
            <SubscribeBtn />
            <Home posts={posts} tags={tags} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
