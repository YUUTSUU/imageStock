import {useState} from 'react'
import Menu from '../../components/menu/Menu'
// import Search from '../../components/search/Search'
// import History from '../../components/history/History'
import Mode from '../../components/mode/Mode'
import Content from '../../components/content/Content'
// import './HomePage.scss'

const Home = () => {
  const [componentState, setComponentState] = useState({search: false, history: false})

  const componentShow = (event) => {
    switch (event.target.closest('.menu__block').getAttribute('data-item')) {
      case "search":
        setComponentState((prevComponentState) => {
          return {
            ...componentState,
            search: !prevComponentState.search,
            history: false
          }
        })
        break
      case "history":
        setComponentState((prevComponentState) => {
          return {
            ...componentState,
            search: false,
            history: !prevComponentState.history
          }
        })
        break
      default:
        return {
          ...componentState
        }
    }
  }


  return (
    <div className='home'>
      {/* <section className='header'>
        <div className="container">
          <Menu componentShow={componentShow} componentState={componentState} />
          {componentState.search ? <Search /> : null}
          {componentState.history ? <History /> : null}
        </div>
      </section>
      <section className='intro'>
        <div className='container'>
          <Mode />
          <Content />
        </div>
      </section> */}

      <div className="container">
        <Menu componentShow={componentShow} componentState={componentState} />
        {/* {componentState.search ? <Search /> : null}
        {componentState.history ? <History /> : null} */}
        <Mode />
        <Content />
      </div>
    </div>
  )
}

export default Home