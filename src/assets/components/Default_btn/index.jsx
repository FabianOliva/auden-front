export const Default_btn_Active = (props) => {
  return (
    <a href="" className="Default_btn-orange">
      {props.text}
    </a>
  );
};

export const Default_btn_login = (props) => {
  return (
    <a href="" className="Default_btn-orange">
      <img src={props.img} alt="" />
      {props.text}
    </a>
  );
};

export const Default_btn_Inactive = (props) => {
  return (
    <a href="" className="Default_btn-orange">
      {props.text}
    </a>
  );
};
