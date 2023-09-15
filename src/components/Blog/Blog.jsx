import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title, cover} = blog;
    return (
        <div className=' space-y-5'>
            <img className='w-2/4' src={cover} alt="" />
            <h3 className='text-lg m-2 font-bold'>{title}</h3>
        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;