import Nav_Bar from "../../components/Nav_bar/index";
import Song_box from "../../components/Song_box";
import "./index.css";
import { Default_btn_Active, Default_btn_Inactive } from "../../components/Default_btn";

const Search = () => {
  return (
    <div className="search_cont">
      <div className="search_header">
        <h1 className="search_header_title">Buscador</h1>
        <form action="" className="search_header_form">
          <input type="text" className="search_header_input" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="search_header_input_icon">
            <path
              d="M21.7417 21.7417L17.0806 17.0723M17.0806 17.0723C18.7343 15.4164 19.6637 13.1722 19.6637 10.8318M17.0806 17.0723L17.0787 17.0746M19.6637 10.8318C19.6637 8.48948 18.7332 6.24307 17.0769 4.58678C15.4206 2.93049 13.1742 2 10.8318 2C8.48948 2 6.24307 2.93049 4.58678 4.58678C2.93049 6.24307 2 8.48948 2 10.8318C2 13.1742 2.93049 15.4206 4.58678 17.0769C6.24307 18.7332 8.48948 19.6637 10.8318 19.6637C13.1742 19.6637 15.4206 18.7332 17.0769 17.0769L17.0787 17.0746M19.6637 10.8318C19.6637 13.1732 18.7337 15.4185 17.0787 17.0746"
              stroke="#BFC0C1"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </form>
        <div className="search_header_filters">Default_Btn</div>
      </div>
      <div className="search_top20_cont">
        <div className="search_top20_title">
          <p>Top 20s</p>
          <hr />
        </div>
        <div className="search_top20">
          <Song_box
            title="Flowers"
            artist="Miley Cyrus"
            url="https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d"
          />
          <Song_box
            title="Flowers"
            artist="Miley Cyrus"
            url="https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d"
          />
          <Song_box
            title="Flowers"
            artist="Miley Cyrus"
            url="https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d"
          />
          <Song_box
            title="Flowers"
            artist="Miley Cyrus"
            url="https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d"
          />
          <Song_box
            title="Flowers"
            artist="Miley Cyrus"
            url="https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d"
          />
        </div>
        <div className="search_active last_search">
          <div className="search_top20_title">
            <p>Busqueda Reciente</p>
            <hr />
          </div>
        </div>
      </div>
      <Nav_Bar />
    </div>
  );
};

export default Search;
