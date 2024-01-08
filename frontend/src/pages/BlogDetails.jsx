import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

export default function BlogDetails() {
    const { id } = useParams()
    const { isLoading, error, data } = useFetch(
        "http://localhost:1337/api/blogs/" + id + "?populate=*")
        
    if (isLoading) return;
    if (error) return;

    return (
        <div className="productDetails">
            <div className="image">
                <img
                    src={`http://localhost:1337${data.data.attributes.image.data[0].attributes.url}`}
                    width="300"
                    alt=""
                />
                <div className="title">
                    <div className="container">
                        <h1>{data.data.attributes.title}</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="details">
                    <p>{data.data.attributes.content}</p>
                </div>
            </div>

        </div>

    )
}