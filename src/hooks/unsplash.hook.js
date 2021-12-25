import {useState} from 'react';
import {createApi} from 'unsplash-js';
import {useDispatch} from 'react-redux'
import {searchText} from '../redux/slice/menuSlice'

export const useUnsplash = () => {
  const unsplash = createApi({accessKey: 'zzqpeE42R5zzjnVmGgWJc7TzM73NJjwrDPRAFpgFJX8'})
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [text, setText] = useState('')
  const [history, setHistory] = useState([])
  const dispatch = useDispatch()

  const unsplashRequest = (query = 'all', page = 1, per_page = 10) => {
    if (query !== '') {
      unsplash.search.getPhotos({query, page, per_page})
        .then(data => {
          setContent([...content, ...data.response.results])
          setLoading(false)
        })
        .then(() => setError(true))
    }
  }

  const searchHandler = (e) => {
    setText(e.target.value)
  }

  const searchRequest = (e) => {
    e.preventDefault()
    setHistory([...history, text])
    dispatch(searchText(text))
    localStorage.setItem("history", JSON.stringify(history))
  }

  return {
    unsplashRequest, 
    loading, 
    content, 
    error, 
    searchHandler,
    searchRequest
  }
}