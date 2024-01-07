import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Home() {
    const { isLoading, error, data } = useFetch(
        "http://localhost:1337/api/blogs?populate=*"
    );

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    console.log(data);

    return (
        <div className="container">
            <div>
                {/* <h1>{data.data[0].id}asd</h1> */}
                <ul className="blogs">

                    {data.data.map(blog => (
                        <li
                            key={blog.id}
                        >
                            <Link
                                to={`/blogs/${blog.id}`}
                                className="image"
                            >
                                <h1>{blog.attributes.title}</h1>

                                <img
                                    src={`http://localhost:1337${blog.attributes.image.data[0].attributes.url}`}
                                    alt=""
                                />
                            </Link>
                            {/* <Link to={`/blogs/${blog.id}`}>
                            <h2 className="name">{blog.attributes.Name}</h2>
                        </Link>
                        <h4 className="price">{blog.attributes.Price} <sup>$</sup></h4>
                        <p>{blog.attributes.Details}</p> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}