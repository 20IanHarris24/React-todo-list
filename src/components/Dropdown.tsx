import { ChangeEventHandler, ReactElement } from "react";
import { IDropdown } from ".";

interface IDropdownProps {
  label: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: IDropdown[];
  value: string;
}

export function Dropdown(props: IDropdownProps): ReactElement {
  return (
    <div className="dropdown">
      <label className="label" htmlFor={props.label}>
        {props.label}
      </label>
      <select
        className="dropdown-element"
        id={props.label}
        onChange={props.onChange}
        value={props.value}
      >
        {props.options.map((o) => (
          <option key={o.id} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}