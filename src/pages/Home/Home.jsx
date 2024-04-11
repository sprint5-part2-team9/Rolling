// Home.jsx
import Header from "../../components/Header";
import Main from "../../components/Main";
import Card from "../../components/Card/Card";
import EmptyCard from "../../components/Card/EmptyCard";

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
