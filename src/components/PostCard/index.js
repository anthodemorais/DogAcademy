import './style.scss';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <div className="img-container">
        <img src={post.image} alt={post.name} />
      </div>
      <div className="info-container">
        <strong className="mono-font">{post.name}</strong>
        <p>{post.exerpt}</p>
        <span>{post.minRead} min read</span>
      </div>
    </div>
  )
}

export default PostCard