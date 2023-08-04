import Nav_Bar from "../../components/Nav_bar/index";
import Song_box from "../../components/Song_box";
import "./index.css";
import "./animations.css";
import Filter from "../../components/filters";
import { Search_Comp } from "../../components/Search_Component";
import { useEffect, useState } from "react";
import { XScreen } from "../../components/LoadingWindow";
import { LoadingScreen } from "../../components/LoadingWindow";

const Search = () => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [EmptyInput, setEmptyInput] = useState(true);
  const [contentToShow, setContentToShow] = useState(null);
  const [fetchDataSong, setFetchDataSong] = useState([]);
  const [dataArtistAndAlbum, setDataArtistAndAlbum] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3002/joins`);
      const dataSongs = await response.json();
      setFetchDataSong(dataSongs);
      setTimeout(() => {
        setLoading(false);
      }, 600);
    } catch (error) {
      console.log("fallo", error);
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }
  };
  // const fetchDataArtistAndAlbum = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3002/joins/albumandartist`
  //     );
  //     const data = await response.json();
  //     setDataArtistAndAlbum(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log("fallo", error);
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleBackArrowClick = () => {
    setInputFocused(false);
    setInputValue("");
    setEmptyInput(true);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setEmptyInput(value === "");
  };

  useEffect(() => {
    const changeContentWithDelay = (content) => {
      setTimeout(() => {
        setContentToShow(content);
      }, 100);
    };

    switch (true) {
      case EmptyInput && !isInputFocused:
        changeContentWithDelay(
          <div className={`search_top20_cont slide-bl`} id="elementToAnimate2">
            <div className="search_top20_title">
              <p>Top 20s</p>
              <hr />
            </div>
            <div className="search_top20">
              {loading ? (
                <LoadingScreen />
              ) : fetchDataSong.length > 0 ? (
                fetchDataSong.map((song) => (
                  <Song_box
                    key={song.song_id}
                    title={song.song_name}
                    artist={song.artist_name}
                    url={song.song_image_url}
                  />
                ))
              ) : (
                <div>No se encontraron resultados</div>
              )}
            </div>
          </div>
        );
        break;
      case !EmptyInput && isInputFocused:
        // Filtrar el array fetchDataSong en función del texto ingresado
        const filteredSongs = fetchDataSong.filter((song) =>
          song.song_name.toLowerCase().includes(inputValue.toLowerCase())
        );

        changeContentWithDelay(
          <div className="search_active last_search slide-right" id="elementToAnimate4">
            <div className="search_last_search_title2">
              <p>Resultado Sugerido</p>
            </div>
            <div className="last_search_cont">
              {filteredSongs.map((song) => (
                <Search_Comp
                  key={song.song_id}
                  url={song.song_image_url}
                  title={song.artist_name}
                  subtitle={song.song_name}
                />
              ))}
            </div>
          </div>
        );
        break;
      case EmptyInput && isInputFocused:
        changeContentWithDelay(
          <div className="search_active last_search slide-right" id="elementToAnimate4">
            <div className="search_last_search_title2">
              <p>Resultado Sugerido</p>
            </div>
            <div className="last_search_cont">
              {loading ? (
                <LoadingScreen />
              ) : fetchDataSong.length > 0 ? (
                fetchDataSong.map((song) => (
                  <Search_Comp
                    key={song.song_id}
                    title={song.song_name}
                    artist={song.artist_name}
                    url={song.song_image_url}
                  />
                ))
              ) : (
                <div>No se encontraron resultados</div>
              )}
            </div>
          </div>
        );
        break;
      default:
        setContentToShow(null);
    }
  }, [isInputFocused, inputValue, EmptyInput, loading]);

  useEffect(() => {
    const elementToAnimate = document.getElementById("elementToAnimate");
    const elementToAnimate2 = document.getElementById("elementToAnimate2");
    const elementToAnimate3 = document.getElementById("elementToAnimate3");
    const elementToAnimate4 = document.getElementById("elementToAnimate4");

    if (isInputFocused) {
      elementToAnimate.classList.add("slide-top");
      elementToAnimate.classList.remove("slide-bottom");
    } else {
      elementToAnimate.classList.add("slide-bottom");
      elementToAnimate.classList.remove("slide-top");
    }

    if (elementToAnimate2) {
      if (isInputFocused) {
        elementToAnimate2.classList.add("slide-tr");
        elementToAnimate2.classList.remove("slide-bl");
      } else {
        elementToAnimate2.classList.add("slide-bl");
        elementToAnimate2.classList.remove("slide-tr");
      }
    }

    if (elementToAnimate3) {
      if (!isInputFocused) {
        elementToAnimate3.classList.add("slide-left");
        elementToAnimate3.classList.remove("slide-right");
      } else {
        elementToAnimate3.classList.add("slide-right");
        elementToAnimate3.classList.remove("slide-left");
      }
    }

    if (elementToAnimate4) {
      if (!isInputFocused) {
        elementToAnimate4.classList.add("slide-left");
        elementToAnimate4.classList.remove("slide-right");
      } else {
        elementToAnimate3.classList.add("slide-right");
        elementToAnimate3.classList.remove("slide-left");
      }
    }
  }, [isInputFocused]);

  return (
    <div className="search_cont">
      <div className="search_header">
        <h1 className={`search_header_title `} style={{ display: !isInputFocused ? "flex" : "none" }}>
          Buscador
        </h1>
        <form action="" className="search_header_form">
          <input
            type="text"
            id="elementToAnimate"
            className={`search_header_input`}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            value={inputValue}
            style={{
              border: isInputFocused ? "2px solid #FF8E0A" : "2px solid #BFC0C1",
            }}
          />
          {!isInputFocused ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={`search_header_input_icon ${isInputFocused ? "slide-top" : "slide-bottom"}`}>
              <path
                d="M21.7417 21.7417L17.0806 17.0723M17.0806 17.0723C18.7343 15.4164 19.6637 13.1722 19.6637 10.8318M17.0806 17.0723L17.0787 17.0746M19.6637 10.8318C19.6637 8.48948 18.7332 6.24307 17.0769 4.58678C15.4206 2.93049 13.1742 2 10.8318 2C8.48948 2 6.24307 2.93049 4.58678 4.58678C2.93049 6.24307 2 8.48948 2 10.8318C2 13.1742 2.93049 15.4206 4.58678 17.0769C6.24307 18.7332 8.48948 19.6637 10.8318 19.6637C13.1742 19.6637 15.4206 18.7332 17.0769 17.0769L17.0787 17.0746M19.6637 10.8318C19.6637 13.1732 18.7337 15.4185 17.0787 17.0746"
                stroke="#BFC0C1"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`search_header_input_icon ${isInputFocused ? "slide-top" : "slide-bottom"}`}
              onClick={handleBackArrowClick}>
              <path d="M4 12L20 12M11 5L4 12L11 19" stroke="#26262E" />
            </svg>
          )}
        </form>
        <div className="search_header_filters" style={{ display: !EmptyInput ? "flex" : "none" }}>
          <Filter text="Top" class="fActive"></Filter>
          <Filter text="Canciones" class="fUnactive"></Filter>
          <Filter text="Albumes" class="fUnactive"></Filter>
          <Filter text="Artistas" class="fUnactive"></Filter>
          <Filter text="Playlists" class="fUnactive"></Filter>
          <Filter text="Perfiles" class="fUnactive"></Filter>
        </div>
      </div>
      {contentToShow}
      <Nav_Bar />
    </div>
  );
};

export default Search;
