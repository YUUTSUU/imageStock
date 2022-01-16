import Masonry from 'react-masonry-css'
import {useDispatch, useSelector} from 'react-redux'
import {favoritesImagesDeleteDispatch} from '../../redux/slice/favoritesSlice'
import Spinner from '../../component/spinner/Spinner'
import Content from '../../component/content/Content'
import Menu from '../../component/menu/Menu'
import Mode from '../../component/mode/Mode'

const FavoritePage = () => {
  const {images} = useSelector(state => state.favorites)
  const dispatch = useDispatch()

  const favoritesImagesDelete = (id) => {
    dispatch(favoritesImagesDeleteDispatch(id))
  }

  return (
    <div className='main__page'>
      <div className="container">
        <Menu />
        <div className='content'>
          {<Mode />}
          {images.lenght < 1 ? <Spinner key={0} /> : null}
          <Masonry
            breakpointCols={{
              default: 3,
              850: 2,
              650: 1,
            }}
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