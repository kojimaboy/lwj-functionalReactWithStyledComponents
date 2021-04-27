import styled from 'styled-components';
import { useState } from 'react';
import { Button } from './Button';


const Div = styled.div`
  background-color: gray;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width = 40vw;
`;

export const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Div>
      <header className="App-header">
        <Input 
          type="text" 
          onChange={handleInput} 
          value={inputValue}
        />
        <Button inputValue={inputValue}> Add Me </Button>
        <Button inputValue='DELETE' type='destructive'> DELETE ME! </Button>
      </header>      
    </Div>
  );
}