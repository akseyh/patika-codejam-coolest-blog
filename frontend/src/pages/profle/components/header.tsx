import ProfileAvatar from "../../../components/avatar"
import { UserType } from "../../../types"

interface IProfileHeaderProps {
  user: UserType
}

const ProfileHeader: React.FC<IProfileHeaderProps> = (props) => {
  const {user} = props

  return <header className="my-12 flex flex-row gap-6 flex-wrap">
    <ProfileAvatar url={user.image} title="t" />
    <div className="flex flex-col justify-center gap-2">
      <h1>{user.username}</h1>
      <span className="text-gray-500">{user.jobTitle}</span>
      <p className="text-gray-600">{user.bio}</p>
      <div>
        <ul className="flex flex-col gap-2">
          <li className="text-blue-400">
            <a href={user.cvUrl} target='_blank' rel='noreferrer'>{user.cvUrl}</a>
          </li>
          <li className="text-blue-400">
            <a href={user.github} target='_blank' rel='noreferrer'>{user.github}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
}

export default ProfileHeader