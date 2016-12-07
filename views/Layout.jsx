var React = require('react');
var NavBar = require('./components/nav-bar.jsx');
let head = Helmet.rewind();

class Layout extends React.Component {
  render () {
    return (
      <html>
        <body>
          <div className="container">
            <NavBar />
            {this.props.children}
          </div>
        </body>
      </html>
    );
  }
}
module.exports = Layout;
