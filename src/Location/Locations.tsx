import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonNav,
  IonPage,
  IonRadio,
  IonRow,
  IonTab,
  IonTabBar,
  IonText,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import CustomHeader from "../components/CustomHeader";
/* Theme variables */
// import "./theme/variables.css";
import "./Locations.css";
// import "./theme/Cars.css";
import { useEffect, useState } from "react";
import { locations } from "../utils/sample-data";
const Locations: React.FC = () => {
  const history = useHistory();
  const [locationsList, setLocationsList] = useState([...locations]);

  useEffect(() => {
    let locationsListClone = [...locationsList];
    locationsListClone.map((x) => (x.active = false));
    setLocationsList(locationsListClone)
  },[])
  
  const onSelectLocation = (location: any) => {
    let locationsListClone = [...locationsList];
    locationsListClone.map((x) => (x.active = false));
    const INDEX = locationsListClone.findIndex((x) => x.name === location.name);
    if (INDEX > -1) {
      locationsListClone[INDEX].active = true;
    }
    setLocationsList(locationsListClone)
    history.push('/Cars')
  };

  return (
    <IonPage>
      <IonHeader class="location-tool-bar">
        <CustomHeader title="Locations" ></CustomHeader>
      </IonHeader>
      <IonContent fullscreen className="has-header">
        <IonList lines="none">
          {locationsList.map((location, i) => (
            <IonItem
              key={`location-${i}`}
              className={`location-item ${location?.active ? "active-location" : ""}`}
              onClick={() => onSelectLocation(location)}
              lines="none"
            >
              <IonText class="locations" className="p-0">{location.name}</IonText>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonFooter class="cars-footer location-footer"></IonFooter>
    </IonPage>
  );
};

export default Locations;
