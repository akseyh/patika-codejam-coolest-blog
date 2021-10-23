import { BlogList, Layout } from "../../components";
import ProfileHeader from "./components/header";

const Profile: React.FC = () => {
  return (
    <Layout>
      <ProfileHeader />
      <BlogList />
    </Layout>
  );
};

export default Profile;
