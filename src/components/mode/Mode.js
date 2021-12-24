import {useEffect, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {modeComponent, widthView} from '../../redux/slice/menuSlice'
import './Mode.scss'

const Mode = () => {
  const {mode} = useSelector((state) => state.menu)
  const dispatch = useDispatch()

  const View = useCallback(() => {
    dispatch(widthView())
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('resize', View)
    View()
    return () => {
      window.removeEventListener('resize', View)
    }
  }, [dispatch, View])

  return (
    <div className='mode'>
      <div className='mode__container'>
        <div data-item='rabbin'
          className={mode ? 'mode__block mode__ribbon active' : 'mode__block mode__ribbon'}
          onClick={(event) => dispatch(modeComponent(event))}>
          <span className='mode__item mode__item_ribbon'></span>
          <span className='mode__item mode__item_ribbon'></span>
        </div>
        <div data-item='tile'
          className={!mode ? 'mode__block mode__tile active' : 'mode__block mode__tile'}
          onClick={(event) => dispatch(modeComponent(event))}>
          <span className='mode__item mode__item_tile'></span>
          <span className='mode__item mode__item_tile'></span>
          <span className='mode__item mode__item_tile'></span>
          <span className='mode__item mode__item_tile'></span>
        </div>
      </div>
    </div>
  )
}

export default Mode