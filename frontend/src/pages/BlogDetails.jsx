import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

export default function BlogDetails() {
    const { slug } = useParams()
    const { isLoading, error, data } = useFetch(
        `http://localhost:1337/api/blogs?filters[$and][0][Slug][$eq]=${slug}&populate=*`)

    if (isLoading) return;
    if (error) return;
    
    console.log(slug);
    console.log(data.data[0]);

    return (
        <div className="productDetails">
            <div className="image">
                <img
                    src={`http://localhost:1337${data.data[0].attributes.image.data[0].attributes.url}`}
                    width="300"
                    alt=""
                />
                <div className="title">
                    <div className="container">
                        <h1>{data.data[0].attributes.title}</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="details">
                    <p>{data.data[0].attributes.content}</p>
                </div>
            </div>

        </div>

    )
}