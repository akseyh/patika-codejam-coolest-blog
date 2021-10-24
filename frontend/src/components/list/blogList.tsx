import { BlogItem } from "..";
import { PostType } from "../../types";

interface IBlogListProps {
  posts: PostType[]
}

const BlogList: React.FC<IBlogListProps> = (props): any => {
  const { posts } = props

  return (
    <div className='flex flex-col gap-y-4 mt-16'>
      <span className='text-3xl font-semibold'>Son Yazılar</span>
      <section className="flex flex-row gap-6 flex-wrap mb-32">
        {
          posts.map((post, index) => (
            <BlogItem key={post._id} post={post}/>
          ))
        }{" "}
      </section>
    </div>
  );
};

export default BlogList;
