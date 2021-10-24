import { UserType } from '../../types/index'
import { useHistory } from 'react-router-dom'
interface IUserCardProps {
    user: UserType
}

const UserCard: React.FC<IUserCardProps> = (props) => {
  const { user } = props;

  const history = useHistory()

  function handleProfile() {
    history.push(`/profile/${user.userId}`)
  }

  return (
    <div className='flex flex-col w-56 h-auto relative p-2 min-w-max' onClick={handleProfile}>
        <div className='group absolute top-0 left-0 w-full h-full z-20 flex opacity-0 hover:opacity-100 transition items-center justify-center cursor-pointer'>
            <div className='bg-gray-500 w-full h-full opacity-30' />
            <span className='z-20 opacity-100 absolute top-auto left-auto font-semibold text-xl'>Portfolyo</span>
        </div>
        <img src={user.image} alt='profile' className='h-64 w-auto rounded-lg overflow-hidden block mx-auto'/>
        <span className='font-semibold text-lg'>{user.username}</span>
        <span className='font-light text-sm'>{user.jobTitle}</span>
    </div>
  );
};

export default UserCard;
