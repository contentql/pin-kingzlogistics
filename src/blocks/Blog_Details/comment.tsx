import imgOne from '@styles/assets/img/blog/author-2.jpg'
import imgTwo from '@styles/assets/img/blog/author-3.png'
import imgThere from '@styles/assets/img/blog/author-4.png'
import Image from 'next/image'
import Link from 'next/link'

const Comment = () => {
  const commentData = [
    //blog details page data
    {
      id: 1,
      image: imgOne,
      avaterName: 'David Angel Makel',
      postMeta: 'February 26, 2022',
      comment:
        "The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nut argy bargy vagabond buggered dropped.",
      commentIcon: 'fal fa-reply',
      listItemClass: '',
    },
    {
      id: 2,
      image: imgTwo,
      avaterName: 'Bailey Wonger',
      postMeta: 'February 20, 2022',
      comment:
        'Do one say wind up buggered bobby bite your arm off gutted mate, David victoria sponge cup of char chap fanny around.',
      commentIcon: 'fal fa-reply',
      listItemClass: 'children',
    },
    {
      id: 3,
      image: imgThere,
      avaterName: 'Hilary Ouse',
      postMeta: 'February 21, 2022',
      comment:
        "Baking cakes is cobblers wellies William geeza bits and bobs what a plonker it's your round,",
      commentIcon: 'fal fa-reply',
      listItemClass: 'children',
    },
  ]

  return (
    <div className='post-comments mb-55'>
      <div className='post-comment-title'>
        <div className='section__title mb-30'>
          <h3 className='title-sm'>3 Comments</h3>
        </div>
      </div>
      <div className='latest-comments'>
        <ul>
          {commentData.slice(0, 3).map(item => (
            <li
              className={item.listItemClass && item.listItemClass}
              key={item.id}>
              <div className='comments-box'>
                <div className='comments-avatar'>
                  <Image
                    src={item.image}
                    style={{ width: '100%', height: 'auto' }}
                    alt='img'
                  />
                </div>
                <div className='comments-text'>
                  <div className='avatar-name'>
                    <h5>{item.avaterName}</h5>
                    <span className='post-meta'>{item.postMeta}</span>
                  </div>
                  <p>{item.comment}</p>
                  <Link href='#' className='comment-reply'>
                    <i className={item.commentIcon}></i> Reply
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Comment
