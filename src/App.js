import {Component} from 'react'

import LanguageTabButtons from './components/LanguageTabButtons'
import LanguageGreetings from './components/LanguageGreetings'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeLanguage: languageGreetingsList[0].id,
  }

  changeLanguage = tabId => {
    this.setState({activeLanguage: tabId})
  }

  getActiveButton = () => {
    const {activeLanguage} = this.state
    const filteredProject = languageGreetingsList.filter(
      eachItem => eachItem.id === activeLanguage,
    )
    return filteredProject
  }

  render() {
    const {activeLanguage} = this.state
    const filteredProject = this.getActiveButton()

    return (
      <div className="main-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="languageButtonList">
          {languageGreetingsList.map(eachItem => (
            <LanguageTabButtons
              key={eachItem.id}
              buttonDetails={eachItem}
              changeLanguage={this.changeLanguage}
              isActive={activeLanguage === eachItem.id}
            />
          ))}
        </ul>

        {filteredProject.map(eachItem => (
          <LanguageGreetings key={eachItem.id} LanguageDetails={eachItem} />
        ))}
      </div>
    )
  }
}

export default App
