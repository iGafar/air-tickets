import { useState } from "react";
import styled from "styled-components";
import { IItem } from "../types";

const inputs: IItem[] = [
  { value: "cheap", label: "Самый дешевый" },
  { value: "fast", label: "Самый быстрый" },
  { value: "optimal", label: "Самый оптимальный" },
];

const OptionsBlock = () => {
  const [value, setValue] = useState<string>("cheap");

  return (
    <OptionsBlockStyle>
      {inputs.map((item) => (
        <li key={item.value}>
          <input
            type="radio"
            name="radio"
            id={item.value}
            value={item.value}
            checked={value === item.value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </li>
      ))}
    </OptionsBlockStyle>
  );
};

const OptionsBlockStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  background: rgb(232, 235, 242);
  border: 1px solid rgb(78, 20, 140);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: max(2.9rem, 12px);

  li {
    flex-grow: 1;
    text-align: center;
    box-sizing: border-box;

    label {
      display: inline-block;
      padding: max(1.8rem, 14px) 0;
      width: 100%;
      transition: all 300ms linear;
    }

    label:hover {
      cursor: pointer;
      background-color: rgba(78, 20, 140, 0.1);
    }

    input:checked + label {
      background-color: rgb(78, 20, 140);
      color: rgb(247, 249, 247);
    }

    input {
      position: absolute;
      opacity: 0;
    }

    &:not(:last-child) {
      border-right: 1px solid rgb(78, 20, 140);
    }
  }
`;

export default OptionsBlock;
