import styles from "./Inicio.module.css";

import Posts from "json/posts.json";
import Post from "Componentes/PostCard/Index";



export default function Inicio(){
    return(
            <ul className={styles.posts}>
                {Posts.map((post) => (
                    <li key={post.id}>
                        <Post poste={post} />
                        
                    </li>
                ))}
            </ul>
    )
}