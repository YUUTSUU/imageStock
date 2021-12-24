import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {SearchHistorycomponent} from '../../redux/slice/menuSlice'
import SearchComponent from '../search/Search'
import HistoryComponent from '../history/History'
import Brand from './img/brand.svg'
import Search from './img/search.svg'
import Favorites from './img/favorite.svg'
import History from './img/history.svg'
import './Menu.scss'

const Menu = () => {
  const {search, history} = useSelector((state) => state.menu)
  const dispatch = useDispatch()

  return (
    <div className='menu' style={search || history ? {padding: "5.6rem"} : null}>
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
              className={search ? 'menu__block menu__block_line active' : 'menu__block menu__block_line'}
              onClick={(event) => dispatch(SearchHistorycomponent(event))}>
              <div className='menu__image'>
                <img src={Search} alt="search" />
              </div>
              <div className='menu__text'>Поиск</div>
            </div>
            <Link data-item='favorites' to='/favorites' className='menu__block menu__block_line'>
              <div className='menu__image'>
                <img src={Favorites} alt="favorites" />
              </div>
              <div className='menu__text'>Избранное</div>
            </Link>
            <div data-item='history'
              className={history ? 'menu__block menu__block_line active' : 'menu__block menu__block_line'}
              onClick={(event) => dispatch(SearchHistorycomponent(event))}>
              <div className='menu__image'>
                <img src={History} alt="history" />
              </div>
              <div className='menu__text'>История поиска</div>
            </div>
          </div>
        </div>
      </div>
      {search ? <SearchComponent /> : null}
      {history ? <HistoryComponent /> : null}
    </div>
  )
}

export default Menu