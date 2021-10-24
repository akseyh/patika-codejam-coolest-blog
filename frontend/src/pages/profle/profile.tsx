import { useEffect, useState } from "react";
import { BlogList, Layout } from "../../components";
import ProfileHeader from "./components/header";

import { PostType, UserType } from '../../types'
import axios from "axios";

import { useParams } from 'react-router-dom'

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserType>({userId: '0', username: '', jobTitle: '', image: '', bio: '', cvUrl: '', github: ''})
  const [posts, setPosts] = useState<PostType[]>([])

  const { id } = useParams()

  useEffect(() => {
    axios.get<UserType>(`https://coolest-blog-api.herokuapp.com/profile/${id}`)
      .then(res => {
        setUser(res.data)
      })

    axios.get<PostType[]>(`https://coolest-blog-api.herokuapp.com/posts/${id}`)
      .then(res => {
        setPosts(res.data)
      })

  }, [id])

  return (
    <Layout>
      <ProfileHeader user={user} />
      <BlogList posts={posts} />
    </Layout>
  );
};

export default Profile;
