import React from 'react';
import { useStyle } from '../styles/screenStyle/styles';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../resources/Perfil.jpg';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneIcon from '@material-ui/icons/Phone';
import SchoolIcon from '@material-ui/icons/School';
import PublicIcon from '@material-ui/icons/Public';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Contacto = () => {

    const clases = useStyle();

    const likedin = () => {
        window.open('https://www.linkedin.com/in/jesús-enrique-cruz-gómez-628363195')
    }

    const phone = () => {
        window.open('tel:${5516502686}')
    }

    const mail = () => {
        window.open('mailto:cruzgz.jesus@gmail.com')
    }

    return (

        <div>
            <div className={clases.fondo}>

                <Grid container>
                    <Grid item xs>
                        <h2 className={clases.titulo2}>Jesús Enrique Cruz Gómez</h2>
                        <h4 className={clases.titulo2}>UX/UI Designer</h4>
                        <h4 className={clases.titulo2}>Front-End Developer</h4>
                    </Grid>

                    <Grid item xs>
                        <Avatar src={avatar} className={clases.large} />
                    </Grid>
                </Grid>

            </div>

            <div className={clases.texto}>

                <div className={clases.prueba}>
                    Soy una persona dedicada y apasionada por todo lo que hace.
                    Me adapto fácilmente a los equipos de desarrollo gracias a mi
                    personalidad dinámica y activa.
                </div>

                <Link href="https://drive.google.com/file/d/1J1bWnXoPPisxZIfmn2nLmo-l7E_Fxy4z/view?usp=sharing" target="_blank">
                    <h3>C.V.</h3>
                </Link>

            </div>

            <div className={clases.prueba}>
                <Paper elevation={3} className={clases.texto}>
                    <p>
                        <span style={{ color: '#00aef2', fontWeight: "bold", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SchoolIcon />&nbsp;Escuela:&nbsp;
                        </span>
                        Escuela Superior de Cómputo.
                    </p>
                    <p>
                        <span style={{ color: '#00aef2', fontWeight: "bold", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <LocationOnIcon />&nbsp;Ubicación:&nbsp;
                        </span>
                        Ciudad de México, Gustavo A. Madero.
                    </p>
                    <p>
                        <span style={{ color: '#00aef2', fontWeight: "bold", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <PublicIcon />&nbsp;Idiomas:&nbsp;
                        </span>
                        Español (nativo), italiano (A1), inglés (C1).
                    </p>

                </Paper>
            </div>

            <div className={clases.prueba2}>
                <Paper elevation={3} className={clases.texto}>
                    <IconButton className={clases.colour} size="large" onClick={likedin}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton className={clases.colour} size="large" onClick={mail}>
                        <ContactMailIcon />
                    </IconButton>
                    <IconButton className={clases.colour} size="large" onClick={phone}>
                        <PhoneIcon />
                    </IconButton>
                </Paper>
            </div>

        </div>

    )

}

export default Contacto;
