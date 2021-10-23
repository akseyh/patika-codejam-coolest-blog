const useHeader = () => {
  const menu = [
    {
      key: "homepage",
      title: "Homepage",
      url: "/",
    },
    {
      key: "profile",
      title: "Profile",
      url: "/profile",
    },
    {
      key: "logout",
      title: "Logout",
      url: "/logout",
    },
  ];


  return {menu} 
}

export default useHeader;