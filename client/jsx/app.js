const MyPage = React.createClass({

  getInitialState: function() {
    user_name = localStorage.getItem(USER_KEY);

    socket.on('msg', (data) => {
      new Notification(data.name, {
        body: data.message
      });
      let msg = this.state.messages;
      msg.unshift(data);
      this.setState({messages: msg});
    });

    return {
      messages: [],
      message: ''
    };
  },

  onChangeText(e) {
    this.setState({message: e.target.value});
  },

  onSubmit: function(e) {
    e.preventDefault();
    if (this.state.message.trim() === '') {
      return false;
    }

    socket.json.emit('msg', {
      message: this.state.message,
      name: user_name
    });
    this.setState({message: ''});
  },

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>TimeLine</div>
      </Ons.Toolbar>
    );
  },

  renderRow: function(item, index) {
    return (
      <Ons.ListItem
        key={index}
        id={`msg-${index}`}
        className='message_item'>
        <Ons.Row className='user_name'>
          <Ons.Col>
            @{item.name}
          </Ons.Col>
        </Ons.Row>
        <Ons.Row>
          <Ons.Col className='selectable'>
            {item.message}
          </Ons.Col>
        </Ons.Row>
      </Ons.ListItem>
    );
  },

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
          <form onSubmit={this.onSubmit} className='form_area'>
            <Ons.Row>
              <Ons.Col width='80%'>
                <textarea
                  className='textarea textarea--transparent'
                  placeholder='add message...'
                  required
                  value={this.state.message}
                  onChange={this.onChangeText}
                  maxLength='108'
                />
              </Ons.Col>
              <Ons.Col className='submit_btn_col'>
                <Ons.Button className='submit_btn' type='submit' width='100%' onClick={this.onSubmit}>
                Send
                </Ons.Button>
              </Ons.Col>
            </Ons.Row>
          </form>
          <div className='message_list'>
            <Ons.List
              dataSource={this.state.messages}
              renderRow={this.renderRow}
            />
          </div>

      </Ons.Page>
    );
  }
});