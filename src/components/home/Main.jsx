import React from 'react'
import HeroCard from './content/HeroCard'
import BlogGrid from './content/BlogGrid'
import FeaturedWork from './content/FeaturedWork'

export default function Main() {
  return (
    <div>
        <HeroCard/>
        <FeaturedWork/>
        <BlogGrid/>
    </div>
  )
}
