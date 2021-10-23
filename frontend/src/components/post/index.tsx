import { PostType } from '../../types/index'

interface IPostProps {
    post: PostType
}

const Post: React.FC<IPostProps> = (props) => {
    const { post } = props;

  return (
    <div className='flex flex-col'>
        <span className='font-semibold text-lg'>{post.title}</span>
        <span className='font-light text-xs'>{post.author}</span>
        <span>{post.text}</span>
    </div>
  )
};

export default Post;
