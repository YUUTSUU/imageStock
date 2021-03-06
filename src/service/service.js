import axios from "axios"

const API = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    client_id: 'zzqpeE42R5zzjnVmGgWJc7TzM73NJjwrDPRAFpgFJX8',
    safesearch: true,
  },
})

export const getPhotoService = async (id) => {
  try {
    const res = await API.get(`/photos/${id}`)
    return {
      results: _transformImage(res.data),
    }
  } catch (error) {
    throw error
  }
}


export const photoService = async (page) => {
  try {
    const res = await API.get('/photos', {params: {page}})
    return {
      results: res.data.map(_transformImage),
      total: res.headers['x-total'],
    }
  } catch (error) {
    throw error
  }
}

export const searchService = async (query, page) => {
  try {
    const res = await API.get('/search/photos', {params: {query, page}})
    return {
      results: res.data.results.map(_transformImage),
      total_pages: res.data.total_pages,
    }
  } catch (error) {
    throw error
  }
}


const _transformImage = (data) => {
  return {
    id: data.id,
    image: data.urls.regular,
    username: data.user.username,
    first_name: data.user.first_name,
    last_name: data.user.last_name,
    profile_image: data.user.profile_image.large,
    alt_description: data.alt_description,
    download: data.links.download,
    tags: data.tags
  }
}