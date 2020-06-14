import React from 'react';
import { useTranslation, Trans } from "react-i18next";

import Container from "@material-ui/core/Container";

import Navbar from "./components/navbar/navbar";
import ImageGrid from "./components/imageGrid/imageGrid";

function App() {
    const { t, i18n } = useTranslation();

      return (
         <div>
            <Navbar/>
            <Container maxWidth={"lg"} style={{paddingTop: 100}}>
                <h2>{t("propertyTitle")}</h2>
                <ImageGrid/>
            </Container>
         </div>

      );
}

export default App;
