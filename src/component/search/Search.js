import {useSelector} from 'react-redux'
import img from './img/search.svg'
import deleteimg from './img/delete.png'

const Search = ({text, textHandler, queryHandler, historyQueryHandler, deleteHandler}) => {
  const {recommendations} = useSelector(state => state.history)
  return (
    <div className='search'>
      <form className='search__form'>
        <button type='submit'
          className='search__button'
          onClick={queryHandler}>
          <img src={img} alt="Search" />
        </button>
        <input type="text"
          className='search__title'
          placeholder='Поиск'
          name='search'
          onChange={textHandler}
          value={text}
        />
        <button
          className='search__button'
        onClick={deleteHandler}>
          <img className='search__button search__button_delete' src={deleteimg} alt="delete" />
        </button>
      </form>
      <div className='search__line'></div>
      <ul className='search__list'>
        {recommendations.map((item, i) => (<li key={i} className="search__item" onClick={historyQueryHandler}>{item}</li>))}
      </ul>
    </div>
  )
}

export default Search