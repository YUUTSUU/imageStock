import Favorite from '../../assets/favorite.svg'
import Download from '../../assets/download.svg'
import Maximize from '../../assets/maximize.svg'
import Delete from '../../assets/delete.png'
import {useNavigate} from 'react-router-dom'

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
  const navigate = useNavigate()

  const photoHandler = () => {
      navigate(`/photo/${ id }`)
  }

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
            @{username}
          </div>
        </div>
        <div
          className='content__icon'
          onClick={() => verify ? favoritesIdImages(id) : favoritesImagesDelete(id)}
        >
          <div className='content__icon_item'>
            <img src={verify ? Favorite : Delete} alt="favorite" id={id} className={verify ? null : 'content__icon_item delete'}/>
          </div>
          <div className='content__icon_item'>
            <img src={Maximize} alt="maximize" onClick={photoHandler}/>
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