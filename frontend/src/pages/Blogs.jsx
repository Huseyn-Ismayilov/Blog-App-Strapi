import useFetch from "../hooks/useFetch";
import BlogsList from "../components/BlogsList/BlogsList";

export default function Blogs() {
   return (
      <>
         <div className="container">
            <h1>Blogs</h1>
         </div>
         <BlogsList />
      </>
   );
}