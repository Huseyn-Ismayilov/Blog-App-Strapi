import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import styles from './SingleBlog.module.css'
import BlogsList from "../BlogsList/BlogsList";

export default function SingleBlog() {
   const { isLoading, error, data } = useFetch(
      "http://localhost:1337/api/blogs?populate=*"
   );

   if (isLoading) return;
   if (error) return;

   const selectedBlog = data.data[0];

   return (
      <>
         <section className={styles.single_blog}>
            <div className="container">
               <div key={selectedBlog.id} className={styles.singleCart}>
                  <Link to={`/blogs/${selectedBlog.attributes.Slug}`} className={styles.image}>
                     <img
                        src={`http://localhost:1337${selectedBlog.attributes.image.data[0].attributes.url}`}
                        alt=""
                     />
                  </Link>
                  <div className={styles.details}>
                     <Link to={`/blogs/${selectedBlog.id}`}>
                        <h2 className={styles.title}>{selectedBlog.attributes.title}</h2>
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}