import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import ShowCase from './components/ShowCase/ShowCase.tsx';
// @ts-ignore
const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`;

const App: React.FC<any> = () => {
  return (
    <AppWrapper>
      <ShowCase />
    </AppWrapper>
  );
};

export default App;
