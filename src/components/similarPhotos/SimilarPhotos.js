import Image1 from './img/img-1.jpg'
import Image2 from './img/img-2.jpg'
import Image3 from './img/img-3.jpg'
import Image4 from './img/img-4.jpg'
import Image5 from './img/img-5.jpg'
import Image6 from './img/img-6.jpg'
import Image7 from './img/img-7.jpg'
import Image8 from './img/img-8.jpg'
import Image9 from './img/img-9.jpg'
import './SimilarPhotos.scss'

const SimilarPhotos = () => {
  return (
    <div className='content'>
      <ul className='content__list'>
        <li className='content__item'>
          <a href="#/" className='content__link'>
            <img src={Image1} alt="img" className='content__image' />
          </a>
        </li>
        <li className='content__item'>
          <a href="#/" className='content__link'>
            <img src={Image2} alt="img" className='content__image' />
          </a>
        </li>
        <li className='content__item'>
          <a href="#/" className='content__link'>
            <img src={Image3} alt="img" className='content__image' />
          </a>
        </li>
        <li className='content__item'>
          <a href="#/" className='content__link'>
            <img src={Image4} alt="img" className='content__image' />
          </a>
        </li>
        <li className='content__item'>
          <a href="#/" className='content__link'>
            <img src={Image5} alt="img" className='content__image' />
          </a>
        </li>
        <li className='content__item'>
          <a href="#/" className='content__link'>
            <img src={Image6} alt="img" className='content__image' />
          </a>
        </li>
        <li className='content__item'>
          <a href="#/" className='content__link'>
            <img src={Image7} alt="img" className='content__image' />
          </a>
        </li>
        <li className='content__item'>
          <a href="#/" className='content__link'>
            <img src={Image8} alt="img" className='content__image' />
          </a>
        </li>
        <li className='content__item'>
          <a href="#/" className='content__link'>
            <img src={Image9} alt="img" className='content__image' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SimilarPhotos