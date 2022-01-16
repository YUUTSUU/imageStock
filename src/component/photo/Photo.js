import FavoriteImage from '../../assets/fav.svg'
import DownLoadImage from '../../assets/download.svg'

const Photo = ({
  id,
  image,
  profile_image,
  first_name,
  last_name,
  username,
  alt_description,
  download,
  tags,
  favoritesIdPhoto,
  querySearch
}) => {
  return (
    <div className="photo" style={{background: `url(${ image }) center/cover no-repeat`}}>
      <div className='photo__inner'>
        <div className='photo__grid'>
          <div className="photo__avatar">
            <div className='photo__block'>
              <div className='photo__image'>
                <img src={profile_image} alt={alt_description} />
              </div>
              <div className='photo__text'>
                <div className="photo__title">
                  <span>{first_name} </span>
                  <span>{last_name}</span>
                </div>
                <div className='photo__descr'>
                  @{username}
                </div>
              </div>
            </div>
            <div className='photo__block'>
              <div className='photo__favorite' onClick={() => favoritesIdPhoto(id)}>
                <img src={FavoriteImage} alt="favoriteImage" />
              </div>
              <a href={download} download className='photo__button'>
                <img src={DownLoadImage} alt="downLoadImage" />
                <div className='photo__download'>Download</div>
              </a>
            </div>
          </div>
          <div className="photo__person">
            <img src={image} alt={alt_description} />
          </div>
          <div className="photo__footer">
            <div className='photo__hashtag'>
              Похожии теги
            </div>
            <ul className='photo__tag'>
              {tags && tags.map((item, i) => i < 5 ? (<li key={i} className='photo__item' onClick={querySearch}>{item.title}</li>) : null)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photo