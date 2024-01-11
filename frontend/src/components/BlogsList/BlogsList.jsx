import useFetch from "../../hooks/useFetch";
import './BlogsList.css'
import ArticleCart from "../ArticleCart/ArticleCart";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function BlogsList(props) {
   const { isLoading, error, data } = useFetch(
<<<<<<< HEAD
=======
      // "http://localhost:1337/api/blogs?populate=*"
>>>>>>> 230d3d6f8f924caa996a10b10e2bb0c5c9592267
      props.fetch
   );

   if (isLoading) return;
   if (error) return;

   return (
      <section className="blogs_list">
         <div className="container">
<<<<<<< HEAD
            <SectionTitle h1={props.sectionH1} />
            <ul className={props.grid}>
               {data.data.slice(props.beginsFrom, props.ends).map((blog, index) => (
=======
            <SectionTitle h1={props.titleH1} />
            <ul className={props.grid}>
               {data.data.slice(props.beginsFrom, props.Ends).map((blog, index) => (
>>>>>>> 230d3d6f8f924caa996a10b10e2bb0c5c9592267
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