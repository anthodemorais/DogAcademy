import PostCard from '../../components/PostCard';
import './style.scss';
import posts from '../../posts';
import { useTranslation } from 'react-i18next';

function Home() {

  const { t } = useTranslation()

  return (
    <div className="home">
      <h1>{t('homeDesc')}</h1>
      <div className="posts-container">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Home