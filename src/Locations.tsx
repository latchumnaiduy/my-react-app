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
import CustomHeader from "./components/customHeader";

/* Theme variables */
import "./theme/variables.css";
import "./theme/Locations.css";
import "./theme/Cars.css";
import { useState } from "react";
const Locations: React.FC = () => {
  let className  = 'location-list1';
  const history = useHistory();
  const [location,setLocation]=useState('')

  const navigateToTracks = () => {
    history.push("/Tracks");
   };

  const  changeBgColor= (e:any) => {
    setLocation(e.target.innerText);
  };
  let locations=["QUEST 1","QUEST 2","QUEST 3","QUEST 4","QUEST 5","QUEST 6","QUEST 7","QUEST 8","QUEST 9","QUEST 10","QUEST1 1","QUEST 12","QUEST 13"]
  return (
    <IonPage>
      <IonHeader class="location-tool-bar">
        <CustomHeader title="Locations"></CustomHeader>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          {locations.map(list=>(
               <IonItem  className={list === location ? className:""} onClick={(event) => changeBgColor(event)}>
               <IonText  class="locations" >
                 {list}
               </IonText>
             </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Locations;

