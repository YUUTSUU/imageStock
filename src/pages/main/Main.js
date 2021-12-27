import {useEffect, useState, useCallback} from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-css'
import unsplashService from '../../service/service'
import Menu from '../../components/menu/Menu'
import Content from '../../components/content/Content'
import Mode from '../../components/mode/Mode'
import Spinner from '../../components/spinner/Spinner'

const Main = () => {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [images, setImages] = useState([])
  const [favoritesID, setFavoritesID] = useState([])
  const [favoritesImages, setFavoritesImages] = useState([])
  const [mode, setMode] = useState(false)
  const [text, setText] = useState("")
  const [query, setQuery] = useState("")
  const [history, setHistory] = useState([])
  const [searchToggle, setSearchToggle] = useState(false)
  const [historyToggle, setHistoryToggle] = useState(false)
  const [switchImages, setSwitchImages] = useState(true)
  const [disabled, setDisabled] = useState(true)

  const textHandler = (e) => {
    setText(e.target.value)
  }

  const queryHandler = (e) => {
    e.preventDefault()
    if (text !== "") {
      setImages([])
      setDisabled(true)
      setQuery(text)
      setHistory([...history, text])
    }
  }

  const historyQueryHandler = (e) => {
    setImages([])
    setDisabled(true)
    setQuery(e.target.textContent)
  }

  const rabbinHandler = () => {
    setMode(true)
  }

  const tileHandler = () => {
    setMode(false)
  }

  const favoriteIdContent = (e) => {
    if (e.target.nodeName === 'IMG') {
      setFavoritesID([...favoritesID, e.target.id])
    }
  }

  const favoriteContentAddFilter = () => {
    const result = images.filter(item => favoritesID.includes(item.id))
    setFavoritesImages(result)
    setDisabled(false)
  }

  const favoriteContentDeleteFilter = (e) => {
    const resultFavoritesImages = favoritesImages.filter(item => !e.target.id.includes(item.id))
    setFavoritesImages(resultFavoritesImages)
    const resultFavoritesID = favoritesID.filter(item => !e.target.id.includes(item))
    setFavoritesID(resultFavoritesID)
  }

  const navigationSearchToggle = () => {
    setSearchToggle(prevState => !prevState)
    setHistoryToggle(false)
  }

  const navigationHistoryToggle = () => {
    setHistoryToggle(prevState => !prevState)
    setSearchToggle(false)
  }

  const imageStockDefaultQuery = () => {
    setImages([])
    setDisabled(true)
    setQuery("all")
  }

  const imagesShowContent = () => {
    setSwitchImages(true)
  }

  const favoritesShowContent = () => {
    setSwitchImages(false)
  }

  const fetchImage = useCallback((query, page, images) => {
    if (query === "") {
      query = "all"
    }
    if (switchImages) {
      unsplashService(query, page)
        .then(response => {
          setImages([...images, ...response.results])
          setTotal(response.total_pages)
          setPage(prevPage => prevPage + 1)
          setLoading(false)
          setDisabled(false)
          console.log('request')
        })
        .catch(error => {
          console.log(error)
          setLoading(false)
          setDisabled(false)
        })
    }
  }, [switchImages])

  useEffect(() => {
    if (disabled) {
      setImages([])
      fetchImage(query, page, images)
      setDisabled(false)
      console.log('render')
    }
  }, [disabled, fetchImage, images, page, query])

  return (
    <div className='main__page'>
      <div className="container">
        <Menu
          text={text}
          textHandler={textHandler}
          queryHandler={queryHandler}
          history={history}
          imageStockDefaultQuery={imageStockDefaultQuery}
          historyQueryHandler={historyQueryHandler}
          navigationSearchToggle={navigationSearchToggle}
          navigationHistoryToggle={navigationHistoryToggle}
          searchToggle={searchToggle}
          historyToggle={historyToggle}
          favoriteContentAddFilter={favoriteContentAddFilter}
          imagesShowContent={imagesShowContent}
          favoritesShowContent={favoritesShowContent}
        />
        <div className='content'>
          {
            switchImages ? null : <h1 className='content__header'>Избранное</h1>
          }
          {
            (searchToggle || historyToggle) && switchImages ? null :
              <Mode
                mode={mode}
                rabbinHandler={rabbinHandler}
                tileHandler={tileHandler}
              />
          }
          {
            loading ? <Spinner /> : null
          }
          <InfiniteScroll
            pageStart={page}
            loadMore={() => fetchImage(query, page, images)}
            hasMore={page < total ? true : false}
            threshold={1500}
            loader={switchImages ? <Spinner key={0} /> : false}
            initialLoad={false}
          >
            <Masonry
              breakpointCols={mode ? 1 : 3}
              className='content__list'
              columnClassName='content__column'
            >
              {
                switchImages ?
                  !loading ?
                    images.map(item => (
                      <Content key={item.id} {...item}
                        favoriteIdContent={favoriteIdContent}
                        switchImages={switchImages} />
                    )) : null :
                  favoritesImages.map(item => (
                    <Content key={item.id} {...item}
                      switchImages={switchImages}
                      favoriteContentDeleteFilter={favoriteContentDeleteFilter} />
                  ))
              }
            </Masonry>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  )
}

export default Main