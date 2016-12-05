var React = require('react');

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <button type="button" className="navbar-toggle collapse" dataToggle="collapse" dataTarget="#frontpage-navi">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </nav>
    );
  }
}

module.exports = NavBar;
