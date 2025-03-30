import logo from "../../assets/logo.svg";
import settings from "../../assets/settings.svg";
import profile from "../../assets/profile.svg";

export default function PageHeader() {
    return (
        <div className="flex justify-between items-center">
                <img src={settings} alt="" className="w-10 h-auto" />
                <img src={logo} alt="" className="w-48 h-auto" />
                <img src={profile} alt="" className="w-10 h-auto" />
        </div>
    )
}