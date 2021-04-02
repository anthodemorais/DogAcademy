import { useEffect } from 'react';
import PostCard from '../../components/PostCard';
import './style.scss';
import posts from '../../posts';

function Home() {

  useEffect(() => {
  })

  return (
    <div className="home">
      <h1>The best place to learn the science, the proven methods and tips for dog training</h1>
      <div className="posts-container">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Home