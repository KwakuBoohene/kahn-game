import logo from "../../assets/logo.svg";
import settings from "../../assets/icons/settings.svg";
import profile from "../../assets/icons/profile.svg";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  showSettings?: boolean;
  showProfile?: boolean;
}

export default function PageHeader({
  showSettings = true,
  showProfile = true,
}: PageHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-full">
      <span
        className={`w-10 ${showSettings ? "cursor-pointer" : "invisible"}`}
        onClick={showSettings ? () => navigate("/settings") : undefined}
      >
        <img src={settings} alt="" className="w-10 h-auto" />
      </span>
      <span className="cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="Kaneho" className="w-48 h-auto" />
      </span>
      <span
        className={`w-10 ${showProfile ? "cursor-pointer" : "invisible"}`}
        onClick={showProfile ? () => navigate("/login") : undefined}
      >
        <img src={profile} alt="" className="w-10 h-auto" />
      </span>
    </div>
  );
}
