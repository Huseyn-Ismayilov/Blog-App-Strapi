import BlogsList from "../components/BlogsList/BlogsList";
import SingleBlog from "../components/SingleBlog/SingleBlog";

export default function Home() {
   return (
      <>
         <SingleBlog />
         <BlogsList
            fetch="http://localhost:1337/api/blogs?populate=*"
            grid="blogs_grid3"
            className="section_container"
            beginsFrom="1"
         />
      </>
   );
}