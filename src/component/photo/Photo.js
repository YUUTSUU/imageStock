import './Photo.scss'
import Avtor from './img/person.png'
import Favorit from './img/favorite.svg'
import Downloa from './img/download.svg'
import Person from './img/photo.jpg'

const Photo = () => {
  return (
    <div className="photo" style={{backgroundImage: `url(${Person})`}}>
      <div className='photo__inner'>
        <div className='photo__grid'>
          <div className="photo__avatar">
            <div className='photo__block'>
              <div className='photo__image'>
                <img src={Avtor} alt="" />
              </div>
              <div className='photo__text'>
                <div className="photo__title">
                  Vadim Sadovski
                </div>
                <div className='photo__descr'>
                  @vadimsadovski
                </div>
              </div>
            </div>
            <div className='photo__block'>
              <div className='photo__favorite'>
                <img src={Favorit} alt="" />
              </div>
              <button className='photo__button'>
                <img src={Downloa} alt="" />
                <div className='photo__download'>Download</div>
              </button>
            </div>
          </div>
          <div className="photo__person">
            <img src={Person} alt="" />
          </div>
          <div className="photo__footer">
            <div className='photo__hashtag'>
              Похожии теги
            </div>
            <ul className='photo__tag'>
              <li className='photo__item'>Girl</li>
              <li className='photo__item'>Woman</li>
              <li className='photo__item'>Mood</li>
              <li className='photo__item'>People</li>
              <li className='photo__item'>Free Pictures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photo