import { Link } from "react-router-dom";
import './ArticleCart.css'
import Author from "./Author/Author";

export default function ArticleCart(props) {

   return (
      <div
         className={`ArticleCart ${props.className}`}
      >
         <Link
            to={props.link}
            className="image"
         >
            <img
               src={props.image}
               alt=""
            />
         </Link>
         <div className="details">
            <Link
               to={props.link}
            >
               <h3 className="title">{props.title}</h3>
            </Link>
            <p className="desc">
               {props.desc}
            </p>
            <ul className="category_tags">
               {props.tags}
            </ul>
            <Author 
               authorImage={props.authorImage}
               authorUsername={props.authorUsername}
               authorNickname={props.authorNickname}
            />
         </div>

      </div>
   )
}

ArticleCart.defaultProps = {
   className: ""
}