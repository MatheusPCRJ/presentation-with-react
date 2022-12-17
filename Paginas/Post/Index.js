import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "Componentes/PostModelo/Index";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";
import styles from "./Post.module.css";
import NaoEncontrada from "Paginas/NaoEncontrada/Index";
import PaginaPadrao from "Componentes/PaginaPadrao/Index";
import PostCard from "Componentes/PostCard/Index";


export default function Post() {


    const parametro = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametro.id);
    })

    if (!post) {
        return (
            <NaoEncontrada />
        )
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametro.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <>
            <PaginaPadrao>
                <PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >

                    <div className="post-markdown-container">
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>

                    <h2 className={styles.tituloOutrosPosts}>
                        Outros posts que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard poste={post} />

                            </li>
                            
                        ))}
                    </ul>

                </PostModelo>
            </PaginaPadrao>
        </>

    )
}