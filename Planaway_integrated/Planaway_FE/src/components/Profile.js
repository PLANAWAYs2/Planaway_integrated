import { useNavigate } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/userinfo");
  };
  return (
    <div className="Profile">
      <img
        src={process.env.PUBLIC_URL + "/assets/프로필.jpeg"}
        className="ProfilePicture"
      />
      <div className="ProfileInfo">
        <div className="ProfileName">최영서 님</div>
        <div className="ProfileEdit" onClick={handleProfile}>
          <img src={process.env.PUBLIC_URL + "/assets/setting.png"}></img>
          <span>프로필 편집</span>
        </div>
      </div>
    </div>
  );
};
export default Profile;
