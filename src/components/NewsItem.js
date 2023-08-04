

const NewsItem = (props) => {
  
 
    let {title , description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left: '90%', zIndex: '1'}}>
        {source}
        </span>
        <img src={!imageUrl? "https://images.indianexpress.com/2023/07/SpaceX-ionosphere-20230726.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <p className='card-text'><small className='text-muted'>By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  
}

// b7bf345628ee4a88ae6e52025829c3bd
export default NewsItem
