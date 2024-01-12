import BlogsList from "../components/BlogsList/BlogsList";

export default function Blogs() {
   return (
      <>
         <BlogsList
            fetch="http://localhost:1337/api/blogs?populate=*"
            titleH1="Blogs"
            className="section_container"
         />
      </>
   );
}