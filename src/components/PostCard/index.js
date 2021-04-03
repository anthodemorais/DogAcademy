import { useHistory } from 'react-router';
import './style.scss';

function PostCard({ post }) {

  const history = useHistory()

  const handleClick = () => {
    history.push(`/post/${post.slug}`)
  }

  return (
    <div className="post-card" onClick={handleClick}>
      <div className="img-container">
        <img src={post.image} alt={post.name} />
      </div>
      <div className="info-container">
        <strong className="mono-font">{post.name}</strong>
        <p className="gray-text light">{post.exerpt}</p>
        <span className="light-gray-text bold">{post.minRead} min read</span>
      </div>
    </div>
  )
}

export default PostCard