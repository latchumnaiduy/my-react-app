import React from "react";
import { IonBreadcrumb, IonBreadcrumbs } from "@ionic/react";

interface ChildProps {
  breadCrumbItems: breadCrumbItem[];
}
type breadCrumbItem = {
  name: string;
  path: string;
  value: string;
};
export const Breadcrumbs: React.FC<ChildProps> = ({ breadCrumbItems }) => (
  <ul className="breadcrumbs">
    {breadCrumbItems.map((item, i) => {
      return (
        <li key={`bread-crub-${i}`}>
          <a href={item?.path}>
            <p>{item?.name}</p>
            <p>{item?.value}</p>
          </a>
        </li>
      );
    })}
  </ul>
);
