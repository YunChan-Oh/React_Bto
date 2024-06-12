import "./home.css";
import AuthedBanner from "./banner/authedBanner.jsx";
import sparkles_3d from "../../assets/home/img/sparkles_3d.png";
import trophy_3d from "../../assets/home/img/trophy_3d.png";

const Menus = () => {
  let arrow = ">";
  return (
    <div id={"home"}>
      <section className="menu">
        <p className={"semi-title"}>메뉴</p>
        <section className={"menus"}>
          <section className={"batting"}>
            <p className={"title"}>함께 배팅 목록들을 확인해볼까요?</p>
            <p className={"link"}>배팅목록으로 바로가기 {arrow}</p>
            <img className={"sparkles"} src={sparkles_3d} alt="" />
          </section>
          <section className={"ranking"}>
            <p className={"title"}>다른 사람들의 랭킹도 확인해볼까요?</p>
            <p className={"link"}>랭킹으로 바로가기 {arrow}</p>
            <img className={"trophy"} src={trophy_3d} alt="" />
          </section>
        </section>
      </section>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <AuthedBanner />
      <Menus />
    </>
  );
};

export default Home;
