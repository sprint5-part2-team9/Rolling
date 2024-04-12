// Home.jsx
import Header from "../../components/Header";
import Main from "../../components/Main";
import example from "../../components/Card/example.json";
import Card from "../../components/Card/Card";
import AddCard from "../../components/Card/AddCard";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Card message={example} />
        <AddCard />
      </Main>
    </>
  );
}

export default Home;
