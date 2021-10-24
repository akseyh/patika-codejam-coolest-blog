import { Layout } from "../components";

import { useEffect, useState } from "react";
import Post from "../components/post";
import UserCard from "../components/userCard";
import { PostType, UserType } from "../types";
import axios from "axios";

const Home: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>([])
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    setTimeout(() => {
      const userPayload = [
        {
          _id: 0,
          username: 'Adem Şahin',
          jobTitle: 'Go Developer',
          profilePhotoUrl: 'https://i.ibb.co/GvXGkfR/adem.png',
          cvUrl: '',
          bio: '',
          githubLink: ''
        },
        {
          _id: 1,
          username: 'Berat Bozkurt',
          jobTitle: 'Front End Developer',
          profilePhotoUrl: 'https://i.ibb.co/njdq3Kf/berat.png',
          cvUrl: '',
          bio: '',
          githubLink: ''
        },
        {
          _id: 2,
          username: 'Kadir Zabun',
          jobTitle: 'Back End Developer',
          profilePhotoUrl: 'https://i.ibb.co/G3ZQLnF/kadir.png',
          cvUrl: '',
          bio: '',
          githubLink: ''
        },
        {
          _id: 3,
          username: 'Şems Yılmaz',
          jobTitle: 'Front End Developer',
          profilePhotoUrl: 'https://i.ibb.co/9rrX0Lk/sems.png',
          cvUrl: '',
          bio: '',
          githubLink: ''
        }
      ]

      setUsers(userPayload)

      axios.get<PostType[]>('https://coolest-blog-api.herokuapp.com/posts')
        .then(res => {
          setPosts(res.data)
        })
        .catch(err => console.log(err))

    }, 100)
  }, [])

  return (
    <Layout>
        <div className='w-full flex flex-col items-center mt-36'>
          <div className='w-11/12 flex justify-center gap-x-10 mt-8'>
            {
              users.map(user => (
                <UserCard key={user.username} user={user}/>
              ))
            }
          </div>
          <div className='w-11/12 mt-16 mb-8'>
            <span className='text-2xl font-semibold'>Son Yazılar</span>
            <div className='flex flex-col gap-y-6 mt-4'>
              {
                posts.map(post => (
                  <Post key={post._id} post={post}/>
                ))
              }
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default Home;
