import BlogDetails from "../components/BlogDetails/BlogDetails"
import BlogsList from "../components/BlogsList/BlogsList"

export default function BlogDetailsPage() {
    return (
        <>
            <BlogDetails />
            <BlogsList
                fetch="http://localhost:1337/api/blogs?populate=author.photo,categories,image"
                className="section_container"
                beginsFrom="0"
                Ends="4"
                titleH1="Latest Blogs"
            />
        </>
    )
}