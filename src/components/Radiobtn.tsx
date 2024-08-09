import { ChangeEventHandler, ReactElement } from "react";

interface IRadiobtnProps {
  checked: boolean;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: "radio";
}

export function Radiobtn(props: IRadiobtnProps): ReactElement {
  return (

    <div className="radio-button">
      <input className="btn-press btn-style-std" onChange={props.onChange} type={props.type} checked={props.checked} id={props.label} />
        <label htmlFor={props.label}>{props.label}</label>
    </div>
  );
}