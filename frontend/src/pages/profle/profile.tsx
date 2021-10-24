import { useEffect, useState } from "react";
import { BlogList, Layout } from "../../components";
import ProfileHeader from "./components/header";

import { UserType } from '../../types'
import axios from "axios";

import { useParams } from 'react-router-dom'

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserType>({_id: '0', username: '', jobTitle: '', profilePhotoUrl: '', bio: '', cvUrl: '', githubLink: ''})

  const { id } = useParams()

  useEffect(() => {
    const payload = {
      _id: '0',
      username: 'Berat Bozkurt',
      jobTitle: 'Sr. Master Slide Rider',
      profilePhotoUrl: 'https://pbs.twimg.com/profile_images/1427998418304180227/fRwxt56__400x400.jpg',
      cvUrl: 'https://berat.github.io/cv',
      bio: '',
      githubLink: ''
    }

    axios.get<UserType>('https://coolest-blog-api.herokuapp.com/profile', {
      params: {
        userId: id
      }
    })
      .then(res => {
        console.log(res)
      })

    setUser(payload)
  }, [])

  return (
    <Layout>
      <ProfileHeader user={user} />
      <BlogList />
    </Layout>
  );
};

export default Profile;
