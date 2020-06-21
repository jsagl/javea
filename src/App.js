import React from 'react';
import { useTranslation } from "react-i18next";

import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

import Navbar from "./components/navbar";
import ImageGrid from "./components/imageGrid";
import BookCard from "./components/bookCard";
import Content from "./components/content";

function App() {
    const { t } = useTranslation();
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
        },
        bookCardPositionMaintainer: {
            width: 400,
            minWidth: 400,
            maxWidth: 400,
            height: 3,
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        }
    }));

    const classes = useStyles();

      return (
         <div>
            <Navbar/>
            <Container maxWidth={"lg"} style={{paddingTop: 100}}>
                <h2>{t("propertyTitle")}</h2>
                <ImageGrid/>
                <div className={classes.container}>
                    <Content/>
                    <div>
                        <BookCard/>
                        <div className={classes.bookCardPositionMaintainer}/>
                    </div>
                </div>
            </Container>
         </div>

      );
}

export default App;
