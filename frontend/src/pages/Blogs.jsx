import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Blogs() {
   const { isLoading, error, data } = useFetch(
      "http://localhost:1337/api/blogs?populate=*"
   );

   if (isLoading) return;
   if (error) return;

   return (
      <div className="container">
         <div>
            <h1>Blogs</h1>
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
                  </li>
               ))}
            </ul>
         </div>
      </div>

   );
}