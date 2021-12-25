import {useEffect, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {modeHandler, windowHandler} from '../../redux/slice/modeSlice'
import './Mode.scss'

const Mode = () => {
  const {mode} = useSelector(state => state.mode)
  const dispatch = useDispatch()

  const handler = useCallback(() => {
    dispatch(windowHandler())
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('resize', handler)
    handler()
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [dispatch, handler])

  return (
    <div className='mode'>
      <div className='mode__container'>
        <div data-item='rabbin'
          className={mode ? 'mode__block mode__ribbon active' : 'mode__block mode__ribbon'}
          onClick={(event) => dispatch(modeHandler(event))}>
          <span className='mode__item mode__item_ribbon'></span>
          <span className='mode__item mode__item_ribbon'></span>
        </div>
        <div data-item='tile'
          className={!mode ? 'mode__block mode__tile active' : 'mode__block mode__tile'}
          onClick={(event) => dispatch(modeHandler(event))}>
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