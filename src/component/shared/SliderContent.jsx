export const SliderContent = (props) => {
    const { title, image } = props;
    return (
       <div className="post-card">
          <div className="card">
             <img src={image} alt="" />
             <div className="card-body">
                <h6 className="card-title">{title}</h6>
                {/* <div className="card-text">{description}</div> */}
                <div className="btn-group">
                   <a href="/" className="btn-custom">
                      Add to Cart
                   </a>
                   <a href="/" className="btn-custom">
                      Buy Now
                   </a>
                </div>
             </div>
          </div>
       </div>
    );
 };