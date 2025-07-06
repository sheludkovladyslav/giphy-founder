import React from "react";
import axios from "axios";
import "./gifs.css";

axios.defaults.baseURL = "https://api.giphy.com/v1/gifs/";

export default class GifList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      error: "",
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await axios.get(
        `search?api_key=igEgHsd5DasExA0dZOdVqs5PW0PKZo1a&q=${this.props.query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      );
      const hits = response.data.data;
      this.setState({
        gifs: hits,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error: error,
      });
    }
  }

  render() {
    const { gifs, error, isLoading } = this.state;
    console.log(gifs);

    return (
      <>
        <h2 style={{ fontSize: 36, textAlign: "center" }}>
          Рендер картинок за пропсом
        </h2>
        {error && <p style={{ color: "red" }}>Error: {error.message}</p>}

        {isLoading && <p>Loading...</p>}

        {gifs.length > 0 && (
          <>
            <ul className="gifs">
              {gifs.map((gif) => {
                return (
                  <li className="gif">
                    <img
                      src={gif.images.fixed_height.url}
                      width={gif.images.fixed_height.width}
                      height={gif.images.fixed_height.height}
                      alt=""
                    />
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </>
    );
  }
}
