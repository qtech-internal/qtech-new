'use client'

import { useEffect, useRef } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'

export default function InteractiveGlobe() {
  const stageRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncPlayback = () => {
      if (!videoRef.current) return
      if (media.matches) {
        videoRef.current.pause()
      } else {
        void videoRef.current.play().catch(() => undefined)
      }
    }

    syncPlayback()
    media.addEventListener('change', syncPlayback)
    return () => media.removeEventListener('change', syncPlayback)
  }, [])

  const move = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const stage = stageRef.current
    if (!stage) return
    const bounds = stage.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    stage.style.setProperty('--globe-rotate-x', `${y * -7}deg`)
    stage.style.setProperty('--globe-rotate-y', `${x * 9}deg`)
    stage.style.setProperty('--globe-shift-x', `${x * 14}px`)
    stage.style.setProperty('--globe-shift-y', `${y * 10}px`)
  }

  const reset = () => {
    const stage = stageRef.current
    if (!stage) return
    stage.style.setProperty('--globe-rotate-x', '0deg')
    stage.style.setProperty('--globe-rotate-y', '0deg')
    stage.style.setProperty('--globe-shift-x', '0px')
    stage.style.setProperty('--globe-shift-y', '0px')
  }

  return (
    <div
      ref={stageRef}
      className="home-globe-stage"
      onPointerMove={move}
      onPointerLeave={reset}
      aria-hidden="true"
    >
      <div className="home-globe-halo" />
      <div className="home-globe-orbit home-globe-orbit-outer" />
      <div className="home-globe-orbit home-globe-orbit-inner" />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/globe-poster.webp"
        className="home-globe-video"
      >
        <source src="/globe.webm" type="video/webm" />
        <source src="/globe.mp4" type="video/mp4" />
      </video>

      <div className="globe-capability globe-capability-ai"><span>01</span> AI systems</div>
      <div className="globe-capability globe-capability-saas"><span>02</span> SaaS products</div>
      <div className="globe-capability globe-capability-fintech"><span>03</span> Fintech</div>
      <div className="globe-stage-caption">
        <span className="globe-stage-dot" />
        Strategy → architecture → delivery
      </div>
    </div>
  )
}
