'use client'
import { ReactNode, createContext, useState } from 'react'

// types
import { VideoListType } from '../../../public/videos'

interface ContextType {
  playerOn: boolean
  videoInfo: VideoListType | null
  playerViewControl: (active: boolean) => void
  handleVideoInfoInPlayer: (item: VideoListType) => void
}

export const PlayerContext = createContext({} as ContextType)

export function PlayerViewControlContext({
  children,
}: {
  children: ReactNode
}) {
  const [playerOn, setPlayerOn] = useState<boolean>(false)
  const [videoInfo, setVideoInfo] = useState<VideoListType | null>(null)

  function playerViewControl(active: boolean) {
    setPlayerOn(active)
  }
  function handleVideoInfoInPlayer(item: VideoListType) {
    setVideoInfo(item)
  }

  return (
    <PlayerContext.Provider
      value={{
        playerOn,
        videoInfo,
        playerViewControl,
        handleVideoInfoInPlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
