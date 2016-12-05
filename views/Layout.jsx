var React = require('react');
var NavBar = require('./components/nav-bar.jsx');
var Helmet = require('react-helmet');
let head = Helmet.rewind();

class Layout extends React.Component {
  render () {
    return (
      <html>
        <Helmet>
          meta={[
            'charset':'utf-8'
          ]}
          title="Server Side React!"
        </Helmet>

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

class Bootstrap extends React.Component {
  render() {
    return (
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
    );
  }
}

class JQuery extends React.Component {
  render() {
    return (
      <script src="https://code.jquery.com/jquery-2.2.4.min.js"
			  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
			  crossorigin="anonymous"></script>
    );
  }
}

class BootstrapJS extends React.Component {
  render() {
    return (
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    );
  }
}

module.exports = Layout;
