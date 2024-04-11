// Home.jsx
import Header from '../../components/Header';
import Main from '../../components/Main';
import example from '../../components/Card/example.json';
import Card from '../../components/Card/Card';
import EmptyCard from '../../components/Card/EmptyCard';

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Main>
        <Card message={example} />
        <EmptyCard />
      </Main>
    </>
  );
}

export default Home;
