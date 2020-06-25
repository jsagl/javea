import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import { useTranslation } from "react-i18next";
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
            [theme.breakpoints.down('md')]: {
                height: 60,
            },
        },
        container:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            height: '100%',
        },
        navigationContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent:'start',
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        mobileNavContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent:'start',
            [theme.breakpoints.up('lg')]: {
                display: 'none',
            },
        },
        mobileNavButton: {
            color: "black",
            backgroundColor: 'white',
            borderRadius: 50,
            padding: '3px 5px',
            border: '1px solid transparent',
            cursor: 'pointer',
            transition: '0.3s linear',
            "&:hover": {
                backgroundColor: 'rgb(250, 250, 250)',
            },
            "&:focus": {
                outline: 'none',
            }
        },
        mobileLinksContainer: {
            position: 'absolute',
            transition: '0.1s linear',
            top: 61,
            left: 35,
            height: height,
            backgroundColor: 'white',
            width: 150,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 3px 9px -1px rgba(0,0,0,0.2)',
            borderRadius: 5,
        },
        imgContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'column',
            marginRight: '20px',
            cursor: 'pointer',
        },
        logo: {
            height: 60,
            [theme.breakpoints.down('md')]: {
                height: 40,
            },
        },
        link: {
            color: "black",
            fontSize: 16,
            fontWeight: 'bold',
            backgroundColor: 'white',
            border: 'none',
            textDecoration: "none",
            borderBottom: '5px solid white',
            padding: '30px 6px 26px 6px',
            margin: '0px 10px',
            cursor: 'pointer',
            "&:hover": {
                color: '#22e39e',
                borderBottom: '5px solid #22e39e',
            },
            "&:focus": {
                cursor: 'pointer',
                outline: 'none',
            },
            [theme.breakpoints.down('md')]: {
                padding: '6px 6px 6px 6px',
            },
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
            cursor: 'pointer',
            '&:focus': {
                outline: 'none',
                cursor: 'pointer',
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
    const [height, setHeight] = React.useState(0);

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
        if (window.scrollY > 35) {
            setShadow('0 3px 9px -1px rgba(0,0,0,0.2)')
        } else {
            setShadow('')
        }
    }

    const handleClick = (targetId) => {
        const top = targetId ? document.querySelector(targetId).offsetTop - 100 : 0;

        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });

        if (height > 0) {
            setHeight(0)
        }
    }

    const displayMobileNav = () => {
        if (height > 0) {
            setHeight(0)
        } else {
            setHeight(200)
        }
    }

    return (

        <div className={classes.root}>
            <Container maxWidth={"lg"} className={classes.container}>
                <div className={classes.navigationContainer} >
                    <div className={classes.imgContainer}>
                        <img onClick={() => handleClick()}
                             src={'./assets/logo.png'} alt="logo" style={{height: 60}}
                        />
                    </div>
                    <button className={classes.link} onClick={() => handleClick('#property-title')}>{t("navLinkPhotos")}</button>
                    <button className={classes.link} onClick={() => handleClick('#amenities')}>{t("navLinkAmenities")}</button>
                    <button className={classes.link} onClick={() => handleClick('#reviews')}>{t("navLinkReviews")}</button>
                    <button className={classes.link} onClick={() => handleClick('#location')}>{t("navLinkLocation")}</button>
                    <button className={classes.link} onClick={() => handleClick('#contact')}>{t("navLinkContact")}</button>
                </div>
                <div className={classes.mobileNavContainer} >
                    <div className={classes.imgContainer}>
                        <img onClick={() => handleClick()}
                             src={'./assets/logo.png'} alt="logo" className={classes.logo}
                        />
                    </div>
                    <button className={classes.mobileNavButton} onClick={displayMobileNav}>
                        <MenuIcon />
                    </button>
                    <div className={classes.mobileLinksContainer}>
                        <button className={classes.link} onClick={() => handleClick('#property-title')}>{t("navLinkPhotos")}</button>
                        <button className={classes.link} onClick={() => handleClick('#amenities')}>{t("navLinkAmenities")}</button>
                        <button className={classes.link} onClick={() => handleClick('#reviews')}>{t("navLinkReviews")}</button>
                        <button className={classes.link} onClick={() => handleClick('#location')}>{t("navLinkLocation")}</button>
                        <button className={classes.link} onClick={() => handleClick('#contact')}>{t("navLinkContact")}</button>
                    </div>
                </div>
                <div className={classes.selectButton}>
                    <img src={`./assets/flags/${language}.svg`} alt="logo" className={classes.flag}/>
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
