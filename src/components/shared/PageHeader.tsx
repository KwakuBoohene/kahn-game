import logo from "../../assets/logo.svg";
import settings from "../../assets/settings.svg";
import profile from "../../assets/profile.svg";

export default function PageHeader() {
    return (
        <div className="flex justify-between items-center w-full ">
                <span className="cursor-pointer">
                    <img src={settings} alt="" className="w-10 h-auto" />
                </span>
                 <img src={logo} alt="" className="w-48 h-auto" />

                 <span className="cursor-pointer">
                    <img src={profile} alt="" className="w-10 h-auto" />
                 </span>
        </div>
    )
}