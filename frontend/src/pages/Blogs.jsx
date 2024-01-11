import BlogsList from "../components/BlogsList/BlogsList";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function Blogs() {
   return (
      <>
         <section className="blogs section_container">
            <div className="container">
               <SectionTitle
                  h1="Blogs"
               />
               <BlogsList
                  fetch="http://localhost:1337/api/blogs?populate=*"
               />
            </div>
         </section>
      </>
   );
}