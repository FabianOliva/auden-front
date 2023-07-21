import "./index.css";
import X_Icon from "../../../public/icon-right-placeholder.svg";

export const Last_Search_Comp = (props) => {
  return (
    <div className="Last_Search_Comp">
      <div className="Last_Search_img">
        <img src={props.url} alt="" />
      </div>
      <div className="Last_Search_text">
        <p className="Last_Search_title">{props.title}</p>
        <p className="Last_Search_subtitle">{props.subtitle}</p>
      </div>
      <div className="Last_Search_delete">
        <img src={X_Icon} alt="" />
      </div>
    </div>
  );
};

export const Search_Comp = (props) => {
  return (
    <div className="Last_Search_Cont">
      <div className="Last_Search_Comp">
        <div className="Last_Search_img">
          <img src={props.url} alt="" />
        </div>
        <div className="Last_Search_text">
          <p className="Last_Search_title">{props.title}</p>
          <p className="Last_Search_subtitle">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};
