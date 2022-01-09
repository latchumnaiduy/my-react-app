import {
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonPopover,
  IonDatetime,
} from "@ionic/react";
import { calendar } from "ionicons/icons";
import React, { useState } from "react";
import "./index.scss";
export const DatePicker: React.FC = () => {
  const [popoverDate, setPopoverDate] = useState("");
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });
  return (
    <IonButton fill="clear" expand="full" className="ion-datepicker-btn">
      <IonPopover
        className="my-custom-popover"
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() =>
          setShowPopover({ showPopover: false, event: undefined })
        }
      >
        <IonDatetime
          presentation="date"
          onIonChange={(ev) => {
            setPopoverDate(ev.detail.value!);
            setShowPopover({ showPopover: false, event: undefined });
          }}
        />
      </IonPopover>
      <IonButton
        fill="clear"
        onClick={(e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e });
        }}
      >
        <IonInput value={popoverDate} />
        <IonButton fill="clear" className="ion-datepicker-inner-btn">
          <IonIcon icon={calendar} />
        </IonButton>
      </IonButton>
    </IonButton>
  );
};
