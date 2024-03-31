

export default function Card(props: { title: string, description: string }) {
    return (
        <div className="max-h-[250px] rounded-lg bg-blue-500 max-w-[250px] p-10 m-4 cursor-pointer hover:bg-blue-400">
            <p className="font-bold text-lg">{props.title}</p>
            <p className="">{props.description}</p>
        </div>
    )
}