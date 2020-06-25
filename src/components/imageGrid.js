import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Dialog from "@material-ui/core/Dialog";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const ImageGrid = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            marginBottom: 30,
        },
        image: {
          cursor: 'pointer',
        },
        modalImage: {
            width: '100%',
        },
        gridList: {
            width: '100%',
            // height: 600,
        },
        topLeftTile: {
            borderTopLeftRadius: 15,
        },
        topRightTile: {
            borderTopRightRadius: 15,
        },
        bottomLeftTile: {
            borderBottomLeftRadius: 15,
        },
        bottomRightTile: {
            borderBottomRightRadius: 15,
        },
        modal: {
            position: 'relative'
        },
        leftNavContainer: {
            height: '100%',
            color: "white",
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 20,
        },
        navIcon: {
            
        }
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false)
    };

    const handleOpen = () => {
        setOpen(true)
    };

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    return (
        <div className={classes.root} id='image-grid'>
            <GridList cellHeight={160} className={classes.gridList} cols={6} rows={2}>
                <GridListTile cols={4} rows={2} classes={{tile: classes.topLeftTile}}>
                    <img className={classes.image} onClick={handleOpen} src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={2} rows={2} classes={{tile: classes.topRightTile}}>
                    <img className={classes.image} onClick={handleOpen} src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={3} rows={1}>
                    <img className={classes.image} onClick={handleOpen} src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={3} rows={1}>
                    <img className={classes.image} onClick={handleOpen} src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={2} rows={1} classes={{tile: classes.bottomLeftTile}}>
                    <img className={classes.image} onClick={handleOpen} src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={2} rows={1}>
                    <img className={classes.image} onClick={handleOpen} src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={2} rows={1} classes={{tile: classes.bottomRightTile}}>
                    <img className={classes.image} onClick={handleOpen} src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
            </GridList>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth={'lg'}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className={classes.modal}
                >
                        <img className={classes.modalImage} onClick={handleOpen} src="https://source.unsplash.com/random" alt="house-picture" />
                        <div className={classes.leftNavContainer}>
                            <ArrowBackIosIcon className={classes.navIcon}/>
                        </div>
                </Dialog>
            </div>
        </div>
    );
}

export default ImageGrid;
