import React from "react";
import './breadcrumbs.css';
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
            <p className="breadcrumb-title">{item?.name}</p>
            <p className="breadcrumb-text">{item?.value}</p>
          </a>
        </li>
      );
    })}
  </ul>
);
