import { useState } from "react";

const useAddArticle = () => {
  const [content, setContent] = useState('');

  const onChange = (text: string) => setContent(text);

  const onSubmit = () => alert('gonder')

  return {content, onChange, onSubmit}
};

export default useAddArticle;
