import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Dialog from "@material-ui/core/Dialog";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


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
        navContainer: {
            height: '100%',
            color: "white",
            position: 'absolute',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        iconContainer: {
            height: 45,
            width: 45,
            borderRadius: 50,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            transition: '0.2s linear',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
            },
            [theme.breakpoints.down('sm')]: {
                height: 35,
                width: 35,
            },
        },
        navIcon: {
            height: 40,
            width: 40,
            color: 'white',
            cursor: 'pointer',
            borderRadius: 50,
            transition: '0.2s linear',
            '&:hover': {
                color: 'rgb(245, 245, 245)'
            },
            [theme.breakpoints.down('sm')]: {
                height: 30,
                width: 30,
            },
        }
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openImage, setOpenImage] = useState(0)

    const imageList = [
        "https://images.unsplash.com/photo-1593055326304-67965488df5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        "https://images.unsplash.com/photo-1593011951062-fbeb9c4a484e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        "https://images.unsplash.com/photo-1593090562755-8951634d408a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        "https://images.unsplash.com/photo-1592495994946-52ba21a70bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2586&q=80",
        "https://images.unsplash.com/photo-1593081891731-fda0877988da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        "https://images.unsplash.com/photo-1592500595183-5e29fe490109?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        "https://source.unsplash.com/random",
    ]

    const handleClose = () => {
        setOpen(false)
    };

    const handleOpen = (openImage) => {
        setOpen(true)

        setOpenImage(openImage)
    };

    const nextImage = () => {
        if (openImage + 1 === imageList.length) {
            setOpenImage(0);
        }
        else {
            setOpenImage(openImage + 1);
        }
    }

    const previousImage = () => {
        if (openImage === 0) {
            setOpenImage(imageList.length - 1);
        }
        else {
            setOpenImage(openImage - 1);
        }
    }

    return (
        <div className={classes.root} id='image-grid'>
            <GridList cellHeight={160} className={classes.gridList} cols={6} rows={2}>
                <GridListTile cols={4} rows={2} classes={{tile: classes.topLeftTile}}>
                    <img className={classes.image} onClick={() => handleOpen(0)} src={imageList[0]} alt="house0" />
                </GridListTile>
                <GridListTile cols={2} rows={2} classes={{tile: classes.topRightTile}}>
                    <img className={classes.image} onClick={() => handleOpen(1)} src={imageList[1]} alt="house1" />
                </GridListTile>
                <GridListTile cols={3} rows={1}>
                    <img className={classes.image} onClick={() => handleOpen(2)} src={imageList[2]} alt="house2" />
                </GridListTile>
                <GridListTile cols={3} rows={1}>
                    <img className={classes.image} onClick={() => handleOpen(3)} src={imageList[3]} alt="house3" />
                </GridListTile>
                <GridListTile cols={2} rows={1} classes={{tile: classes.bottomLeftTile}}>
                    <img className={classes.image} onClick={() => handleOpen(4)} src={imageList[4]} alt="house4" />
                </GridListTile>
                <GridListTile cols={2} rows={1}>
                    <img className={classes.image} onClick={() => handleOpen(5)} src={imageList[5]} alt="house5" />
                </GridListTile>
                <GridListTile cols={2} rows={1} classes={{tile: classes.bottomRightTile}}>
                    <img className={classes.image} onClick={() => handleOpen(6)} src={imageList[6]} alt="house6" />
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
                        <div className={classes.navContainer} style={{left: 0, paddingLeft: 30}}>
                            <div className={classes.iconContainer}>
                                <ArrowBackIosIcon className={classes.navIcon} style={{marginLeft: 10, marginTop: 1}} onClick={previousImage}/>
                            </div>
                        </div>
                        <img className={classes.modalImage} src={imageList[openImage]} alt="house" />
                        <div className={classes.navContainer} style={{right: 0, paddingRight: 30,}}>
                            <div className={classes.iconContainer}>
                                <ArrowForwardIosIcon className={classes.navIcon} style={{marginLeft: 5, marginTop: 1}} onClick={nextImage}/>
                            </div>
                        </div>
                </Dialog>
            </div>
        </div>
    );
}

export default ImageGrid;
