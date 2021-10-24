import moment from "moment";
import { PostType } from "../../types";
import { useHistory } from 'react-router-dom'

interface BIProps {
  post: PostType
}

const BlogItem: React.FC<BIProps> = (props) => {
  const { post } = props
  
  const history = useHistory()

  function handleClick() {
    history.push(`/posts/${post._id}`)
  }

  return (
    <article className="flex flex-col w-4/12 gap-2 cursor-pointer" onClick={handleClick}>
      <span className="text-gray-600">
        {moment(post.createdDate).format("DD MMMM YYYY")}
      </span>
      <h3 className="text-xl text-gray-800">{post.title}</h3>
      <p className="text-gray-600">{post.text.slice(0, 150)}</p>
    </article>
  );
};

export default BlogItem;
