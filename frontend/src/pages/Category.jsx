import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import BlogsList from '../components/BlogsList/BlogsList';

export default function Category() {
   const { slug } = useParams()

   const capitalizeText = str => str.charAt(0).toUpperCase() + str.slice(1);
   // console.log(data);
   // console.log(slug);

   return (
      <>
         <BlogsList
            fetch={`http://localhost:1337/api/blogs?filters[$and][0][categories][Slug][$eq]=${slug}&populate=author.photo,categories,image`}
            titleH1={capitalizeText(slug)}
            className="section_container"
         />
      </>
   )
}