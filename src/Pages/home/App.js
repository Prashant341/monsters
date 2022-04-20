import './App.css'
import React from 'react'

import CardList from '../../components/card-list/card-list.components'
import Search from '../../components/search/search.components'
class App extends React.Component{
        /**Step 1 */
  constructor(){
    super()
      this.state = {
        users: [],
        searchValue:''
      }
}
/**Step 4 */
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    /** return result => result.json() => Array[] */
    .then(result =>result.json())
    /* return Array[] => this.state = {users:monsters} */
    .then(monsters => this.setState(
          {
            users:monsters
          }
        )
    )
  }
/**Step 2 */
  handleOnChange = (event) => {
    this.setState({searchValue:event.target.value})
  }
  // let array = [1,2,3,4,5]
  // array.filter((value) => value = '')
  // [1,2,3,4,5]
 

  /**Step 2 */
  render(){
    const {users,searchValue } = this.state
    const filteredMonsters = users.filter(
      monster => monster.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  /*
  render(){
    const filteredMonsters = this.state.users.filter(
        (element, idx) => element.name === this.state.searchValue
    )*/
    /**Step 3 */
    return(
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <Search changing = {this.handleOnChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App