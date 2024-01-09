import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import ArticleCart from "../ArticleCart/ArticleCart";
import './CategoryList.css'

export default function CategoryList() {
    const { slug } = useParams()
    const { isLoading, error, data } = useFetch(
        `http://localhost:1337/api/blogs?filters[$and][0][categories][Slug][$eq]=${slug}&populate=*`
    );
    // const { isLoading0, error0, data0 } = useFetch(
    //     `http://localhost:1337/api/blogs?filters[$and][0][categories][Slug][$eq]=${slug}&populate=*`
    // );

    if (isLoading) return;
    if (error) return;

    // console.log(data);
    // console.log(slug);
    return (
        <section className="category">
            <div className="container">
                <h2>{data.data[1].attributes.categories.data[0].attributes.Title}</h2>
                <div className="blogs_grid">
                    {data.data.map((blog, index) => (
                        <div
                            className="cart"
                            key={index}
                        >
                            <ArticleCart
                                image={`http://localhost:1337${blog.attributes.image.data[0].attributes.url}`}
                                title={blog.attributes.title}
                                link={`/${blog.attributes.Slug}`}
                            />
                        </div>

                    ))}
                </div>
            </div>
        </section>

    )
}