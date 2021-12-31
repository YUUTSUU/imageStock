import Favorite from './img/favorite.svg'
import Download from './img/download.svg'
import Maximize from './img/maximize.svg'
import Delete from './img/delete.png'

const Content = ({
  id,
  image,
  profile_image,
  first_name,
  last_name,
  username,
  alt_description,
  download,
  favoritesIdImages,
  favoritesImagesDelete,
  verify
}) => {

  return (
    <li key={id} className='content__item' >
      <a href="#/" className='content__link'>
        <img src={image} alt={alt_description} className='content__image' />
      </a>
      <div className='content__block'>
        <div className='content__avatar'>
          <img src={profile_image} alt="avatar" />
          <div className='content__name'>
            <span>{first_name}</span>
            <span>{last_name}</span>
          </div>
          <div className='content__login'>
            {username}
          </div>
        </div>
        <div
          className='content__icon'
          onClick={(e) => verify ? favoritesIdImages(e) : favoritesImagesDelete(e)}
        >
          <div className='content__icon_item'>
            <img src={verify ? Favorite : Delete} alt="favorite" id={id} className={verify ? null : 'content__icon_item delete'}/>
          </div>
          <div className='content__icon_item'>
            <img src={Maximize} alt="maximize" />
          </div>
          <a href={download} download className='content__icon_item'>
            <img src={Download} alt="download" />
          </a>
        </div>
      </div>
    </li>
  )
}

export default Content