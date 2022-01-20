import {
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonPopover,
    IonDatetime,
    IonLabel,
    IonImg,
  } from "@ionic/react";
  import { calendar } from "ionicons/icons";
  import React, { useState } from "react";
  import "./index.css";
  import { format, parseISO } from 'date-fns';
  interface IProps {
    onChange: (e:any) => void
  }

  export const DatePicker: React.FC<IProps> = ({onChange}) => {

    const formatDate = (value: string) => {
      return format(parseISO(value), 'MM/dd/yyyy');
    };
  
    const [popoverDate, setPopoverDate] = useState("");
    const [popoverState, setShowPopover] = useState({
      showPopover: false,
      event: undefined,
    });
    return (
      <IonButton fill="clear" expand="full" className="ion-datepicker-btn ion-custom-datepicker">
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
              setPopoverDate(formatDate(ev.detail.value!));
              onChange(formatDate(ev.detail.value!))
              setShowPopover({ showPopover: false, event: undefined });
            }}
          />
        </IonPopover>
        <IonButton
          fill="clear"
          expand="full"
          className="ion-datepicker-inputBtn"
          onClick={(e: any) => {
            e.persist();
            setShowPopover({ showPopover: true, event: e });
          }}
        >
          <IonInput value={popoverDate} className="ion-datepicker-input" />
          <IonLabel  className="ion-datepicker-inner-btn">
            {/* <IonIcon className="ion-datepicker-inner-btn-icon" icon={calendar} /> */}
            <IonImg className="ion-datepicker-inner-btn-icon" src="assets/calendar.svg"></IonImg>
          </IonLabel>
        </IonButton>
      </IonButton>
    );
  };