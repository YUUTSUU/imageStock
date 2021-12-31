import {useEffect} from 'react'
import Masonry from 'react-masonry-css'
import {useDispatch, useSelector} from 'react-redux'
import {favoritesImagesDeleteDispatch} from '../../redux/slice/favoritesSlice'
import {windowHandler} from '../../redux/slice/modeSlice';
import Spinner from '../../component/spinner/Spinner'
import Content from '../../component/content/Content'
import Menu from '../../component/menu/Menu'
import Mode from '../../component/mode/Mode'

const FavoritePage = () => {
  const {images} = useSelector(state => state.favorites)
  const {mode, column} = useSelector(state => state.mode)
  const dispatch = useDispatch()

  const favoritesImagesDelete = (e) => {
    dispatch(favoritesImagesDeleteDispatch(e))
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(windowHandler())
    })

    return () => {
      window.removeEventListener("resize", () => {
        dispatch(windowHandler())
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='main__page'>
      <div className="container">
        <Menu />
        <div className='content'>
          {<Mode mode={mode}/>}
          {images.lenght < 1 ? <Spinner key={0} /> : null}
          <Masonry
            breakpointCols={column}
            className='content__list'
            columnClassName='content__column'
          >
            {images.map(item => <Content key={item.id} {...item} favoritesImagesDelete={favoritesImagesDelete} verify={false} />)}
          </Masonry>
        </div>
      </div>
    </div>
  )
}

export default FavoritePage