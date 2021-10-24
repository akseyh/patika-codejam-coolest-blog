import axios from "axios"
import { useEffect, useState } from "react"
import { Layout } from "../components"
import { PostType } from "../types"
import { useParams } from 'react-router-dom'

const Post: React.FC = (props) => {
    const [post, setPost] = useState<PostType>({_id: 0, userName: '', text: '', title: ''})

    const { id } = useParams()

    useEffect(() => {
        axios.get<PostType[]>(`https://coolest-blog-api.herokuapp.com/posts`)
            .then(res => {
                const payload = res.data.find(el => el._id === id)
                const _post = {
                    _id: payload?._id || 0,
                    userName: payload?.userName || '',
                    text: payload?.text || '',
                    title: payload?.title || ''
                }
                setPost(_post)
            })

    }, [])

    return (
    <Layout>
        <div className='flex flex-col mt-32'>
            <span className='font-semibold text-3xl'>{post.title}</span>
            <span className='font-light text-xs'>{post.userName}</span>
            <span className='mt-8'>{post.text}</span>
        </div>
    </Layout>
)}

export default Post