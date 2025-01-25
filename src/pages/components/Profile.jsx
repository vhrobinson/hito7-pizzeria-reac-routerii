import { Navigate } from "react-router-dom"
import { useUser } from "../../context/UserContext"
const Profile = () => {
const { token } = useUser()
if (token === false) {
    return <Navigate to = '/login' />
}else
  return (
    <div>
      Profile
    </div>
  )
}

export default Profile
