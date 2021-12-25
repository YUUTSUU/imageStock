import axios from "axios"

const _baseUrl = 'https://api.unsplash.com/search'
const _client_id = 'zzqpeE42R5zzjnVmGgWJc7TzM73NJjwrDPRAFpgFJX8'
const _baseOffset = 1

const service = async (search = 'all', offset = _baseOffset) => {
  try {
    const res = await axios.get(`${ _baseUrl }/photos?page=${ offset }&per_page=30&query=${ search }&client_id=${ _client_id }`)
    return {
      data: res.data.results.map(_transformImage),
      total: res.headers['x-total']
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
    download: data.links.download
  }
}

export default service