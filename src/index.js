import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DateFnsUtils from "@date-io/date-fns";
import frLocale from "date-fns/locale/fr";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { DateTimePicker } from "@material-ui/pickers";

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main:  '#22e39e',
            light: 'rgba(34,227,158,0.85)',
        },
    },
    overrides: {
        MuiPickersToolbarText: {
            toolbarBtnSelected: {
                color: "white",
            },
        },
        MuiPickersDay: {
            daySelected: {
                color: 'white',
            },
        },
        MuiContainer: {
            maxWidthLg: {
                maxWidth: '1200px !important',
                padding: '0px 35px',


            },

        },

    },
});

ReactDOM.render(
  <React.StrictMode>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
          <ThemeProvider theme={myTheme}>
                <App/>
          </ThemeProvider>
      </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
