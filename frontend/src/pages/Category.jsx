import CategoryList from "../components/CategoryList/CategoryList";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function Category() {
   return (
      <section className="category section_container">
         <div className="container">
            <CategoryList />
         </div>
      </section>
   )
}