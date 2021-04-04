import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useHistory, useParams } from 'react-router';
import { Helmet } from "react-helmet";
import './style.scss';

function Post({ posts }) {

  const [post, setPost] = useState({})

  const { slug } = useParams()
  const history = useHistory()
  const { t } = useTranslation()

  useEffect(() => {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].slug === slug) {
        setPost(posts[i])
        return
      }
    }
    history.push('/home')
  }, [slug, history, posts])

  return (
    <div className="post-container">
      <Helmet>
        <title>{post.name}</title>
        <meta name='description' content={post.exerpt} />
        <meta name='robots' content='index,follow' />
        <meta name='keywords' content={post.metaKeywords} />
      </Helmet>
      <h2 className="mono-font">{post.name}</h2>
      <p className="gray-text normal-font">{post.exerpt}</p>
      <strong className="light-gray-text bold">{post.minRead} {t('minRead')}</strong>
      <img src={post.image} alt={post.name} />
      <ReactMarkdown source={post.content}/>
    </div>
  )
}

export default Post