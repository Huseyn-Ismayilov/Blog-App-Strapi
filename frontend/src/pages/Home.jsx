import { Link } from "react-router-dom";
import BlogsList from "../components/BlogsList/BlogsList";
import SingleBlog from "../components/SingleBlog/SingleBlog";

export default function Home() {
   return (
      <>
         <SingleBlog />
         <BlogsList 
            grid="blogs_grid3"
            fetch="http://localhost:1337/api/blogs?populate=*"
            beginsFrom="1"
         />
         {/* <ul>
            <li>
               <Link to={`/category/react`}>React</Link>
            </li>
         </ul> */}
      </>
   );
}