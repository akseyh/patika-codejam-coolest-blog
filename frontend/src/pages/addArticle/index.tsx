import { useRef } from "react";
import JoditEditor from "jodit-react";
import { Layout } from "../../components";
import useAddArticle from "./hooks/useAddArticle";

const AddArticle: React.FC = () => {
  const editor = useRef(null);
  const { content, onChange, onSubmit } = useAddArticle();

  return (
    <Layout>
      <section className="w-10/12 my-12 m-auto flex flex-col items-start gap-6">
        <div className="flex flex-col gap-2 ">
          <label className="font-bold">Baslik</label>
          <input
            type="text"
            className="px-2 rounded-sm border-2 border-gray-300 text-gray-600"
            placeholder="Baslik girin"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold">Icerik</label>
          <JoditEditor
            ref={editor}
            value={content}
            config={{ readonly: false }}
            onBlur={(newContent) => onChange(newContent)}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold">Yazi fotografi</label>
          <input type="file" />
        </div>
        <button
          onClick={onSubmit}
          className="mt-2 flex flex-1 px-12 py-3 rounded-md text-white bg-blue-500 "
        >
          Paylas
        </button>
      </section>
    </Layout>
  );
};

export default AddArticle;
