import styled from 'styled-components';
import ShowCase from './components/ShowCase/ShowCase';
const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
background: white;
`;

const App = () => {
  return (
    <AppWrapper >
      <ShowCase/>
    </AppWrapper>
  );
};

export default App;
