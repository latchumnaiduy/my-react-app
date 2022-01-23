import { IonToolbar, IonGrid, IonRow, IonCol, IonLabel } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import './breadcrumbs.css';
interface ChildProps {
  breadCrumbItems: breadCrumbItem[];
}
type breadCrumbItem = {
  name: string;
  path: string;
  value: string;
};
// export const Breadcrumbs: React.FC<ChildProps> = ({ breadCrumbItems }) => (
//   <ul className="breadcrumbs">
//     {breadCrumbItems.map((item, i) => {
//       return (
//         <li key={`bread-crub-${i}`}>
//           <a href={item?.path}>
//             <p className="breadcrumb-title">{item?.name}</p>
//             <p className="breadcrumb-text">{item?.value}</p>
//           </a>
//         </li>
//       );
//     })}
//   </ul>
// );

export const Breadcrumbs: React.FC<ChildProps> = ({ breadCrumbItems }) => {
  const history = useHistory();
  const breadcrumbNavigation = (item: breadCrumbItem) => {
    history.push(item.path)
  }
  return (
    <IonToolbar className="cardetail-sub-header">
  <IonGrid className="breadcrum-grid">
    <IonRow className="breadcrum-row">
    {breadCrumbItems.map((item, i) => {
      return (
        <IonCol className={`cardetail-all-backbreadrum-images ${i == 0 ? 'first-breadcrum' : 'next-breadcrum md'}`} key={`bread-crumb-${i}`}>
        <IonLabel
          onClick={() => breadcrumbNavigation(item)}
          className={`${i === 0 ? 'cardetail-location-breadcrum' : i === 1 ? 'cardetail-Track-breadcrum' : i == 2 ? 'cardetail-Cars-breadcrum' : ''}`}
        >
          {item?.name}
        </IonLabel>
        <IonLabel 
        className={`${i === 0 ? 'cardetail-quest1-breadcrum' : i === 1 ? 'cardetail-Track1-bold-breadcrum' : i == 2 ? 'cardetail-carnumber-breadcrum' : ''}`}
        >{item?.value}</IonLabel>
        </IonCol> 
      )
      })
    }
    </IonRow>
  </IonGrid>
  </IonToolbar>
  );
  
}
