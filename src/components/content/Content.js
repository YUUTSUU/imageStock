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
import './Content.scss'

const Content = () => {
  const [loading, setLoading] = useState(true)
  const [disabled, setDisabled] = useState(true)
  const [error, setError] = useState(false)
  const [offset, setOffset] = useState(1)
  const [total, setTotal] = useState(0)

  const {searchComponent, historyComponent} = useSelector(state => state.navigation)
  const {mode} = useSelector(state => state.mode)
  const {search} = useSelector((state) => state.search)
  const {content} = useSelector((state) => state.request)
  const dispatch = useDispatch()

  const onDisabled = useCallback(() => {
    setDisabled(false)
  }, [])

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

  const onRequest = useCallback(async (query, offset) => {
    try {
      onDisabled()
      const res = await service(query, offset)
      onLoaded(res.data)
      setOffset(prevOffset => prevOffset + 24)
      setTotal(res.total)
      console.log('onRequest')
    } catch (e) {
      onError()
    }
  }, [onDisabled, onError, onLoaded])

  // const scrollHandler = useCallback((event) => {
  //   const scrollHeight = event.target.documentElement.scrollHeight
  //   const scrollTop = event.target.documentElement.scrollTop
  //   const clientHeight = event.target.documentElement.clientHeight

  //   if ((scrollHeight - scrollTop) === clientHeight && content.length < total) {
  //     onRequest(search, offset)
  //   }
  // }, [content, total, onRequest, search, offset])

  useEffect(() => {
    // document.addEventListener('scroll', scrollHandler)
    if (disabled) {
      onRequest(search)
    }

    console.log("render")
    // return () => {
    //   document.removeEventListener('scroll', scrollHandler)
    // }
  }, [onRequest, disabled, search])

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
        pageStart={offset}
        loadMore={() => onRequest(search, offset)}
        hasMore={content.length < total ? true : false}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <Masonry breakpointCols={mode ? 1 : 3} className='content__list' columnClassName='content__column'>
          {items}
        </Masonry>
      </InfiniteScroll>
    )
  }

  return (
    <div className='content'>
      {searchComponent || historyComponent ? null : <Mode />}
      {loading ? <Spinner /> : null}
      {!(loading || error) ? renderContent(content) : null}
    </div>
  )
}

export default Content