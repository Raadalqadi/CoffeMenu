
import "../style/Header.css"
import SlideShow from "../components/Elements/SlideShow/SlideShow"
import img1 from "../assets/imgs/coffeBg2.jpg"
import img2 from "../assets/imgs/image.png"
import img3 from "../assets/imgs/coffeBg3.jpg"

export const Header = () => {
  const imgUrl = [img1, img2, img3, img1, img2, img3, img1];
  return (
    <header>
      <div className="top_head">
        <h2>4SOFTWARE</h2>
      </div>
      <div className="ads-content">
        <SlideShow img_url={imgUrl} ></SlideShow>
      </div>
    </header>
  )
}
