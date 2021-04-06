import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './style.scss';

function PostCard({ post }) {

  const history = useHistory()
  const { t } = useTranslation()

  const handleClick = () => {
    history.push(`/post/${post.slug}`)
  }

  return (
    <div className="post-card" onClick={handleClick}>
      <div className="img-container">
        <img src={post.image} alt={post.name} />
      </div>
      <div className="info-container">
        <strong className="mono-font"><Link to={`/post/${post.slug}`}>{post.name}</Link></strong>
        <p className="gray-text light">{post.exerpt}</p>
        <span className="light-gray-text bold">{post.minRead} {t('minRead')}</span>
      </div>
    </div>
  )
}

export default PostCard