import Post from "../components/Post";
const Home = () => {
  document.title = "JustSmile | Home";
  return (
    <div className=" max-w-[41rem]">
      <Post />
    </div>
  );
};

export default Home;
