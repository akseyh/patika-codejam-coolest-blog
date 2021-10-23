const useBlogList = () => {
  const data = [
    {
      url: "https://www.w3schools.com/images/w3lynx_200.png",
      title: "Lorem",
      date: new Date(),
      article:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eveniet vel nihil incidunt, vitae consequuntur cupiditate, voluptatum omnis quidem odio rem recusandae quam dolorem, corrupti nulla esse quia porro tempora.",
    },
    {
      url: "https://www.w3schools.com/images/w3lynx_200.png",
      title: "Loreefewm",
      date: new Date(),
      article:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eveniet vel nihil incidunt, vitae consequuntur cupiditate, voluptatum omnis quidem odio rem recusandae quam dolorem, corrupti nulla esse quia porro tempora.",
    },
  ];

  return { data };
};

export default useBlogList;
