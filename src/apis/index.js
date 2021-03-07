import axios from 'axios'

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

const params =  {
  part: 'snippet',
  maxResults: 40,
  key: API_KEY,
  regionCode: 'JP',
  type: 'video',
}

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      chart: 'mostPopular'
    }
  })
}

export const fetchSelectedData = async (id) => {
  return await youtube.get('videos', {
    params: {
      ...params,
      id
    }
  })
}