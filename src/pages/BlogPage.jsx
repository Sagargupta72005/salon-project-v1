import React from 'react'
import HeadBlog from '../components/blog/HeadBlog'
import Sabout from '../components/about/Sabout'
import CurvedLoop from '../components/about/CurvedLoop'

const BlogPage = () => {
  return (
    <div>
        <HeadBlog/>
            
<CurvedLoop
  marqueeText="Be ✦ ON ✦ 84463494916 ✦ All Time  ✦ Contact ✦  Hair Is A attitude"
  speed={1}
  curveAmount={20}
  direction="right"
  interactive={true}
  className="custom-text-style"
/>
        <Sabout/>
      
    </div>
  )
}

export default BlogPage
