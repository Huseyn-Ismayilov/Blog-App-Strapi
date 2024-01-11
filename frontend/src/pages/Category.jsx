import { useParams } from "react-router-dom"
import BlogsList from "../components/BlogsList/BlogsList"

export default function Category() {
   const { slug } = useParams()
   return (
      <section className="category section_container">
         <div className="container">
            <BlogsList
               sectionH1={slug}
               fetch={`http://localhost:1337/api/blogs?filters[$and][0][categories][Slug][$eq]=${slug}&populate=*`}
           />
         </div>
      </section>
   )
}