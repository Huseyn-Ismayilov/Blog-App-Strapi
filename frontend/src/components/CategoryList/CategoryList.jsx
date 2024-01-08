import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function CategoryList() {
    const { slug } = useParams()
    const { isLoading, error, data } = useFetch(
        `http://localhost:1337/api/blogs?filters[$and][0][category][Slug][$eq]=${slug}&populate=*`
    );

    if (isLoading) return;
    if (error) return;

    // console.log(data);
    // console.log(slug);
    return (
        <section className="category">
            <div className="container">
                <div>
                    <h2>Kategoriler</h2>

                    <h2>{data.data[0].id}</h2>
                    <ul>
                        {data.data.map(category => (
                            <li key={category.id}>
                                <Link
                                    to={`/categories/${category.slug}`}
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    )
}