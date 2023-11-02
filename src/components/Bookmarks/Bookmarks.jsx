
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 mt-2">
            <div>
                <h4 className="text-3xl">Reading time:{readingTime}</h4>
            </div>
            <h1 className="text-3xl text-center"> Bookmarks:{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.proptypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number

}
export default Bookmarks;