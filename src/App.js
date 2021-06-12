import React, {Component} from 'react';

import  {CardList} from './component/card-list/card-list-component'
import { SearchBox } from './component/search-box/search-box-component';

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    
    this.handleChange =  e => this.setState({searchField: e.target.value}, () => console.log(this.state.searchField));
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    const { monsters, searchField}  = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox placeholder='monsters hunt' changeHandler={this.handleChange}  />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
