
import PropTypes from 'prop-types';
import { BsBookmarks } from 'react-icons/bs';



const Blog = ({blog,addToBookmarks, handleMarkAsRead}) => {
    const {id,title,cover,author_img,author,reading_time,posted_date,hashtags}=blog
    return (
        <div className='mb-20  space-y-4'>
            <img  className="w-full mb-8" src={cover} alt={`cover picture of ${title}`} />

            <div className="flex justify-between  mb-4">
                <div className='flex'>
                    <img  className='w-14 m-4'src={author_img} alt="" />
                    <div>
                        <h2 className="text-2xl ml-4">{author}</h2>
                        <p>{posted_date}</p>

                    </div>

                </div>
                <div>
                    <span className='mt-4'>{reading_time}min read</span>
                    <button className='ml-2 text-2xl text-red-300'
                    onClick={()=>addToBookmarks(blog)}
                    ><BsBookmarks/></button>

                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) =><span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
            <button  onClick={ ()=>handleMarkAsRead(reading_time,id)}
            className='text-purple-600 font-bold underline'>Mark as Read</button>
            
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    addToBookmarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;