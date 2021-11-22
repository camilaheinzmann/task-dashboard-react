import { Container, Layout, Main } from "./Dashboard.styles";
import Aside from "../../components/Aside";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Tasks from "../../components/Tasks";

const Dashboard = () => {
  return (
    <Layout>
      <Navbar />
      <Container>
        <Aside />
        <Main>
          <Search />
          <Tasks />
        </Main>
      </Container>
    </Layout>
  );
};

export default Dashboard;
