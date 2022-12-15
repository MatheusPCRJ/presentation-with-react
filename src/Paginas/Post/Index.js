import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "Componentes/PostModelo/Index";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";
import NaoEncontrada from "Paginas/NaoEncontrada/Index";

export default function Post() {


    const parametro = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametro.id);
    })
    
    if(!post){
        return(
            <NaoEncontrada/>
        )
    }

    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >

            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>


        </PostModelo>

    )
}