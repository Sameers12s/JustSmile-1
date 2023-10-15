// import { useFirestoreQuery } from "@react-query-firebase/firestore";
import Post from "../components/Post";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../services/firebase";
import { useEffect, useState } from "react";

const ref = collection(firestore, "posts");

const Home = () => {
  document.title = "JustSmile | Home";
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    getDocs(ref).then((qsnap) => {
      const posts = [];
      qsnap.forEach((doc) => posts.push({ id: doc.id, ...doc.data() }));
      setAllPosts(posts);
    });
  }, []);

  return (
    <div className=" max-w-[41rem]">
      {allPosts.map((p) => (
        <Post key={p.id} body={p.content} time={p.created_at} />
      ))}
    </div>
  );
};

export default Home;
