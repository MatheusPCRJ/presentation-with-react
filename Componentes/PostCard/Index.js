import BotaoPrincipal from "Componentes/BotaoPrincipal/Index";
import { Link } from "react-router-dom";
import Styles from "./Post.module.css";

export default function PostCard({ poste }) {
    return (

        <Link to={`/posts/${poste.id}`}>
            <div className={Styles.post}>
                <img
                    className={Styles.capa}
                    src={`/assets/posts/${poste.id}/capa.png`}
                    alt="Imagem de capa do post"
                />

                <h2 className={Styles.titulo}>{poste.titulo}</h2>

                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}