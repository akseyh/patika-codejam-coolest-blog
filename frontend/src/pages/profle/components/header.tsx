import ProfileAvatar from "../../../components/avatar"
import { UserType } from "../../../types"

interface IProfileHeaderProps {
  user: UserType
}

const ProfileHeader: React.FC<IProfileHeaderProps> = (props) => {
  const {user} = props

  return <header className="my-12 flex flex-row gap-6">
    <ProfileAvatar url={user.image} title="t" />
    <div className="flex flex-col justify-center gap-2">
      <h1>{user.username}</h1>
      <span className="text-gray-500">{user.jobTitle}</span>
      <p className="text-gray-600">{user.bio}</p>
      <div>
        <ul className="flex flex-col gap-2">
          <li className="text-blue-400">{user.cvUrl}</li>
          <li className="text-blue-400">{user.github}</li>
        </ul>
      </div>
    </div>
  </header>
}

export default ProfileHeader