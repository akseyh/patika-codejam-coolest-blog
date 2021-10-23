import { useEffect, useState } from "react"
import { Layout } from "../components"
import { PostType } from "../types"

const Post: React.FC = (props) => {
    const [post, setPost] = useState<PostType>({_id: 0, author: '', text: '', title: ''})

    useEffect(() => {
        const payload = {
            _id: 0,
            author: 'Şems Yılmaz',
            text: 'lorem ipsum dolor sit amet',
            title: 'lorem'
        }

        setPost(payload)
    }, [])

    return (
    <Layout>
        <div className='flex flex-col mt-32'>
            <span className='font-semibold text-3xl'>{post.title}</span>
            <span className='font-light text-xs'>{post.author}</span>
            <span className='mt-8'>{post.text}</span>
        </div>
    </Layout>
)}

export default Post