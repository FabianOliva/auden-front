import "./index.css";

const Filter = (props) => {
  return <a className={`filter_component ${props.class}`}>{props.text}</a>;
};

export default Filter;
