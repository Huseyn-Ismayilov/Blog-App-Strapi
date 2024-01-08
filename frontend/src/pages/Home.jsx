import BlogsList from "../components/BlogsList/BlogsList";
import SingleBlog from "../components/SingleBlog/SingleBlog";

export default function Home() {
   return (
      <>
         <SingleBlog />
         <BlogsList />
      </>
   );
}