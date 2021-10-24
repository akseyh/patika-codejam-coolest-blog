import ProfileAvatar from "../../../components/avatar"
import { UserType } from "../../../types"

interface IProfileHeaderProps {
  user: UserType
}

const ProfileHeader: React.FC<IProfileHeaderProps> = (props) => {
  const {user} = props

  return <header className="my-12 flex flex-row gap-6">
    <ProfileAvatar url={user.profilePhotoUrl} title="t" />
    <div className="flex flex-col justify-center gap-2">
      <h1>{user.username}</h1>
      <span className="text-gray-500">{user.jobTitle}</span>
      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo aut, esse, quibusdam recusandae, labore quis sunt</p>
      <div>
        <ul className="flex gap-2">
          <li className="text-blue-400">{user.cvUrl}</li>
        </ul>
      </div>
    </div>
  </header>
}

export default ProfileHeader