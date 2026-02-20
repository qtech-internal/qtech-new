'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageWithSkeletonProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  priority?: boolean
  sizes?: string
  loading?: 'lazy' | 'eager'
  draggable?: boolean
}

export default function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  className = '',
  containerClassName = '',
  priority = false,
  sizes,
  loading = 'lazy',
  draggable = false
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative ${containerClassName}`}>
      {/* Skeleton Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
        </div>
      )}
      
      {/* Actual Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        priority={priority}
        sizes={sizes}
        loading={loading}
        draggable={draggable}
      />
    </div>
  )
}
