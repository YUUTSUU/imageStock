import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {searchValueAdd} from '../../redux/slice/menuSlice'
import img from './search.svg'
import './Search.scss'

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const {searchData} = useSelector((state) => state.menu)
  const dispatch = useDispatch()

  const inputValue = (event) => {
    setSearchInput(event.target.value)
  }

  const inputValueAdd = (event) => {
    event.preventDefault()
    dispatch(searchValueAdd(searchInput))
  }

  useEffect(() => {
    console.log(searchData)
  }, [searchData])

  return (
    <div className='search'>
      <form className='search__form'>
        <input type="text"
          className='search__title'
          placeholder='Поиск'
          name='search'
          onChange={(event) => inputValue(event)} />
        <button type='submit'
          className='search__button'
          onClick={(event) => inputValueAdd(event)}>
          <img src={img} alt="Search" />
        </button>
      </form>
      <div className='search__line'></div>
      <ul className='search__list'>
        {searchData.map((item, i) => (<li key={i} className="search__item">{item}</li>))}
      </ul>
    </div>
  )
}

export default Search