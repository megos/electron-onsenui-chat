const LoginPage = React.createClass({
  getInitialState: function() {
    return {
      username: ''
    };
  },

  onSubmit: function(e) {
    e.preventDefault();
    if (this.state.username.trim() === '') {
      return false;
    }
    localStorage.setItem(USER_KEY, this.state.username);
    ReactDOM.render(<MyPage />, document.getElementById('app'));
  },

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  },

  render: function() {
    return (
      <Ons.Page>
        <form onSubmit={this.onSubmit} className='login_form'>
          <p>Welcome to Electron Onsen UI Chat!</p>
          <p>
            <Ons.Input
              value={this.state.username}
              onChange={this.handleUsernameChange}
              modifier='underbar'
              float
              required
              MaxLength='10'
              placeholder='Username' />
          </p>
          <p>
            <Ons.Button onClick={this.onSubmit}>Sign in</Ons.Button>
          </p>
        </form>
      </Ons.Page>
    );
  }
});