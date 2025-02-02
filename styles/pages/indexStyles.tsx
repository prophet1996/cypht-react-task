import styled from "styled-components";

export const AppWrapper = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.body};
  overflow-x: hidden;
  padding: 5%;
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: ${props => props.theme.boxShadow};
  border: 1px solid ${props => props.theme.body};
  min-height: 80vh;
  border-radius: 4px;
  padding: 2em;
  & > section {
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  & > button {
    margin: 1em 0px;
  }
`;

export const StyledImage = styled.img`
  margin: auto;
  width: 20em;
  height: 20em;
  content: url(${props => props.theme.botIcon});
`;
