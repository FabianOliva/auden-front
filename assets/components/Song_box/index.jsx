import "./index.css";

const Song_box = (props) => {
  return (
    <div className="Song_box_cont">
      <div className="Song_box_img_cont">
        <img src={props.url} alt="" />
      </div>
      <div className="Song_box_text_cont">
        <p className="Song_box_text_title">{props.title}</p>
        <p className="Song_box_text_artist">{props.artist}</p>
      </div>
    </div>
  );
};

export default Song_box;
