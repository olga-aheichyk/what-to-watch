import MainScreen from '../main-screen/main-screen';

const TITLE = 'The Grand Budapest Hotel';
const GENRE = 'Drama';
const YEAR = 2012;

function App(): JSX.Element {
  return <MainScreen title={TITLE} genre={GENRE} year={YEAR} />;
}

export default App;
