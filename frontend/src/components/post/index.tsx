import { PostType } from '../../types/index'

import {useHistory} from 'react-router-dom'

interface IPostProps {
    post: PostType
}

const Post: React.FC<IPostProps> = (props) => {
  const { post } = props;
  const history = useHistory()

  return (
    <div className='flex flex-col'>
      <span className='font-semibold text-lg cursor-pointer' onClick={() => history.push(`/posts/${post._id}`)}>{post.title}</span>
      <span className='font-light text-xs'>{post.author}</span>
      <span>{post.text}</span>
    </div>
  )
};

export default Post;
