import axios from "axios"
import { useEffect, useState } from "react"
import { Layout } from "../components"
import { PostType } from "../types"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Post: React.FC = (props) => {
    const [post, setPost] = useState<PostType>({_id: '', userName: '', text: '', title: '', userId: '', createdDate: new Date()})

    const { id } = useParams()

    useEffect(() => {
        axios.get<PostType[]>(`https://coolest-blog-api.herokuapp.com/posts`)
            .then(res => {
                const payload = res.data.find(el => el._id === id)
                const _post = {
                    _id: payload?._id || '',
                    userName: payload?.userName || '',
                    text: payload?.text || '',
                    title: payload?.title || '',
                    createdDate: payload?.createdDate || new Date(),
                    userId: payload?.userId || ''
                }
                setPost(_post)
            })

    }, [id])

    return (
    <Layout>
        <div className='flex flex-col mt-32'>
            <span className='font-semibold text-3xl'>{post.title}</span>
            <Link to={`/profile/${post.userId}`}>
                <span className='font-light text-lg hover:text-blue-100 transition'>{post.userName}</span>
            </Link>
            <span className='mt-8'>{post.text}</span>
        </div>
    </Layout>
)}

export default Post