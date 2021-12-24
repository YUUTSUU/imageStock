import {useCallback, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {contentImageAdd} from '../../redux/slice/menuSlice'
import service from '../../service/service'
import Mode from '../mode/Mode'
import Favorite from './img/favorite.svg'
import Download from './img/download.svg'
import Maximize from './img/maximize.svg'
import './Content.scss'

const Content = () => {
  const {search, history, mode, content} = useSelector((state) => state.menu)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const onRequest = useC


  const LoadedItem = (items) => {
    dispatch(contentImageAdd(items))
    setLoading(false)
  }

  const onError = () => {
    setError(true)
    setLoading(false)
  }

  // const favoritesId = (event) => {
  //   if (event.target.nodeName === 'IMG') {
  //     dispatch(favoritesAdd(event.target.id))
  //   }
  // }

  useEffect(() => {
    // onRequest()
    console.log("render")
  }, [onRequest])

  const contentItem = content.map(item => {
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
          <div className='content__icon'>
            <img src={Favorite} alt="favorite" id={item.id} />
            <img src={Maximize} alt="maximize" />
            <img src={Download} alt="download" />
          </div>
        </div>
      </li>
    )
  })

  return (
    <div className='content'>
      {search || history ? null : <Mode />}
      <ul className='content__list' style={mode ? {columnCount: "1"} : {columnCount: "3"}}>
        {contentItem}
      </ul>
    </div>
  )
}

export default Content