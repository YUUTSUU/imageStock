import axios from "axios"

const API = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    client_id: 'zzqpeE42R5zzjnVmGgWJc7TzM73NJjwrDPRAFpgFJX8',
    safesearch: true,
  },
})

const unsplashService = async (query, page) => {
  try {
    const res = await API.get('/', {params: {query, page}})
    return {
      results: res.data.results.map(_transform),
      total_pages: res.data.total_pages,
      data: res.data
    }
  } catch (e) {throw e}
}

const _transform = (data) => {
  return {
    id: data.id,
    image: data.urls.regular,
    username: data.user.username,
    first_name: data.user.first_name,
    last_name: data.user.last_name,
    profile_image: data.user.profile_image.large,
    alt_description: data.alt_description,
    download: data.links.download
  }
}

export default unsplashService