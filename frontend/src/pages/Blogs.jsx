import BlogsList from "../components/BlogsList/BlogsList";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function Blogs() {
   return (
      <>
<<<<<<< HEAD
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
=======
         <BlogsList
            fetch="http://localhost:1337/api/blogs?populate=*"
            titleH1="All Blogs"
         />
>>>>>>> 230d3d6f8f924caa996a10b10e2bb0c5c9592267
      </>
   );
}