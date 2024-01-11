import BlogsList from "../components/BlogsList/BlogsList";
import SingleBlog from "../components/SingleArticle/SingleBlog";

export default function Home() {
   return (
      <>
         <SingleBlog />
         <BlogsList
            grid="blogs_grid3"
            beginsFrom="1"
            Ends="4"
            titleH1="Latest Blogs"
            fetch="http://localhost:1337/api/blogs?populate=*"
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