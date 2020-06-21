import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";
import Separator from "./separator";

import HomeIcon from '@material-ui/icons/Home';
import Grid from "@material-ui/core/Grid";

const Content = () => {
    const { t } = useTranslation();

    const useStyles = makeStyles({
        root: {
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
            marginRight: 40,
        },
        titleContainer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        textContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
        },
        title: {
            fontSize: 24,
            fontWeight: '700',
            marginBottom: 8,
        },
        subtitle: {
            fontSize: 16,
        },
        avatar: {
            backgroundImage: 'url(https://source.unsplash.com/random)',
            height: 40,
            width: 40,
            borderRadius: 25,
        },
        keyFeature: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            marginTop: 12,
            marginBottom: 12,
        },
        featureContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
        },
        featureIcon: {
            marginRight: 20,
            color: '#222222',
        },
        featureTitle: {
            fontSize: 16,
            fontWeight: '500',
            marginBottom: 8,
            color: '#222222',
        },
        featureDescription: {
            fontSize: 14,
            color: 'darkgrey',
        },
        mainDescription: {
            color: '#222222',
        },
        paragraph: {
            margin: '20px 0px',
        },
        sectionTitle: {
            fontSize: 24,
            fontWeight: '700',
            marginBottom: 34,
            marginTop: 20,
        },
        bedCard: {
            border: '1px solid rgb(220, 220, 220)',
            borderRadius: 12,
            padding: '24px 16px',

        },
        bedIcon: {
            color: '#222222',
            marginBottom: 8,
        },
        amenity: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
        },
        amenityIcon: {
            marginRight: 16,
        },
        amenityTitle: {
            fontSize: 16,
            marginTop: 2,
            color: '#222222',
        },
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.titleContainer}>
                <div className={classes.textContainer}>
                    <div className={classes.title}>
                        Entire house hosted by Carole
                    </div>
                    <div className={classes.subtitle}>
                        5 guests · 2 bedrooms · 2 beds · 1 bath
                    </div>
                </div>
                <div className={classes.avatar}>
                </div>
            </div>
            <Separator/>
            <div className={classes.keyFeature}>
                <HomeIcon className={classes.featureIcon}/>
                <div className={classes.featureContent}>
                    <div className={classes.featureTitle}>
                        Entire home
                    </div>
                    <div className={classes.featureDescription}>
                        You'll have the entire house to yourself.
                    </div>
                </div>
            </div>
            <div className={classes.keyFeature}>
                <HomeIcon className={classes.featureIcon}/>
                <div className={classes.featureContent}>
                    <div className={classes.featureTitle}>
                        Swimming pool
                    </div>
                    <div className={classes.featureDescription}>
                        You'll have the entire house to yourself.
                    </div>
                </div>
            </div>
            <div className={classes.keyFeature}>
                <HomeIcon className={classes.featureIcon}/>
                <div className={classes.featureContent}>
                    <div className={classes.featureTitle}>
                        Close to the beach
                    </div>
                    <div className={classes.featureDescription}>
                        You'll have the entire house to yourself.
                    </div>
                </div>
            </div>
            <div className={classes.keyFeature}>
                <HomeIcon className={classes.featureIcon}/>
                <div className={classes.featureContent}>
                    <div className={classes.featureTitle}>
                        Blablabla
                    </div>
                    <div className={classes.featureDescription}>
                        You'll have the entire house to yourself.
                    </div>
                </div>
            </div>
            <Separator/>
            <div className={classes.mainDescription}>
                <p className={classes.paragraph}>Calm charming house (60 m2) with its panoramic terrace (5 minutes from the Royal château d'Amboise).</p>
                <p className={classes.paragraph}>Covered and closed bicycle shelter.</p>
                <p className={classes.paragraph}>Maison de charme d'environ 60 m2, au calme de la campagne, avec sa terrasse panoramique, aux portes d'Amboise (à 5 minutes du château d'Amboise).</p>
                <p className={classes.paragraph}>Salle d'eau avec douche italienne, refaite à neuf mai 2016.</p>
                <p className={classes.paragraph}>Local à vélo abrité et sécurisé.</p>
                <p className={classes.paragraph}>Welcome to "La Roche Fleurie", charming house with its panoramic terrace. Enjoy the quietness of the countryside and the birds chirping.</p>
                <p className={classes.paragraph}>Located 5 minutes from "Le château d'Amboise", the house is the ideal base for visiting the Loire castles and discover all the treasures of the Valley of Kings !!!</p>
                <p className={classes.paragraph}>Bienvenue à "La Roche Fleurie", maison de charme avec sa terrasse panoramique. Vous apprécierez le calme de la campagne et le gazouillis des oiseaux.</p>
                <p className={classes.paragraph}>Située à 5 minutes du château d'Amboise, la maison est le pied-à-terre idéal pour visiter les châteaux de la Loire et découvrir tous les trésors de la vallée des Rois !!!</p>
            </div>
            <Separator/>
            <div className={classes.sectionTitle}>Sleeping arrangements</div>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.bedCard}>
                        <HomeIcon className={classes.bedIcon}/>
                        <div className={classes.featureTitle}>
                            Bedroom 1
                        </div>
                        <div className={classes.featureDescription}>
                            1 queen bed
                        </div>

                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.bedCard}>
                        <HomeIcon className={classes.bedIcon}/>
                        <div className={classes.featureTitle}>
                            Bedroom 2
                        </div>
                        <div className={classes.featureDescription}>
                            1 queen bed
                        </div>

                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.bedCard}>
                        <HomeIcon className={classes.bedIcon}/>
                        <div className={classes.featureTitle}>
                            Bedroom 3
                        </div>
                        <div className={classes.featureDescription}>
                            1 queen bed
                        </div>

                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.bedCard}>
                        <HomeIcon className={classes.bedIcon}/>
                        <div className={classes.featureTitle}>
                            Bedroom X
                        </div>
                        <div className={classes.featureDescription}>
                            1 queen bed
                        </div>

                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.bedCard}>
                        <HomeIcon className={classes.bedIcon}/>
                        <div className={classes.featureTitle}>
                            Bedroom X
                        </div>
                        <div className={classes.featureDescription}>
                            1 queen bed
                        </div>

                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.bedCard}>
                        <HomeIcon className={classes.bedIcon}/>
                        <div className={classes.featureTitle}>
                            Bedroom X
                        </div>
                        <div className={classes.featureDescription}>
                            1 queen bed
                        </div>

                    </div>
                </Grid>
            </Grid>
            <Separator/>
            <div className={classes.sectionTitle}>Amenities</div>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.amenity}>
                        <HomeIcon className={classes.amenityIcon}/>
                        <div className={classes.amenityTitle}>
                            Bedroom 1
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.amenity}>
                        <HomeIcon className={classes.amenityIcon}/>
                        <div className={classes.amenityTitle}>
                            Bedroom 2
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.amenity}>
                        <HomeIcon className={classes.amenityIcon}/>
                        <div className={classes.amenityTitle}>
                            Bedroom 3
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.amenity}>
                        <HomeIcon className={classes.amenityIcon}/>
                        <div className={classes.amenityTitle}>
                            Bedroom X
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.amenity}>
                        <HomeIcon className={classes.amenityIcon}/>
                        <div className={classes.amenityTitle}>
                            Bedroom X
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className={classes.amenity}>
                        <HomeIcon className={classes.amenityIcon}/>
                        <div className={classes.amenityTitle}>
                            Bedroom X
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Content;
