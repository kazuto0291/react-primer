import React from 'react';

class Loginout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggetIn: false
    };
  }

  login() {
    this.setState({isLoggetIn: true});
  }

  logout() {
    this.setState({isLoggetIn: false})
  }

  render() {
    if (this.state.isLoggetIn) {
      return (
        <div>
          <PrivatePage />
          <button onClick={() => this.logout()}>ログアウト</button>
        </div>
      )
    }
    return (
      <div>
        <PublicPage />
        <button onClick={() => this.login()}>ログイン</button>
      </div>

    )
  }
}

export default Loginout;


const PublicPage = () => {
  const style = {
    backgroundColor: '#ff0'
  };

  return (
    <div style={style}>
      <h2>非ログイン時ページ</h2>
    </div>
  );
}

const PrivatePage = () => {
  const style = {
    backgroundColor: '#0f0'
  };

  return (
    <div style={style}>
      <h2>ログイン時のページ</h2>
    </div>
  );
};