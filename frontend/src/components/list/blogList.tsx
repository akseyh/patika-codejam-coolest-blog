import { BlogItem } from "..";
import useBlogList from "./hooks/useBlogList";

const BlogList: React.FC = (): any => {
  const { data } = useBlogList();

  return (
    <section className="flex flex-row gap-6 flex-wrap">
      {data.map((item, index) => (
        <BlogItem {...item} />
      ))}{" "}
    </section>
  );
};

export default BlogList;
