ons.ready(() => {
  if (localStorage.getItem(USER_KEY)) {
    ReactDOM.render(<MyPage />, document.getElementById('app'));
  } else {
    ReactDOM.render(<LoginPage />, document.getElementById('app'));
  }
});