import styled from 'styled-components';


const DefaultButton = styled.button`
  background-color: ${(props) => (props.inputValue ? backgroundColor[props.type] : backgroundColor['disabled'])};
  border: 0px;
  color: white;
  margin-left: 1rem;
`;

const backgroundColor = {
  default: 'seagreen',
  disabled: 'grey',
  destructive: 'red',
};

export const Button = ({ inputValue, type='default', children }) => {
  return(
    <DefaultButton inputValue={inputValue} type={type}>
       {children}
    </DefaultButton>
  );
};