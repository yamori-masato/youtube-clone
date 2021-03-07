import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSelectedData } from '../../apis'
import { Store } from '../../store'

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store)

  const location = useLocation()
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v')
    await fetchSelectedData(id).then(res => {
      const item = res.data.items.shift()
      setGlobalState({ type: 'SET_SELECTED', payload: { selected: item } })
      console.log('res', res)
    })
  }

  useEffect(() => {
    setSelectedVideo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default VideoDetail
