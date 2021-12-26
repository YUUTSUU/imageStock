import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {clear, request} from '../../redux/slice/requestSlice'
import {searchHandler} from '../../redux/slice/searchSlice'
import {searchRequest} from '../../redux/slice/historySlice'

import img from './search.svg'
import service from '../../service/service'
import './Search.scss'

const Search = () => {
  const [input, setInput] = useState('')
  const {history} = useSelector((state) => state.history)
  const dispatch = useDispatch()

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const onInput = async(event) => {
    event.preventDefault()
    dispatch(searchRequest(input))
    dispatch(clear())
    dispatch(searchHandler(input))
    const res = await service(input)
    dispatch(request(res.data))
  }

  // useEffect(() => {
  //   console.log(history[history.length - 1])
  //   console.log(history)
  // }, [history])

  return (
    <div className='search'>
      <form className='search__form'>
        <input type="text"
          className='search__title'
          placeholder='Поиск'
          name='search'
          onChange={(event) => inputHandler(event)} />
        <button type='submit'
          className='search__button'
          onClick={(event) => onInput(event)}>
          <img src={img} alt="Search" />
        </button>
      </form>
      <div className='search__line'></div>
      <ul className='search__list'>
        {history.map((item, i) => (<li key={i} className="search__item">{item}</li>))}
      </ul>
    </div>
  )
}

export default Search