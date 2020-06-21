import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Separator = () => {
    const useStyles = makeStyles({
        separator: {
            width: '100%',
            height: 1,
            borderBottom: '1px solid rgb(220, 220, 220)',
            marginTop: 23,
            marginBottom: 8,
        },
    });

    const classes = useStyles();

    return (
        <div className={classes.separator}/>
    );
}

export default Separator;
