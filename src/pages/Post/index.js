import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useHistory, useParams } from 'react-router';
import posts from '../../posts';
import './style.scss';

function Post() {

  const [post, setPost] = useState({})

  const { slug } = useParams()
  const history = useHistory()

  useEffect(() => {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].slug === slug) {
        setPost(posts[i])
        return
      }
    }
    history.push('/home')
  }, [slug, history])

  return (
    <div className="post-container">
      <h2 className="mono-font">{post.name}</h2>
      <p className="gray-text normal-font">{post.exerpt}</p>
      <strong className="light-gray-text bold">{post.minRead} min read</strong>
      <img src={post.image} alt={post.name} />
      <ReactMarkdown source={post.content}/>
    </div>
  )
}

export default Post