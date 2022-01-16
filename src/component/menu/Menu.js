import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {navigationSearchDispatch, navigationHistoryDispatch, navigationFavoritesDispatch} from '../../redux/slice/navigationSlice'
import {historyDipatch} from '../../redux/slice/historySlice'
import BrandImage from '../../assets/brand.svg'
import SearchImage from '../../assets/search.svg'
import FavoritesImage from '../../assets/favorite.svg'
import HistoryImage from '../../assets/history.svg'
import Search from '../search/Search'
import History from '../history/History'

const Menu = () => {
  const navigate = useNavigate()
  const {searchToggle, historyToggle} = useSelector(state => state.navigation)
  const {recommendations} = useSelector(state => state.history)
  const {history} = useSelector(state => state.history)
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  const textHandler = (e) => {
    setText(e.target.value)
  }

  const queryHandler = (e) => {
    e.preventDefault()
    if (text !== "") {
      dispatch(historyDipatch(text.slice().toLowerCase()))
      navigate(`/search/${ text.slice().toLowerCase() }`)
      setText(text.slice().toLowerCase())
    }
  }

  const deleteHandler = (e) => {
    e.preventDefault()
    setText('')
  }

  const historyQueryHandler = (e) => {
    navigate(`/search/${ e.target.textContent.slice().toLowerCase() }`)
    dispatch(historyDipatch(e.target.textContent.slice().toLowerCase()))
    setText(e.target.textContent.slice().toLowerCase())
  }

  return (
    <div className='menu' style={searchToggle || historyToggle ? {padding: "5.6rem"} : null}>
      <div className='menu__inner'>
        <div className='menu__navigation'>
          <div className='menu__brand'>
            <Link to='/' className='menu__block'>
              <div className='menu__image'>
                <img src={BrandImage} alt="logo" />
              </div>
              <div className='menu__text'>ImageStock</div>
            </Link>
          </div>
          <div className='menu__container'>
            <div className={searchToggle ? 'menu__block menu__block_line active' : 'menu__block menu__block_line'}
              onClick={(event) => dispatch(navigationSearchDispatch(event))}>
              <div className='menu__image'>
                <img src={SearchImage} alt="search" />
              </div>
              <div className='menu__text'>Поиск</div>
            </div>
            <Link to='/favorites' className='menu__block menu__block_line'
              onClick={() => dispatch(navigationFavoritesDispatch())} >
              <div className='menu__image'>
                <img src={FavoritesImage} alt="favorites" />
              </div>
              <div className='menu__text'>Избранное</div>
            </Link>
            <div
              className={historyToggle ? 'menu__block menu__block_line active' : 'menu__block menu__block_line'}
              onClick={(event) => dispatch(navigationHistoryDispatch(event))}
            >
              <div className='menu__image'>
                <img src={HistoryImage} alt="history" />
              </div>
              <div className='menu__text'>История поиска</div>
            </div>
          </div>
        </div>
      </div>
      {searchToggle ?
        <Search
          text={text}
          textHandler={textHandler}
          queryHandler={queryHandler}
          historyQueryHandler={historyQueryHandler}
          deleteHandler={deleteHandler}
          recommendations={recommendations}
        /> : null}
      {historyToggle ? <History historyQueryHandler={historyQueryHandler} history={history} /> : null}
    </div>
  )
}

export default Menu