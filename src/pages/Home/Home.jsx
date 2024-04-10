// Home.jsx
import Card from '../../components/Card/Card';
import EmptyCard from '../../components/Card/EmptyCard';
import Header from '../../components/Header';
import Main from '../../components/Main';

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Card />
        <EmptyCard />
      </Main>
    </>
  );
}

export default Home;
