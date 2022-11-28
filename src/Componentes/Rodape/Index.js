import Styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg"

export default function Rodape(){
    return (
        <footer className={Styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido por Matheus Gomes, com a plataforma Alura.com.br
        </footer>
        
       
    )
}