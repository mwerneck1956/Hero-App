import React from 'react';

//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';


//Styled components
import { Title, SubTitle, StatisticTitle ,StatisticNumber} from '../styles/syles'



const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogStatistics(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Dialog fullWidth maxWidth="md" open={props.open} onClose={handleClose} TransitionComponent={Transition}>

                <ListItem>
                    <div className="col-12 d-flex  justify-content-center mt-3">
                        <StatisticTitle fontSize={3}>
                            {props.won ? "Congratulation! You Won" : "You Lose !"}

                        </StatisticTitle>
                    </div>
                </ListItem>
                <List>
                    <div className="col-12 d-flex justify-content-start ml-3">
                        <StatisticTitle fontSize={2.5}>
                            Statistics
                           </StatisticTitle>
                    </div>
                    <div className="col-12 d-flex justify-content-start ml-5">
                        <StatisticTitle fontSize={2}>
                            Errors : <StatisticNumber>{props.errors}</StatisticNumber>
                        </StatisticTitle>
                    </div>
                    <div className="col-12 d-flex justify-content-start ml-5">
                        <StatisticTitle fontSize={2}>
                            Successes :<StatisticNumber>{props.sucessess}</StatisticNumber>
                        </StatisticTitle>
                    </div>
                    <div className="col-12 d-flex justify-content-start ml-5">
                        <StatisticTitle fontSize={2}>
                            Points :  <StatisticNumber>{props.points}</StatisticNumber>
                        </StatisticTitle>
                    </div>
                </List>
                <ListItem button>
                    <div className= "col-12 d-flex justify-content-center ">
                        <video autoplay="true" loop ="true"  style={{ width: "100%" , maxHeight : "40" }} src={props.won ? "https://media.giphy.com/media/8vnih78ZeNTu3BOCrn/giphy.mp4" :"https://thumbs.gfycat.com/SnarlingBeautifulDoe-mobile.mp4" } type="video/mp4" className="img-fluid" />
                    </div>
                </ListItem>
                <ListItem button>
                </ListItem>


            </Dialog>
        </div>
    );
}