import styles from './SobreMim.module.css';
import PostModelo from "Componentes/PostModelo/Index";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from 'assets/fotoCorrendo2.jpeg'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá mundo, eu me chamo Matheus!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Matheus"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.
            </p>

            <p className={styles.paragrafo}>
            Eu feugiat pretium nibh ipsum consequat nisl. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Id velit ut tortor pretium viverra suspendisse. Tortor condimentum lacinia quis vel. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nulla at volutpat diam ut venenatis. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Id cursus metus aliquam eleifend mi in nulla. Varius morbi enim nunc faucibus a. Viverra accumsan in nisl nisi scelerisque eu ultrices. Faucibus et molestie ac feugiat sed lectus. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Risus at ultrices mi tempus imperdiet nulla. Id interdum velit laoreet id donec ultrices. Integer feugiat scelerisque varius morbi enim. Tristique risus nec feugiat in fermentum posuere urna. Volutpat sed cras ornare arcu dui vivamus arcu. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus.
            </p>

            <p className={styles.paragrafo}>
            In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Gravida neque convallis a cras semper auctor. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Sed vulputate mi sit amet mauris commodo. Nullam non nisi est sit amet. Orci ac auctor augue mauris augue neque gravida in. Interdum consectetur libero id faucibus. Sapien faucibus et molestie ac feugiat sed. Amet dictum sit amet justo donec enim diam vulputate ut. Pellentesque massa placerat duis ultricies lacus sed turpis. Cras sed felis eget velit.
            </p>

            <p className={styles.paragrafo}>
            Ut pharetra sit amet aliquam id diam. Cras sed felis eget velit aliquet sagittis id consectetur purus. Blandit aliquam etiam erat velit scelerisque in dictum. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Sit amet nisl suscipit adipiscing. Viverra vitae congue eu consequat ac felis donec. Magna fringilla urna porttitor rhoncus. Et malesuada fames ac turpis egestas integer eget aliquet. Malesuada fames ac turpis egestas. Ipsum consequat nisl vel pretium lectus quam id leo in. Suspendisse faucibus interdum posuere lorem ipsum dolor. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Vivamus arcu felis bibendum ut tristique et egestas quis. Gravida quis blandit turpis cursus. Morbi leo urna molestie at. Malesuada proin libero nunc consequat interdum varius. At erat pellentesque adipiscing commodo.
            </p>

            <p className={styles.paragrafo}>
            Lorem donec massa sapien faucibus. Risus nec feugiat in fermentum. Nisl tincidunt eget nullam non. Neque gravida in fermentum et sollicitudin ac orci phasellus. Aliquet lectus proin nibh nisl condimentum id venenatis. Adipiscing at in tellus integer feugiat scelerisque. Eros in cursus turpis massa tincidunt dui. Volutpat sed cras ornare arcu dui. Vel quam elementum pulvinar etiam non quam. Vel pharetra vel turpis nunc eget lorem dolor sed. Nibh mauris cursus mattis molestie a iaculis at erat. Est ante in nibh mauris cursus mattis molestie a. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
            </p>

            <p className={styles.paragrafo}>
            Amet tellus cras adipiscing enim eu turpis. Et egestas quis ipsum suspendisse ultrices. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Morbi tristique senectus et netus. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Dolor sit amet consectetur adipiscing elit. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Venenatis a condimentum vitae sapien pellentesque. Cras tincidunt lobortis feugiat vivamus. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.
            </p>

        </PostModelo>
    )
}