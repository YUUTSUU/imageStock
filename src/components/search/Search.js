import './Search.scss'

const Search = () => {
  return (
    <div className='search'>
      <div className='search__header'>
        <input type="text" className='search__title' placeholder='Поиск'/>
      </div>
      <div className='search__line'></div>
      <div className='search__block'>
        <ul className='search__list'>
          <li className="search__item">Wallpapers</li>
          <li className="search__item">Textures & Patterns</li>
          <li className="search__item">Nature</li>
          <li className="search__item">Current Events</li>
          <li className="search__item">Architecture</li>
          <li className="search__item">Business & Work</li>
          <li className="search__item">Film</li>
          <li className="search__item">Animals</li>
          <li className="search__item">Travel</li>
          <li className="search__item">Fashion</li>
          <li className="search__item">Food & Drink</li>
          <li className="search__item">Spirituality</li>
        </ul>
      </div>
    </div> 
  )
}

export default Search