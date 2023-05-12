// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blog-list-container">
      <ul>
        {blogsList.map(eachBlog => (
          <BlogItem key={eachBlog.id} blogItem={eachBlog} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
