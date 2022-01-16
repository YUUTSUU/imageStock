import {useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-css'
import {useDispatch} from 'react-redux'
import {favoritesIdDispatch, favoritesImagesDispatch} from '../../redux/slice/favoritesSlice'
import {searchService} from '../../service/service'
import Spinner from '../../component/spinner/Spinner'
import Content from '../../component/content/Content'
import Menu from '../../component/menu/Menu'
import Mode from '../../component/mode/Mode'
import {useParams} from 'react-router-dom'

const SearchPage = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [images, setImages] = useState([])
  const {name} = useParams()

  const favoritesIdImages = (id) => {
    dispatch(favoritesIdDispatch(id))
    dispatch(favoritesImagesDispatch(images))
  }

  const fetchImage = (query) => {
    searchService(query, page)
      .then(res => {
        setImages(prevImages => [...prevImages, ...res.results.filter(item => !prevImages.some(items => items.id === item.id))])
        setTotal(res.total_pages)
        setPage(prevPage => prevPage + 1)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }

  useEffect(() => {
    if (name !== '') {
      setPage(1)
      setImages([])
      fetchImage(name)
    }
    // eslint-disable-next-line
  }, [name])

  return (
    <div className='main__page'>
      <div className="container">
        <Menu />
        <div className='content'>
          {<Mode />}
          {loading ? <Spinner /> : null}
          <InfiniteScroll
            pageStart={page}
            loadMore={() => fetchImage(name)}
            hasMore={page < total}
            threshold={1500}
            loader={<Spinner key={0} />}
            initialLoad={false}
          >
            <Masonry
              breakpointCols={{
                default: 3,
                850: 2,
                650: 1,
              }}
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

export default SearchPage