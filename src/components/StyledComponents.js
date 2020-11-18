import styled from "styled-components";

const Button = styled.button`
  display: flex;
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  align-items: center;
  color: ${(props) => (props.color ? props.color : "#582EF0")};
  padding: 0.5rem;
  border-radius: 10px;
  text-transform: capitalize;
  border: 1px solid ${(props) => (props.color ? props.color : "#8FA1F2")};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background: ${(props) => (props.color ? props.color : "#582EF0")};
    color: ${(props) => (props.background ? props.background : "#582EF0")};
    transition: all 0.3s ease;
  }

  &:focus {
    outline: none;
  }
`;
const ProductTitle = styled.h1`
  text-transform: capitalize;
  font-style: italic;
  width: 100%;
  font-size: 3rem;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: ${(props) => (props.size ? props.size : null)};
  text-align: ${(props) => (props.align ? props.align : "center")};
`;

export { Button, ProductTitle };
