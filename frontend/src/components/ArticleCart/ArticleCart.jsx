import { Link } from "react-router-dom";
import './ArticleCart.css'

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
            <div className="author">
               <div className="photo">
                  <img src={props.authorImage} alt="" />
               </div>
               <div>
                  <span className="username">{props.authorUsername}</span>
                  <span className="nickname">@{props.authorNickname}</span>
               </div>
            </div>
         </div>

      </div>
   )
}

ArticleCart.defaultProps = {
   className: ""
}