interface PAProps {
  url: string;
  title?: string;
}

const ProfileAvatar: React.FC<PAProps> = ({ url, title }) => {
  return <img className="w-60 h-52 rounded-2xl " src={url} alt={title} />;
};

export default ProfileAvatar;
