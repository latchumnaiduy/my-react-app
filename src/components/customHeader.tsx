import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useHistory } from "react-router-dom";

interface ChildProps {
  title: string;
}
const CustomHeader: React.FC<ChildProps> = ({ title }) => {
  let history = useHistory();
  return (
    <IonHeader>
      <IonToolbar class="cars-tool-bar">
        <IonButtons>
          <IonButton className="p-0">
            <IonIcon
              class="back-btn"
              src="assets/arrow_back_24px.svg"
              onClick={() => history.goBack()}
            />
          </IonButton>
        </IonButtons>
        <IonTitle class="cars-title" className="p-0">
          {title}
        </IonTitle>
        <IonButtons slot="primary" >
          <IonButton  slot="start" class="menu">
            <IonIcon slot="end" class="menu-btn" src="assets/More-Vertical.svg" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default CustomHeader;
