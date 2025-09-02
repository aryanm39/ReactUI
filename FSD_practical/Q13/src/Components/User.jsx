import { useParams } from "react-router-dom";

export default function User() {
    const {userId} = useParams()
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-black-800 md:px-12 xl:px-6">
                <h1 className= "bg-gray-600 text-white text-3xl text-center p-5">User : {userId}</h1>
            </div>
        </div>
    );
}