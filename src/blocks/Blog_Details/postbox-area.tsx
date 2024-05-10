'use client'

import BlogReplyForm from '@/app/(app)/_components/blog-reply-form'
import BlogCategory from '@/blocks/Blog/blog-category'
import BlogSearch from '@/blocks/Blog/blog-search'
import BlogTag from '@/blocks/Blog/blog-tag'
import RecentPost from '@/blocks/Blog/recent-post'

import Author from './author'
import Comment from './comment'
import PostBox from './postbox'

const PostBoxArea = ({ item }: any) => {
  return (
    <div className='postbox-area postbox-area-padd  pt-120 pb-60'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='postbox__wrapper mb-60'>
              <PostBox item={item} />
              <Author />
              <Comment />
              <div className='post-comment-form'>
                <div className='section__title mb-30'>
                  <h3 className='title-sm'>Leave a Reply</h3>
                </div>
                <div className='bd-contact-form-wrapper mb-30'>
                  <BlogReplyForm />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='blog__sidebar-wrapper mb-60'>
              <BlogSearch />
              <BlogCategory />
              <RecentPost />
              <BlogTag />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostBoxArea
