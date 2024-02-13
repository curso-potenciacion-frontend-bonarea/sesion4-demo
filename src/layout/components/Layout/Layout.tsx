import Heading from "@/shared/components/Heading";
import Header from "@/layout/components/Header";
import MainContent from "@/layout/components/MainContent";
import Sidebar from "@/layout/components/Sidebar";
import logo from "@/assets/logoA.svg";
import Image from "@/shared/components/Image";
import LoginForm from "@/user/components/LoginForm";
import "./Layout.scss";

const Layout = (): React.ReactElement => {
  return (
    <div className="container">
      <Header>
        <Image
          width="31"
          height="34"
          src={logo}
          alt="Stolen logo from bonÀrea"
        />
        <Heading>bonMario App</Heading>
      </Header>
      <Sidebar>sidebar</Sidebar>
      <MainContent>
        <Heading level={2}>Login</Heading>
        <LoginForm />
      </MainContent>
    </div>
  );
};

export default Layout;
