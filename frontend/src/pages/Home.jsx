import BlogsList from "../components/BlogsList/BlogsList";
import SingleBlog from "../components/SingleArticle/SingleArticle";

export default function Home() {
   return (
      <>
         <SingleBlog />
         <BlogsList
            fetch="http://localhost:1337/api/blogs?populate=author.photo,categories,image"
            grid="blogs_grid3"
            className="section_container"
            beginsFrom="1"
            Ends="4"
            titleH1="Latest Blogs"
         />
         <BlogsList
            fetch="http://localhost:1337/api/blogs?filters[$and][0][categories][Slug][$eq]=programming&populate=author.photo,categories,image"
            grid="blogs_grid3"
            className="section_container"
            beginsFrom="1"
            Ends="4"
            titleH1="Programming"
         />
      </>
   );
}