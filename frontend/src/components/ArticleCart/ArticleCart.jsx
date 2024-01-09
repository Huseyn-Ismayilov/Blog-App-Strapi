import { Link } from "react-router-dom";
import './ArticleCart.css'

export default function ArticleCart(props) {

   return (
      <div
         className="ArticleCart"
         key={props.key}
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
               className="image"
            >
               <h3 className="title">{props.title}</h3>
            </Link>
            <ul className="category_tags">
               <li>
                  <Link>{props.tag}</Link>
               </li>
            </ul>
         </div>

      </div>
   )
}
