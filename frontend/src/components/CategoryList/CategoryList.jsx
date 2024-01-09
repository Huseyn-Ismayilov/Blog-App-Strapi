import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import ArticleCart from "../ArticleCart/ArticleCart";
import SectionTitle from "../SectionTitle/SectionTitle";
import './CategoryList.css'

export default function CategoryList() {
    const { slug } = useParams()
    const { isLoading, error, data } = useFetch(
        `http://localhost:1337/api/blogs?filters[$and][0][categories][Slug][$eq]=${slug}&populate=*`
    );

    if (isLoading) return;
    if (error) return;

    // console.log(data);
    // console.log(slug);
    return (
        <>
            <SectionTitle
                h1={data.data[1].attributes.categories.data[0].attributes.Title}
            />
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
        </>

    )
}