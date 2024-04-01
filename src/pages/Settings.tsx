
export default function Settings(){
    return (<div className="">
        <div className="flex justify-between my-2 items-center ">
            <span className="">Music</span>
            <span className="">
                <span className="flex w-36 justify-between ">
                    <button className="">On</button>
                    <button className="">Off</button>
                </span>
            </span>
        </div>

        <div className="flex justify-between items-center my-2">
            <span className="">Sound Effects</span>
            <span className="">
                <span className="flex w-36 justify-between ">
                    <button className="">On</button>
                    <button className="">Off</button>
                </span>
            </span>
        </div>
    </div>)

}