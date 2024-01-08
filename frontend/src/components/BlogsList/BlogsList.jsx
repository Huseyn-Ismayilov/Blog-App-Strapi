import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import styles from './BlogsList.module.css'

export default function BlogsList() {
   const { isLoading, error, data } = useFetch(
      "http://localhost:1337/api/blogs?populate=*"
   );
   
   if (isLoading) return;
   if (error) return;

   return (
      <section className={styles.blogs_list}>
         <div className="container">
            <ul className={styles.grid}>
               {data.data.map(blog => (
                  <li
                     key={blog.id}
                     className={styles.cart}
                  >
                     <Link
                        to={`/blogs/${blog.id}`}
                     >
                        <div className={styles.cartImage}>
                           <img
                              src={`http://localhost:1337${blog.attributes.image.data[0].attributes.url}`}
                              alt=""
                           />
                        </div>
                        <h3 className={styles.cartTitle}>{blog.attributes.title}</h3>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}