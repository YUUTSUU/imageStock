// import {useState} from 'react'
import {Link} from 'react-router-dom'
import SearchComponent from '../search/Search'
import HistoryComponent from '../history/History'
import Brand from './img/brand.svg'
import Search from './img/search.svg'
import Favorites from './img/favorite.svg'
import History from './img/history.svg'

import './Menu.scss'

const Menu = ({componentShow, componentState}) => {
  // const [state, setState] = useState({search: false, favorites: false, history: false})

  // console.log(searchComponent)

  // const addClass = (event) => {
  //   switch (event.target.closest('.menu__block').getAttribute('data-item')) {
  //     case "search":
  //       setState((prevState) => {
  //         return {
  //           ...state,
  //           search: !prevState.search,
  //           history: false
  //         }
  //       })
  //       break
  //     case "history":
  //       setState((prevState) => {
  //         return {
  //           ...state,
  //           search: false,
  //           history: !prevState.history
  //         }
  //       })
  //       break
  //     default:
  //       return {
  //         ...state
  //       }
  //   }
  // }

  return (
    <div className='menu'>
      <div className='menu__inner'>
        <div className='menu__navigation'>
          <div className='menu__brand'>
            <Link to='/' className='menu__block'>
              <div className='menu__image'>
                <img src={Brand} alt="logo" />
              </div>
              <div className='menu__text'>ImageStock</div>
            </Link>
          </div>
          <div className='menu__container'>
            <div data-item='search'
              className={componentState.search ? 'menu__block active' : 'menu__block'}
              onClick={(event) => componentShow(event)}>
              <div className='menu__image'>
                <img src={Search} alt="search" />
              </div>
              <div className='menu__text'>Поиск</div>
            </div>
            <Link data-item='favorites' to='/favorites' className='menu__block'>
              <div className='menu__image'>
                <img src={Favorites} alt="favorites" />
              </div>
              <div className='menu__text'>Избранное</div>
            </Link>
            <div data-item='history'
              className={componentState.history ? 'menu__block active' : 'menu__block'}
              onClick={(event) => {componentShow(event)}}>
              <div className='menu__image'>
                <img src={History} alt="history" />
              </div>
              <div className='menu__text'>История поиска</div>
            </div>
          </div>
        </div>
      </div>
      {componentState.search ? <SearchComponent /> : null}
      {componentState.history ? <HistoryComponent /> : null}
    </div>
  )
}

export default Menu