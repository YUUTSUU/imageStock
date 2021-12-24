import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {searchRequest, unsplashRequest, unsplashClear} from '../../redux/slice/menuSlice'
import service from '../../service/service'
import img from './search.svg'
import {createApi} from 'unsplash-js';
import './Search.scss'

const Search = () => {
  const [input, setInput] = useState('')
  const {list} = useSelector((state) => state.menu)
  const dispatch = useDispatch()

  const unsplash = createApi({
    accessKey: 'zzqpeE42R5zzjnVmGgWJc7TzM73NJjwrDPRAFpgFJX8'
  })

  // const onRequest = useCallback(async (search, offset) => {
  //   try {
  //     // onDisabled()
  //     const res = await service(search, offset)
  //     onLoaded(res.data)
  //     console.log(res.data)
  //     setOffset(prevOffset => prevOffset + 24)
  //     // setTotal(res.total)
  //   } catch (e) {
  //     // onError()
  //   }
  // }, [onDisabled, onError, onLoaded])

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const onInput = async(event) => {
    event.preventDefault()
    dispatch(searchRequest(input))
    unsplash.search.getPhotos({query: 'cat'})
    .then(res => console.log(res.response.results[0].urls.regular))
    // const res = await service(input)
    // dispatch(unsplashClear())
    // dispatch(unsplashRequest(res.data))
  }

  useEffect(() => {
    console.log(list[list.length - 1])
    console.log(list)
  }, [list])

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
        {list.map((item, i) => (<li key={i} className="search__item">{item}</li>))}
      </ul>
    </div>
  )
}

export default Search