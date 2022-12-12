import Styles from "./Post.module.css";


export default function Post({ poste }){
    return (
        <div className={Styles.post}>
            <img 
                className={Styles.capa}
                src={`/assets/posts/${poste.id}/capa.png`}
                alt="Imagem de capa do post"
            />

            <h2 className={Styles.titulo}>{poste.titulo}</h2>

            <button className={Styles.botaoLer}>Ler</button>
        </div>
    )
}