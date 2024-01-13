import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import Markdown from 'markdown-to-jsx'
import './BlogDetails.css'
import BlogsList from "../BlogsList/BlogsList";

export default function BlogDetails() {
    const { slug } = useParams()
    const { isLoading, error, data } = useFetch(
        `http://localhost:1337/api/blogs?filters[$and][0][Slug][$eq]=${slug}&populate=*`)

    if (isLoading) return;
    if (error) return;

    console.log(slug);
    console.log(data.data[0]);

    return (
        <>
            <div className="blog_details">
                <div className="blog_image">
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
                <div className="blog_content">
                    <div className="container">
                        <div className="details">
                            <Markdown>{data.data[0].attributes.content}</Markdown>
                        </div>
                    </div>
                </div>
            </div>
            <BlogsList
                fetch="http://localhost:1337/api/blogs?populate=*"
                grid="blogs_grid3"
                className="section_container"
                beginsFrom="1"
                titleH1="Latest Blogs"
            />
        </>


    )
}