import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <div>
      <h1>{location.state.title}</h1>
      <h3>{location.state.year}</h3>
      <h3>{location.state.genres}</h3>
      <h4>{location.state.summary}</h4>
      <img src={location.state.poster} />
      </div>
    } else {
      return null;
    }
  }
}
export default Detail;