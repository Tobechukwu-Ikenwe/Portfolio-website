'use client'

import Image from 'next/image'
import { useState } from 'react'

const PROFILE_IMAGE_SRC = '/profile.png'

export default function ProfileImage() {
  const [error, setError] = useState(false)

  return (
    <div className="flex justify-center w-full pt-6 pb-4">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-full border-[3px] border-secondary bg-surface-700 overflow-hidden ring-2 ring-secondary/30">
        {!error && (
          <Image
            src={PROFILE_IMAGE_SRC}
            alt="Tobechukwu Ikenwe"
            fill
            sizes="(max-width: 640px) 128px, 160px"
            className="object-cover"
            priority
            onError={() => setError(true)}
          />
        )}
        {error && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-surface-600 text-zinc-500 text-xs text-center p-2"
            title="Drop your profile image as public/profile.png"
          >
            <span>Drop profile.png in /public</span>
          </div>
        )}
      </div>
    </div>
  )
}
