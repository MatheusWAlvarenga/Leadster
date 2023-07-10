'use client'
import { ReactNode, createContext, useEffect, useRef, useState } from 'react'

// types
import { VideoListType } from '../../../public/videos'
import { truncate } from 'fs'

type playerStateType = {
  playing: boolean
  currentTime: number
  playbackRate: number
  menuView: boolean
  loading: boolean
}

interface ContextType {
  playerOn: boolean
  hoverVideo: boolean
  fullScreen: boolean
  maxScreen: boolean
  videoInfo: VideoListType | null
  playerState: playerStateType
  playerField: any
  playerViewControl: (active: boolean) => void
  handleVideoInfoInPlayer: (item: VideoListType) => void
  watchHoverVideo: (item: boolean) => void
  handlePlay: () => void
  sliderController: () => void
  rangeSlider: (item: any) => void
  handleViewPlaybackRateMenu: () => void
  handlePlaybackRate: (item: number) => void
  handleToBackOrToFrontVideo: (item: string) => void
  handleFullScreen: () => void
  handleMaxScreen: () => void
}

export const PlayerContext = createContext({} as ContextType)

export function PlayerViewControlContext({
  children,
}: {
  children: ReactNode
}) {
  const playerField = useRef<any>(null)
  const [playerOn, setPlayerOn] = useState<boolean>(false)
  const [hoverVideo, setHoverVideo] = useState<boolean>(false)
  const [fullScreen, setFullScreen] = useState<boolean>(false)
  const [maxScreen, setMaxScreen] = useState<boolean>(false)
  const [videoInfo, setVideoInfo] = useState<VideoListType | null>(null)
  const [playerState, setPlayerState] = useState({
    playing: false,
    currentTime: 0,
    playbackRate: 1,
    menuView: false,
    hover: false,
    loading: false,
  })

  function playerViewControl(active: boolean) {
    setPlayerOn(active)

    // reset config video when close modal
    if (!active) {
      setPlayerState({
        ...playerState,
        playing: false,
        currentTime: 0,
        playbackRate: 1,
        menuView: false,
      })

      setFullScreen(false)
      setMaxScreen(false)
      playerField.current.currentTime = 0
      playerField.current.playbackRate = 1
      playerField.current.pause()
    }

    // loading apply
    if (active && playerState.playing == false) {
      setPlayerState({
        ...playerState,
        loading: true,
      })
      return setTimeout(() => {
        setPlayerState({
          ...playerState,
          loading: false,
          playing: true,
        })
        if (playerField.current.currentTime == 0) {
          playerField.current.playbackRate = 1
          playerField.current.play()
        }
      }, 1000)
    }
  }

  function handleVideoInfoInPlayer(item: VideoListType) {
    setVideoInfo(item)
  }

  function watchHoverVideo(hoverOn: boolean) {
    if (!hoverOn) {
      setTimeout(() => {
        setPlayerState({
          ...playerState,
          menuView: false,
        })

        setHoverVideo(false)
      }, 3000)

      return
    }

    setHoverVideo(true)
  }

  useEffect(() => {
    if (playerOn) {
      if (playerState.playing) playerField.current.pause()
      if (!playerState.playing) playerField.current.play()
    }
  }, [playerState.playing])

  useEffect(() => {
    if (playerOn) playerField.current.playbackRate = playerState.playbackRate
  }, [playerState.playbackRate])

  function handlePlay() {
    const statusPlay = playerState.playing

    setPlayerState({
      ...playerState,
      playing: !statusPlay,
      menuView: false,
    })
  }

  function sliderController() {
    const duration = playerField.current.duration
    const current = playerField.current.currentTime

    let percent = (parseFloat(current) * 100) / parseFloat(duration)
    percent = percent > 0 ? parseFloat(percent.toFixed(3)) : 0
    setPlayerState({
      ...playerState,
      currentTime: percent,
    })

    if (percent > 99.999) {
      playerField.current.pause()
      playerState.playing = true
    }
  }

  function rangeSlider(item: any) {
    const duration = playerField.current.duration
    const newCurrentTime = item.target.value
    playerField.current.currentTime = (duration / 100) * newCurrentTime
    sliderController()
  }

  function handleViewPlaybackRateMenu() {
    const newState = !playerState.menuView
    setPlayerState({ ...playerState, menuView: newState })
  }

  function handlePlaybackRate(value: number) {
    setPlayerState({
      ...playerState,
      playbackRate: value,
    })
  }

  function handleToBackOrToFrontVideo(value: string) {
    if (value === 'back') {
      setPlayerState({
        ...playerState,
        currentTime: 0,
      })
      playerField.current.currentTime = 0
      return
    }
    setPlayerState({
      ...playerState,
      currentTime: 100,
    })
    playerField.current.currentTime = 100
  }

  function handleFullScreen() {
    const newState = fullScreen

    setFullScreen(!newState)
    setMaxScreen(false)
    setPlayerState({
      ...playerState,
      menuView: false,
    })
  }
  function handleMaxScreen() {
    const newState = maxScreen
    setMaxScreen(!newState)
    setFullScreen(false)
    setPlayerState({
      ...playerState,

      menuView: false,
    })
  }

  return (
    <PlayerContext.Provider
      value={{
        playerField,
        fullScreen,
        maxScreen,
        playerOn,
        hoverVideo,
        videoInfo,
        playerState,
        playerViewControl,
        handleVideoInfoInPlayer,
        watchHoverVideo,
        handlePlay,
        sliderController,
        rangeSlider,
        handleViewPlaybackRateMenu,
        handlePlaybackRate,
        handleToBackOrToFrontVideo,
        handleFullScreen,
        handleMaxScreen,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
