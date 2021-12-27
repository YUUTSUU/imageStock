import img from './img/search.svg'

const Search = ({
  text,
  textHandler,
  queryHandler,
  history, 
  historyQueryHandler
}) => {
  return (
    <div className='search'>
      <form className='search__form'>
        <input type="text"
          className='search__title'
          placeholder='Поиск'
          name='search'
          onChange={textHandler}
          value={text}
        />
        <button type='submit'
          className='search__button'
          onClick={queryHandler}>
          <img src={img} alt="Search" />
        </button>
      </form>
      <div className='search__line'></div>
      <ul className='search__list'>
        {history.map((item, i) => (<li key={i} className="search__item" onClick={historyQueryHandler}>{item}</li>))}
      </ul>
    </div>
  )
}

export default Search