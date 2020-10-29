import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.default,
        border: '3px solid #003952',
        borderRadius: '10px',
        boxShadow: theme.shadows[5],
        width: '600px',
        height: '100px',
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal(props) {
    const { open, onClose, link } = props;
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Container>
                        <h2 id="transition-modal-title">
                            Link para o download da sua imagem:
                        </h2>
                        <a
                            download={link}
                            href={link}
                            id="transition-modal-description"
                        >
                            {link}
                        </a>
                    </Container>
                </Fade>
            </Modal>
        </div>
    );
}
