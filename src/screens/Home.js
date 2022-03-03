import React from 'react';
import logo from '../resources/logo.png';
import { useStyle } from '../styles/screenStyle/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BackspaceIcon from '@material-ui/icons/Backspace';
import TextField from '@material-ui/core/TextField';
import InfoIcon from '@material-ui/icons/Info';
import { IconButton } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Alert, AlertTitle } from '@material-ui/lab';

let pin = Math.floor(1000 + Math.random() * 9000);
let codigo = [];
let intentos = 0;

const Home = () => {

    const clases = useStyle();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openModal, setOpenModal] = React.useState(false);
    const [openModal2, setOpenModal2] = React.useState(false);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [numeros, setnumeros] = React.useState();

    const handleClick = (event) => {

        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {

        setAnchorEl(null);

    };

    const handleCloseModal = () => {

        setOpenModal(false);


        codigo.splice(0, 4)

        if (intentos == 3) {

            setTimeout(() => { setOpenModal2(false); intentos = 0; }, 30000);

        } else {

            setOpenModal2(false);
            
        }

    };

    const handleOpen = () => {

        setOpenModal(true);
        intentos = 0;

    };

    const handleOpen2 = () => {

        setOpenModal2(true);

    };

    const enviar = (event) => {

        if (event.currentTarget.value === 'e') {
            codigo.pop()
        }

        if (codigo.length <= 3 && event.currentTarget.value !== 'e') {
            codigo.push(event.currentTarget.value);
        }

        setnumeros([
            event.currentTarget.value
        ]);

        if (codigo.length === 4) {
            verificarpin()
        }

    }

    const verificarpin = () => {

        let pinComparar = ''
        let i = 0;
        let pinVerificar = pin.toString();

        for (i; i < codigo.length; i++) {

            pinComparar += codigo[i];

        }

        if (pinComparar === pinVerificar) {

            handleOpen()

        } else {

            handleOpen2()

            if (intentos <= 3) {

                intentos += 1;

            }

        }

    }

    return (

        <div>

            <img src={logo} className={clases.logos} />

            <h2 className={clases.titulo}>Por favor antes de continuar verifica tu pin</h2>

            <Modal
                className={clases.modal}
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <div className={clases.paper}>
                        <Alert severity="success">
                            <AlertTitle>¡Éxito!</AlertTitle>
                            Pin verificado, ya puedes acceder a la app.
                        </Alert>
                    </div>
                </Fade>
            </Modal>

            <Modal
                className={clases.modal}
                open={openModal2}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal2}>
                    <div className={clases.paper}>
                        <Alert severity="error">
                            <AlertTitle>¡Error!</AlertTitle>
                            {intentos == 3 ?
                                <div>
                                    <h2>Bloqueado</h2>
                                    <p>Espera 30 segundos</p>
                                </div>
                                : <p>El pin no coincide, vuelve a intentarlo.
                                    Te quedan {3 - intentos}</p>}
                        </Alert>
                    </div>
                </Fade>
            </Modal>

            <div className={clases.root}>
                <div className={clases.prueba}>

                    <Grid container spacing={2}>
                        <Grid item xs>
                            <TextField
                                id="standard-password-input"
                                type="password"
                                inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: 50 }, readOnly: true, }}
                                value={codigo[0] ? codigo[0] : ''}
                                onChange={enviar, handleClose}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                id="standard-password-input"
                                type="password"
                                inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: 50 }, readOnly: true, }}
                                value={codigo[1] ? codigo[1] : ''}
                                onChange={enviar}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                id="standard-password-input"
                                type="password"
                                inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: 50 }, readOnly: true, }}
                                value={codigo[2] ? codigo[2] : ''}
                                onChange={enviar}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                id="standard-password-input"
                                type="text"
                                inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: 50 }, readOnly: true, }}
                                value={codigo[3] ? codigo[3] : ''}
                                onChange={enviar}
                            />
                        </Grid>
                        <Grid item xs className={clases.alinear}>
                            <IconButton onClick={handleClick}>
                                <InfoIcon fontSize="small" />
                            </IconButton>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Typography>Pin de prueba: {pin}</Typography>
                            </Popover>

                        </Grid>
                    </Grid>

                </div>
            </div>

            <div className={clases.root}>
                <div className={clases.prueba}>

                    <Grid container spacing={2}>
                        <Grid item xs>
                            <Button className={clases.button} onClick={enviar} value='1'>
                                1
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button className={clases.button} onClick={enviar} value='2'>
                                2
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button className={clases.button} onClick={enviar} value='3'>
                                3
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs>
                            <Button className={clases.button} onClick={enviar} value='4'>
                                4
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button className={clases.button} onClick={enviar} value='5'>
                                5
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button className={clases.button} onClick={enviar} value='6'>
                                6
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs>
                            <Button className={clases.button} onClick={enviar} value='7'>
                                7
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button className={clases.button} onClick={enviar} value='8'>
                                8
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button className={clases.button} onClick={enviar} value='9'>
                                9
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs>

                        </Grid>
                        <Grid item xs>
                            <Button className={clases.button} onClick={enviar} value='0'>
                                0
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button className={clases.button} endIcon={<BackspaceIcon />} onClick={enviar} value='e'>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </div >

    )

}

export default Home;
