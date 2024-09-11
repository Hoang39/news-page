import NewsList from "../components/news/newsList";
import DefaultLayout from "../layouts/defaultLayout";

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <NewsList />
      </DefaultLayout>
    </>
  );
};

export default Home;
