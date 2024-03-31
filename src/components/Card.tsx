import { useNavigate } from "react-router-dom"

export default function Card(props: { title: string, description: string ,routing?:string }) {
    const navigate = useNavigate();

    return (
        <div onClick={()=>{ navigate(props.routing||'')}} className="max-h-[250px] rounded-lg bg-blue-500 max-w-[250px] p-10 m-4 cursor-pointer hover:bg-blue-400">
            <p className="font-bold text-lg">{props.title}</p>
            <p className="">{props.description}</p>
        </div>
    )
}