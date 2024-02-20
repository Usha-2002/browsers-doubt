import {Component} from 'react'
import './index.css'
import EachHistory from './components/EachHistory'

class BrowserFile extends Component {
  state = {
    searchInput: '',
  }
  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  onDeleteHistory = id => {
    const {detailsHistoryList} = this.props
    const filteredHistoryDetails = detailsHistoryList.filter(each => {
      each.id !== id
    })
    this.setState({detailsHistoryList: filteredHistoryDetails})
  }
  render() {
    const {searchInput} = this.state
    const {detailsHistoryList} = this.props
    const searchResults = detailsHistoryList.filter(eachHistory =>
      eachHistory.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="">
        <div className="">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
          <input
            type="search"
            className="search-input"
            placeholder="Search history"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
        </div>
        <div className="">
          <ul className="">
            {searchResults.map(eachHistory => (
              <EachHistory
                key={eachHistory.id}
                historyDetails={eachHistory}
                onDeleteHistory={this.onDeleteHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default BrowserFile
