import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: 'white',
            zIndex: 1200,
            height: 80,
            position: 'fixed',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: shadow,
        },
        container:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        imgContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'column',
            marginRight: '20px',
        },
        link: {
            color: "black",
            fontWeight: 'bold',
            textDecoration: "none",
            borderBottom: '5px solid white',
            padding: '28px 6px 23px 6px',
            margin: '0px 10px',
            "&:hover": {
                color: '#22e39e',
                borderBottom: '5px solid #22e39e',
            }
        },
        selectButton: {
            position: 'relative',
            width: 130,
            height: 36,
        },
        select: {
            position: 'absolute',
            textAlign: 'center',
            top: 0,
            left: 0,
            width: 130,
            height: 36,
            backgroundColor: 'transparent',
            padding: '8px 20px 8px 35px',
            border: 'none',
            MozAppearance: 'none', /* Firefox */
            WebkitAppearance: 'none', /* Safari and Chrome */
            Appearance: 'none',
            '&:focus': {
                outline: 'none',
            },
            fontSize: 16,
        },
        flag:{
            width: 15,
            position: 'absolute',
            top: 10,
            left: 10,
        },
        selectArrow: {
            position: 'absolute',
            top: 6,
            right: 0,
        }
    }));

    const [shadow, setShadow] = React.useState('');

    const classes = useStyles();
    const [language, setLanguage] = useState(i18next.language)

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
        setLanguage(event.target.value);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());

        return window.removeEventListener('scroll', () => handleScroll());
    })

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setShadow('0 3px 9px -1px rgba(0,0,0,0.2)')
        } else {
            setShadow('')
        }
    }

    return (

        <div className={classes.root}>
            <Container maxWidth={"lg"} className={classes.container}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent:'start'}}>
                    <div className={classes.imgContainer}>
                        <img src={process.env.PUBLIC_URL + 'logo.png'} alt="logo" style={{height: 60}}/>
                    </div>
                    <a href="#" className={classes.link}>{t("navLinkPhotos")}</a>
                    <a href="#" className={classes.link}>{t("navLinkAmenities")}</a>
                    <a href="#" className={classes.link}>{t("navLinkReviews")}</a>
                    <a href="#" className={classes.link}>{t("navLinkLocation")}</a>
                    <a href="#" className={classes.link}>{t("navLinkContact")}</a>
                </div>

                <div className={classes.selectButton}>
                    <img src={`${process.env.PUBLIC_URL}images/flags/${language}.svg`} alt="logo" className={classes.flag}/>
                    <select value={language} onChange={changeLanguage} className={classes.select}>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="es">Espagnol</option>
                    </select>
                    <ArrowDropDownIcon className={classes.selectArrow}/>
                </div>
            </Container>
        </div>

    );
}

export default Navbar;
