import './PhotoPage.scss'
import Menu from '../../components/menu/Menu'
import Photo from '../../components/photo/Photo'
import SimilarPhoto from '../../components/similarPhotos/SimilarPhotos'

const PhotoPage = () => {
  return (
    <div className='photo'>
      <section className='header'>
        <div className='container'>
          <Menu />
          <Photo />
        </div>
      </section>
      <section className='intro'>
        <div className='container'>
         <SimilarPhoto />
        </div>
      </section>
    </div>
  )
}

export default PhotoPage