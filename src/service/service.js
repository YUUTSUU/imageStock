import axios from "axios"

const service = async (search = 'all') => {
  const url = 'https://api.unsplash.com'
  const client_id = 'zzqpeE42R5zzjnVmGgWJc7TzM73NJjwrDPRAFpgFJX8'
  const offset = 24
  try {
    const res = await axios.get(`${url}/search/photos?page=1&per_page=${ offset }&query=${ search }&client_id=${ client_id }`)
    return res.data.results.map(_transformImage)
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