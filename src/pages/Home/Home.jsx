// Home.jsx
import Card from '../../components/Card/Card';
import EmptyCard from '../../components/Card/EmptyCard';
import Header from '../../components/Header';
import Main from '../../components/Main';
import example from '../../components/Card/example.json';

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Card message={example} />
        <EmptyCard />
      </Main>
    </>
  );
}

export default Home;
