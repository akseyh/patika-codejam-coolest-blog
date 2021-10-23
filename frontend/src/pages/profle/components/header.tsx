import ProfileAvatar from "../../../components/avatar"

const ProfileHeader: React.FC = () => {
  return <header className="my-12 flex flex-row gap-6">
    <ProfileAvatar url="https://pbs.twimg.com/profile_images/1427998418304180227/fRwxt56__400x400.jpg" title="t" />
    <div className="flex flex-col justify-center gap-2">
      <h1>Berat Bozkurt</h1>
      <span className="text-gray-500">Sr. Master Slide Rider</span>
      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo aut, esse, quibusdam recusandae, labore quis sunt </p>
      <div>
        <ul className="flex gap-2">
          <li className="text-blue-400">
          https://berat.github.io/cv
          </li>
        </ul>
      </div>
    </div>
  </header>
}

export default ProfileHeader