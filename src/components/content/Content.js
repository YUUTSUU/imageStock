import {useCallback, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Masonry from 'react-masonry-css'
import {unsplashRequest, favoritesRequest} from '../../redux/slice/menuSlice'
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

  const {search, history, mode, unsplash} = useSelector((state) => state.menu)
  const dispatch = useDispatch()

  const onDisabled = useCallback(() => {
    setDisabled(false)
  }, [])

  const onLoaded = useCallback((data) => {
    dispatch(unsplashRequest(data))
    setLoading(false)
  }, [dispatch])

  const onError = useCallback(() => {
    setError(true)
    setLoading(false)
  }, [])

  const onFavorites = useCallback((event) => {
    if (event.target.nodeName === 'IMG') {
      dispatch(favoritesRequest(event.target.id))
    }
  }, [dispatch])

  const onRequest = useCallback(async (search, offset) => {
    try {
      onDisabled()
      const res = await service(search, offset)
      onLoaded(res.data)
      setOffset(prevOffset => prevOffset + 24)
      setTotal(res.total)
    } catch (e) {
      onError()
    }
  }, [onDisabled, onError, onLoaded])

  const scrollHandler = useCallback((event) => {
    const scrollHeight = event.target.documentElement.scrollHeight
    const scrollTop = event.target.documentElement.scrollTop
    const clientHeight = event.target.documentElement.clientHeight

    if (scrollHeight - scrollTop === clientHeight && unsplash.length < total) {
      onRequest('all', offset)
    }
  }, [offset, onRequest, total, unsplash])

  useEffect(() => {
    if (disabled) {
      onRequest()
    }
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [disabled, onRequest, scrollHandler, unsplash])

  const renderContent = (data) => {
    const content = data.map(item => {
      return (
        <div key={item.id} className='content__item' >
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
        </div>
      )
    })

    return (
      <Masonry breakpointCols={mode ? 1 : 3} className='content__list'>
        {content}
      </Masonry>
    )
  }

  return (
    <div className='content'>
      {search || history ? null : <Mode />}
      {loading ? <Spinner /> : null}
      {!(loading || error) ? renderContent(unsplash) : null}
    </div>
  )
}

export default Content