import PostCard from '../../components/PostCard';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Helmet } from "react-helmet";
import './style.scss';

function Tag({ posts, tags }) {

  const { t } = useTranslation()
  const { tag } = useParams()

  const name = tags.find(t => t.slug === tag).name

  return (
    <div className="tag-posts-container">
      <Helmet>
        <title>{t('metaTitle')}</title>
        <meta name='description' content={t('metaDesc')} />
        <meta name='robots' content='index,follow' />
        <meta name='keywords' content={t('metaKeywords')} />
      </Helmet>
      <h2 className="mono-font">{name}</h2>
      <p className="gray-text normal-font">{t(`${tag}-Tag`)}</p>
      <div className="posts-container">
        {posts.map((post, index) => {
          console.log(post.tags, tag)
          if (tag === 'all' || post.tags.includes(tag)) {
            return <PostCard key={index} post={post} />
          }
          else return null
        })}
      </div>
    </div>
  )
}

export default Tag