import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./index.css";
import { useHistory } from "react-router-dom";

interface ChildProps {
  title: string;
}
const CustomHeader: React.FC<ChildProps> = ({ title }) => {
  let history = useHistory();
  return (
    <IonHeader className="ion-header" >
      <IonToolbar class="ion-header-toolbar">
        <IonButtons>
          <IonLabel className="p-0">
            <IonIcon
              class="back-btn"
              src="assets/arrow_back_24px.svg"
              onClick={() => history.goBack()}
            />
          </IonLabel>
        <IonText class="cars-title" className="p-0">
          {title}
        </IonText>
        </IonButtons>
        <IonButtons slot="primary" >
          <IonLabel  slot="start" class="menu">
            <IonIcon slot="end" class="menu-btn" src="assets/More-Vertical.svg" />
          </IonLabel>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default CustomHeader;
