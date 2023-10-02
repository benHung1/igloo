import Marquee from "./components/Marquee";
import Products from "./components/Products";
import TopicCards from "./components/TopicCards";
import Video from "./components/Video";

export default function Home() {
  return (
    <>
      <Video />
      <Products />
      <TopicCards />
      <Marquee />
    </>
  );
}
