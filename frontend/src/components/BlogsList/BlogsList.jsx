import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import './BlogsList.css'
import ArticleCart from "../ArticleCart/ArticleCart";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function BlogsList(props) {
   const { isLoading, error, data } = useFetch(props.fetch);
   if (isLoading) return;
   if (error) return;

   // console.log(data.data[0].attributes.author.data.attributes);
   // console.log(data.data[0].attributes.categories.data[0].id);

   return (
      <section className={`blogs_list ${props.className}`}>
         <div className="container">
            <SectionTitle h1={props.titleH1} />
            <ul className={props.grid}>
               {data.data.slice(props.beginsFrom, props.Ends).map((blog, index) => (
                  <li
                     key={index}
                     className="cart"
                  >
                     <ArticleCart
                        image={`http://localhost:1337${blog.attributes.image.data[0].attributes.formats.medium.url}`}
                        title={blog.attributes.title}
                        link={`/${blog.attributes.Slug}`}
                        desc={blog.attributes.previewText}
                        tags={
                           blog.attributes.categories.data.map((item, key) => (
                              <li key={key}>
                                 <Link to={`/category/${item.attributes.Slug}`}>
                                    {item.attributes.Title}
                                 </Link>
                              </li>
                           ))
                        }
                        authorImage={`http://localhost:1337${blog.attributes.author.data.attributes.photo.data.attributes.url}`}
                        authorUsername={blog.attributes.author.data.attributes.fullname}
                        authorNickname={blog.attributes.author.data.attributes.nickname}
                     />
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}
BlogsList.defaultProps = {
   grid: "blogs_grid4",
   beginsFrom: "0"
};