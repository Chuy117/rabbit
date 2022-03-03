import { makeStyles } from "@material-ui/core/styles";
import wave from '../../resources/wave.svg';


const useStyle = makeStyles({

    //Home

    logos: {
        margin: 'auto',
        display: 'block',
        marginTop: '2%'
    },

    titulo: {
        color: '#00aef2',
        textAlign: 'center'
    },

    button: {
        padding: '1%',
        textAlign: 'center',
        color: '#00aef2',
        boxShadow: '1px 2px 1px #9E9E9E',
        width: '14vh',
        height: '5vh'
    },

    root: {
        flexGrow: 1,
        alignSelf: 'center',
        justifyItems: 'center',
        display: 'grid',
        marginBottom: 25
    },

    prueba: {
        padding: 2,
        margin: 'auto',
        maxWidth: 500,
    },

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    paper: {
        border: '2px solid #000',
        boxShadow: 5,
        padding: 2,
        backgroundColor: '#FFF'
    },

    alinear: {
        alignSelf: 'center',
        display: 'contents'
    },

    //Contacto

    fondo:{
        width: '100%',
        backgroundImage: `url(${wave})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no repeat',
    },

    large: {
        width: '14rem',
        height: '14rem',
        marginTop: '1%',
        margin: 'auto'
    },

    titulo2: {
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    texto:{
        textAlign: 'center',
        marginTop: 30,
    },

    prueba2: {
        padding: 5,
        margin: 'auto',
        maxWidth: 160,
    },

    colour:{
        color: '#00aef2'
    },

})

export {

    useStyle

}