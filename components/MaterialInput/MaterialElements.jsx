import styled from "styled-components";
import { restElement } from "babel-types";

const Input = props => {
  const { className, ...restProps } = props;
  return (
    <div className={className}>
      <input {...restProps} />
      <label>{props.name}</label>
    </div>
  );
};

export const StyledInput = styled(Input)`
  position: relative;
  margin: 30px 0;

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  & > input {
    color: ${props => props.theme.body};
    width: 80%;
    box-shadow: none;
    padding: 10px 10px 10px 5px;
    font-size: 18px;

    background: none !important;
    border: none;
    border-bottom: 1px solid ${props => props.theme.body};
  }
  & > input:focus {
    outline: none;
  }
  & > input:focus ~ label,
  & > input:valid ~ label {
    top: -20px;
    font-size: 14px;
  }
  & > label {
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
  }
  /* Change Autocomplete styles in Chrome*/
  & > input:-webkit-autofill,
  & > input:-webkit-autofill:hover,
  & > input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.background} inset;
    -webkit-text-fill-color: ${props => props.theme.body};
  }
`;
