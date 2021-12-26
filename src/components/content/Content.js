import {useCallback, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-css'
import {favorite} from '../../redux/slice/favoriteSlice'
import {request} from '../../redux/slice/requestSlice'
import service from '../../service/service'
import Mode from '../mode/Mode'
import Favorite from './img/favorite.svg'
import Download from './img/download.svg'
import Maximize from './img/maximize.svg'
import Spinner from '../spinner/Spinner'
// import axios from 'axios';
import './Content.scss'

const Content = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [pageNum, setPageNum] = useState(1)
  const [total, setTotal] = useState(0)
  const [firstRequest, setFirstRequest] = useState(true)

  const {searchComponent, historyComponent} = useSelector(state => state.navigation)
  const {mode} = useSelector(state => state.mode)
  const {search} = useSelector((state) => state.search)
  const {content} = useSelector((state) => state.request)
  const {favorites} = useSelector((state) => state.favorite)
  const {switchContent} = useSelector((state) => state.switchContent)
  const dispatch = useDispatch()

  const onLoaded = useCallback((data) => {
    dispatch(request(data))
    setLoading(false)
  }, [dispatch])

  const onError = useCallback(() => {
    setError(true)
    setLoading(false)
  }, [])

  const onFavorites = useCallback((event) => {
    if (event.target.nodeName === 'IMG') {
      dispatch(favorite(event.target.id))
    }
  }, [dispatch])

  // const API = axios.create({
  //   baseURL: 'https://api.unsplash.com/search/photos',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   params: {
  //     client_id: 'zzqpeE42R5zzjnVmGgWJc7TzM73NJjwrDPRAFpgFJX8',
  //     safesearch: true,
  //   },
  // })

  const onRequest = useCallback(async (query, pageNum) => {
    try {
      const res = await service(query, pageNum)
      onLoaded(res.data)
      setPageNum(prevPageNum => prevPageNum + 24)
      setTotal(res.total_pages)
    } catch (e) {
      onError()
    }
  }, [onError, onLoaded])

  // useEffect(() => {
  //   API.get('/', {params: {page: 1, query: 'all'}})
  //     .then(res => console.log(res.data))
  //     .then(err => console.log(err))
  // },[API])

  useEffect(() => {
    if (firstRequest) {
      onRequest(search)
      setFirstRequest(false)
    }
    console.log("render")
  }, [firstRequest, onRequest, search])

  const renderContent = (content) => {
    const items = content.map(item => {
      return (
        <li key={item.id} className='content__item' >
          <a href="#/" className='content__link'>
            <img src={item.image} alt="img" className='content__image' />
          </a>
          <div className='content__block'>
            <div className='content__avatar'>
              <img src={item.profile_image} alt="avatar" />
              <div className='content__name'>
                <span>{item.first_name}</span>
                <span>{item.last_name}</span>
              </div>
              <div className='content__login'>
                {item.username}
              </div>
            </div>
            <div className='content__icon' onClick={onFavorites}>
              <img src={Favorite} alt="favorite" id={item.id} />
              <img src={Maximize} alt="maximize" />
              <img src={Download} alt="download" />
            </div>
          </div>
        </li>
      )
    })

    return (
      <InfiniteScroll
        pageStart={pageNum}
        loadMore={() => onRequest(search, pageNum)}
        hasMore={pageNum < total ? true : false}
        loader={<Spinner key={0} />}
      >
        <Masonry breakpointCols={mode ? 1 : 3} className='content__list' columnClassName='content__column'>
          {items}
        </Masonry>
      </InfiniteScroll>
    )
  }
  
  const items = switchContent ? favorites : content

  return (
    <div className='content'>
      {searchComponent || historyComponent ? null : <Mode />}
      {loading ? <Spinner /> : null}
      {!(loading || error) ? renderContent(items) : null}
    </div>
  )
}

export default Content