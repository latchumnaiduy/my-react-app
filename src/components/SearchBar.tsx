import {
  IonItem,
  IonButton,
  IonSearchbar,
  IonList,
  IonInput,
} from "@ionic/react";
import React, { useState } from "react";
import "./index.css";
interface IProps {
  onChange: (e:any) => void
}

export const SearchBar: React.FC<IProps> = ({onChange}) => {
  const [ownerNames, setownerNames] = useState([
    "Owner 1",
    "Owner 2",
    "Owner 3",
  ]);
  const [inputValue,setInputValue] = useState<string>();
  const [searchOwnerNames, setSearchOwnerNames] = useState<string[]>([]);
  const [isItemAvailable, setIsItemAvailable] = useState(false);
  const getItems = (ev: any) => {
    // Reset items back to all of the items
    setSearchOwnerNames([]);
    let ownerNamesClone = [...ownerNames];

    // set val to the value of the searchbar
    const val = ev;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== "") {
      setIsItemAvailable(true);
      ownerNamesClone = ownerNamesClone.filter((item) => {
        return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
      setSearchOwnerNames(ownerNamesClone);
    } else {
      setIsItemAvailable(false);
    }
  };
  return (
    <>
      {/* <IonList lines="none"> */}
      <IonItem
        lines="none"
        className="ion-item-btn ion-datepicker-btn ion-custom-datepicker"
      >
        <IonInput
          type="text"
          className="searchbar-input"
          clear-input={true}
          debounce={2000}
          value={inputValue}
          onIonChange={(e) => getItems(e.detail.value!)}
        ></IonInput>
      </IonItem>
      {isItemAvailable && (
        <IonList lines="none" className="search-results">
          {searchOwnerNames.map((item, i) => {
            return (
              <IonItem
                type="button"
                lines="none"
                className="ion-item-btn"
                key={`search-${i}`}
                onClick={() => {
                  setIsItemAvailable(false);
                  onChange(item);
                  setInputValue(item);
                }}
              >
                {item}
              </IonItem>
            );
          })}
        </IonList>
      )}
      {/* </IonList> */}
    </>
  );
};
