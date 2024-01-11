import BlogsList from "../components/BlogsList/BlogsList";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function Blogs() {
   return (
      <>
         <BlogsList
            fetch="http://localhost:1337/api/blogs?populate=*"
            titleH1="All Blogs"
         />
      </>
   );
}