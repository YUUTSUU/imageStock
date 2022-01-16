import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import Masonry from 'react-masonry-css'
import InfiniteScroll from 'react-infinite-scroller'
import {useNavigate} from 'react-router-dom'
import {getPhotoService, searchService} from '../../service/service'
import {favoritesIdDispatch, favoritesImagesDispatch} from '../../redux/slice/favoritesSlice'
import Content from '../../component/content/Content'
import Photo from '../../component/photo/Photo'
import Menu from '../../component/menu/Menu'
import Spinner from '../../component/spinner/Spinner'
import Mode from '../../component/mode/Mode'

const PhotoPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [images, setImages] = useState([])
  const [photo, setPhoto] = useState({})
  const {id} = useParams()

  const favoritesIdImages = (id) => {
    dispatch(favoritesIdDispatch(id))
    dispatch(favoritesImagesDispatch(images))
  }

  const favoritesIdPhoto = (id) => {
    dispatch(favoritesIdDispatch(id))
    dispatch(favoritesImagesDispatch([photo]))
  }

  const querySearch = (e) => {
    navigate(`/search/${ e.target.textContent.slice().toLowerCase() }`)
  }

  const fetchPhoto = (id) => {
    getPhotoService(id)
      .then(res => {
        setPhoto(res.results)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const fetchImages = (query) => {
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
    fetchPhoto(id)
    // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (Object.keys(photo).length !== 0) {
      setPage(1)
      setImages([])
      fetchImages(photo.tags[0].title)
    }
    // eslint-disable-next-line
  }, [photo])

  return (
    <section className="photo__page">
      <div className="container">
        <Menu />
        <Photo {...photo} favoritesIdPhoto={favoritesIdPhoto} querySearch={querySearch}/>
        <div className='content'>
          {<Mode />}
          {loading ? <Spinner /> : null}
          <InfiniteScroll
            pageStart={page}
            loadMore={() => fetchImages(photo.tags[0].title)}
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
    </section>
  )
}

export default PhotoPage