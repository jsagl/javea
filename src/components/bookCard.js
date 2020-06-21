import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next";
import { getMonth } from 'date-fns';

import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';

import { KeyboardDatePicker } from '@material-ui/pickers';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import Separator from "./separator";

const BookCard = () => {
    const {t} = useTranslation();

    const useStyles = makeStyles((theme) => ({
        root: {
            position: position,
            minWidth: 340,
            maxWidth: 340,
            right: right,
            top: 100,
            borderRadius: 12,
            boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.12)',
            padding: 30,
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
        },
        title: {
            fontSize: 22,
            fontWeight: 'bold',
            marginRight: 20,
        },
        reviews: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
        },
        rating: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        star: {
            color:  '#22e39e',
            marginRight: 6,
            height: 20,
            width: 20,
        },
        ratingValue: {
            color: 'grey',
            fontSize: 14,
        },
        progress: {
            width: '100%',
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        pricing: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start'
        },
        priceRow: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 16,
            color: 'rgb(80,80,80)',
            marginTop: 16,
        },
        subTotal: {
            textAlign: 'right',
        },
        totalLabel: {
            fontWeight: 'bold',
        },
        total: {
            textAlign: 'right',
            fontWeight: 'bold',
        },
        button: {
            backgroundColor:  '#22e39e',
            padding: '16px 24px',
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            border: 'none',
            borderRadius: 8,
            width: '100%',
            marginTop: 30,
            transition: '0.3s linear',
            '&:hover': {
                backgroundColor: 'rgba(34,227,158,0.85)',
                cursor: 'pointer',
            },
            '&:focus': {
                outline: 'none',
            }
        },
        hidden: {
            display: 'none',
        }
    }));

    const [position, setPosition] = React.useState('static')
    const [right, setRight] = React.useState(0)
    const classes = useStyles();

    const [visiblePriceBtn, setVisiblePriceBtn] = React.useState(true);
    const [visibleContactBtn, setVisibleContactBtn] = React.useState(false);
    const [visiblePricing, setVisiblePricing] = React.useState(false);
    const [visibleProgress, setVisibleProgress] = React.useState(false);
    const [priceOrFill, setPriceOrFill] = React.useState('fill');


    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());

        return window.removeEventListener('scroll', () => handleScroll());
    })

    const handleScroll = () => {
        const imageGrid = document.querySelector('#image-grid')
        const imageGridBottom = imageGrid.getBoundingClientRect().bottom
        const imageGridLeft = imageGrid.getBoundingClientRect().left

        if (imageGridBottom -80 < 0) {
            setPosition('fixed')
            setRight(imageGridLeft)
        } else {
            setPosition('static')
        }
    }

    const [selectedDate, setSelectedDate] = React.useState(Date.now());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setVisibleContactBtn(false);
        setVisiblePricing(false);
        setVisibleProgress(false);
        setPriceOrFill('fill');
        setVisiblePriceBtn(true);
    };

    const [numOfWeeks, setNumOfWeeks] = React.useState(1);

    const handleChange = (event) => {
        setNumOfWeeks(event.target.value);
        setVisiblePricing(false);
        setVisibleContactBtn(false);
        setVisibleProgress(false);
        setPriceOrFill('fill');
        setVisiblePriceBtn(true);
    };

    const checkPrice = () => {
        if (visiblePriceBtn) {
            setVisibleContactBtn(true);
            setVisiblePriceBtn(false);
            setVisibleProgress(true);
            setTimeout(() => {
                setVisibleProgress(false)
                setPriceOrFill('price');
                setVisiblePricing(true);
            }, 500)
        }
    }


    let pricePerWeek;
    const month = getMonth(selectedDate); //(be careful it seems to start from 0 to 11)
    if (month >= 9 || month <= 2) {
        // Low season price
        pricePerWeek = 1000;
    } else if ((month >= 3 && month <= 4) || (month === 8)) {
        // Mid season price
        pricePerWeek = 1500;
    } else {
        // High season price
        pricePerWeek = 2000;
    }

    const stayPrice = pricePerWeek * numOfWeeks;
    let discountRate
    switch (numOfWeeks) {
        case 1:
            discountRate = 0;
            break;
        case 2:
            discountRate = 0.05;
        case 3:
        case 4:
            discountRate = 0.10;
            break;
        case 5:
        case 6:
            discountRate = 0.15;
            break;
        case 7:
        case 8:
            discountRate = 0.20;
            break;
        default:
            discountRate = 0;
    };
    const discount = discountRate * stayPrice;
    const cleaningFee = 200;
    const occupancyFee = 112;
    const total = stayPrice - discount + cleaningFee + occupancyFee;

    const priceBtnClass = visiblePriceBtn ? classes.button : classes.hidden
    const contactBtnClass = visibleContactBtn ? classes.button : classes.hidden
    const visiblePricingClass = visiblePricing ? classes.pricing : classes.hidden
    const circularProgressContainer = visibleProgress ? classes.progress : classes.hidden
    const discountPriceRowClass = discountRate > 0 ? classes.priceRow : classes.hidden

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.title}>
                    {priceOrFill === 'price' ? `${total / numOfWeeks}€ ` : t('addDatesForPrice')}
                    <span style={{fontWeight: 'normal', fontSize: 16}}>{priceOrFill === 'price' ? `/ ${t('week')}` : ''}</span>
                </div>
                <div className={classes.reviews}>
                    <div className={classes.rating}>
                        <StarIcon className={classes.star}/>
                        <div className={classes.ratingValue}>4.8</div>
                    </div>
                    <div className={classes.ratingValue}>(34)</div>
                </div>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label={t('startDate')}
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Grid item xs={6} style={{paddingTop: 28}}>
                    <FormControl style={{width: '100%'}}>
                        <InputLabel id="demo-simple-select-outlined-label">{t('numOfWeeks')}</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={numOfWeeks}
                            onChange={handleChange}
                            label="Number of weeks"
                        >
                            <MenuItem value={1}>{t('oneWeek')}</MenuItem>
                            <MenuItem value={2}>{t('twoWeeks')}</MenuItem>
                            <MenuItem value={3}>{t('threeWeeks')}</MenuItem>
                            <MenuItem value={4}>{t('fourWeeks')}</MenuItem>
                            <MenuItem value={5}>{t('fiveWeeks')}</MenuItem>
                            <MenuItem value={6}>{t('sixWeeks')}</MenuItem>
                            <MenuItem value={7}>{t('sevenWeeks')}</MenuItem>
                            <MenuItem value={8}>{t('eightWeeks')}</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <div className={circularProgressContainer}>
                <CircularProgress />
            </div>
            <div className={visiblePricingClass}>
                <div className={classes.priceRow}>
                    <div>
                        {`${pricePerWeek}€ x ${numOfWeeks} ${t('weeks')}`}
                    </div>
                    <div className={classes.subTotal}>
                        {`${stayPrice}€`}
                    </div>
                </div>
                <div className={discountPriceRowClass}>
                    <div>
                        {`${t('longStayDiscount')} - ${discountRate * 100}%`}
                    </div>
                    <div className={classes.subTotal}>
                        {`- ${discount}€`}
                    </div>
                </div>
                <div className={classes.priceRow}>
                    <div>
                        {t('cleaningFee')}
                    </div>
                    <div className={classes.subTotal}>
                        {`${cleaningFee}€`}
                    </div>
                </div>
                <div className={classes.priceRow}>
                    <div>
                        {t('occupancyFee')}
                    </div>
                    <div className={classes.subTotal}>
                        {`${occupancyFee}€`}
                    </div>
                </div>
                <Separator/>
                <div className={classes.priceRow}>
                    <div className={classes.totalLabel}>
                        {t('total')}
                    </div>
                    <div className={classes.total}>
                        {`${total}€`}
                    </div>
                </div>
            </div>
            <button className={priceBtnClass} onClick={checkPrice}>
                {t('checkPrices')}
            </button>
            <button className={contactBtnClass}>
                {t('contactUs')}
            </button>
        </div>
    );
}

export default BookCard;
