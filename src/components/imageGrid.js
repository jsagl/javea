import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

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
        }
    }));

    const classes = useStyles();
    return (
        <div className={classes.root} id='image-grid'>
            <GridList cellHeight={160} className={classes.gridList} cols={6} rows={2}>
                <GridListTile cols={4} rows={2} classes={{tile: classes.topLeftTile}}>
                    <img src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={2} rows={2} classes={{tile: classes.topRightTile}}>
                    <img src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={3} rows={1}>
                    <img src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={3} rows={1}>
                    <img src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={2} rows={1} classes={{tile: classes.bottomLeftTile}}>
                    <img src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={2} rows={1}>
                    <img src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
                <GridListTile cols={2} rows={1} classes={{tile: classes.bottomRightTile}}>
                    <img src="https://source.unsplash.com/random" alt="house-picture" />
                </GridListTile>
            </GridList>
        </div>
    );
}

export default ImageGrid;
