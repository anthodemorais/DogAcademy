import PostCard from '../../components/PostCard';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
import './style.scss';
import { NavLink } from 'react-router-dom';

function Home({ posts, tags }) {

  const { t } = useTranslation()

  return (
    <div className="home">
      <Helmet>
        <title>{t('metaTitle')}</title>
        <meta name='description' content={t('metaDesc')} />
        <meta name='robots' content='index,follow' />
        <meta name='keywords' content={t('metaKeywords')} />
      </Helmet>
      <div className="title-container">
        <h1>{t('homeDesc')}</h1>
      </div>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <NavLink index={index} to={`/tag/${tag.slug}`}>{tag.name}</NavLink>
        ))}
      </div>
      <div className="posts-container">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Home