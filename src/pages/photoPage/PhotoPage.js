import Menu from '../../components/menu/Menu'
import Photo from '../../components/photo/Photo'
import SimilarPhoto from '../../components/similarPhotos/SimilarPhotos'
import './PhotoPage.scss'

const PhotoPage = () => {
  return (
    <div className='photo'>
      <div className='container'>
        <Menu />
        <Photo />
        <SimilarPhoto />
      </div>
    </div>
  )
}

export default PhotoPage