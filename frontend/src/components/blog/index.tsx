import moment from "moment";

interface BIProps {
  url?: string;
  title: string;
  date: Date;
  article: string;
}

const BlogItem: React.FC<BIProps> = ({ url, date, title, article }) => {
  return (
    <article className="flex flex-col w-4/12 gap-2">
      {url && <img className="h-auto w-8/12" src={url} alt={title} />}
      <span className="text-gray-600">
        {moment(date).format("DD MMMM YYYY")}
      </span>
      <h3 className="text-xl text-gray-800">{title}</h3>
      <p className="text-gray-600">{article.slice(0, 150)}</p>
    </article>
  );
};

export default BlogItem;
