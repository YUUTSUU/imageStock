import {useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-css'
import {useDispatch, useSelector} from 'react-redux'
import {favoritesIdDispatch, favoritesImagesDispatch} from '../../redux/slice/favoritesSlice'
import {windowHandler} from '../../redux/slice/modeSlice'
import {photoService} from '../../service/service'
import Spinner from '../../component/spinner/Spinner'
import Content from '../../component/content/Content'
import Menu from '../../component/menu/Menu'
import Mode from '../../component/mode/Mode'

const MainPage = () => {
  const dispatch = useDispatch()
  const {mode, column} = useSelector(state => state.mode)
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(true)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [images, setImages] = useState([])

  const favoritesIdImages = (e) => {
    dispatch(favoritesIdDispatch(e))
    dispatch(favoritesImagesDispatch(images))
  }

  const fetchImage = (page) => {
    photoService(page)
      .then(res => {
        setImages([...images, ...res.results])
        setTotal(res.total / res.results.length)
        setPage(prevPage => prevPage + 1)
        setLoading(false)
        setLoaded(false)
        console.log('request-main-page')
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
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

  useEffect(() => {
    if (loaded) {
      fetchImage(page)
    }
    console.log('render-main-page')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='main__page'>
      <div className="container">
        <Menu />
        <div className='content'>
          {<Mode mode={mode} />}
          {loading ? <Spinner /> : null}
          <InfiniteScroll
            pageStart={page}
            loadMore={() => fetchImage(page)}
            hasMore={page < total ? true : false}
            threshold={1500}
            loader={<Spinner key={0} />}
            initialLoad={false}
          >
            <Masonry
              breakpointCols={column}
              className='content__list'
              columnClassName='content__column'
            >
              {!loading ?
                images.map(item => <Content key={item.id} {...item} favoritesIdImages={favoritesIdImages} verify={true} />) : null}
            </Masonry>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  )
}

export default MainPage