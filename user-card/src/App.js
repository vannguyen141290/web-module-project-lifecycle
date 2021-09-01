import './index.css';
import React from 'react';
import UserCard from './components/UserCard';
import userArray from './userData';
import Search from './components/Search';


class App extends React.Component {
  state = {
    searchTerm: '',
    users: userArray
  };

  handleChange = e => {
    this.setState({searchTerm: e.target.value})
  };

  render() {
    const newArr = this.state.users.filter(user => {
      return (user.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    });
    return (
      <div className="App">
        <h1>GitHub Users</h1>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
        <div className='user-cards-container'>
          {newArr.map(user => {
            return <UserCard key={user} username={user}/>
          })}
        </div>

      </div>
    )
  }
};

export default App;
