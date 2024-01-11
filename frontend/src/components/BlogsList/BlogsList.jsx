import useFetch from "../../hooks/useFetch";
import './BlogsList.css'
import ArticleCart from "../ArticleCart/ArticleCart";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function BlogsList(props) {
   const { isLoading, error, data } = useFetch(
      // "http://localhost:1337/api/blogs?populate=*"
      props.fetch
   );

   if (isLoading) return;
   if (error) return;

   return (
      <section className="blogs_list">
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