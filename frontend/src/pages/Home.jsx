import BlogsList from "../components/BlogsList/BlogsList";
import SingleBlog from "../components/SingleArticle/SingleBlog";

export default function Home() {
   return (
      <>
         <SingleBlog />
         <BlogsList
            grid="blogs_grid3"
<<<<<<< HEAD
            fetch="http://localhost:1337/api/blogs?populate=*"
            beginsFrom="1"
=======
            beginsFrom="1"
            Ends="4"
            titleH1="Latest Blogs"
            fetch="http://localhost:1337/api/blogs?populate=*"
>>>>>>> 230d3d6f8f924caa996a10b10e2bb0c5c9592267
         />
         <BlogsList
            grid="blogs_grid3"
            titleH1="Technology"
            fetch="http://localhost:1337/api/blogs?filters[$and][0][categories][Slug][$eq]=technology&populate=*"
       />
         {/* <ul>
            <li>
               <Link to={`/category/react`}>React</Link>
            </li>
         </ul> */}
      </>
   );
}