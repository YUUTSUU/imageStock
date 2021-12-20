import './Photo.scss'

const Photo = () => {
  return (
    <div className="photo">
      <div className="block_left">
        <div className='person'>
          <div className='image'>
            <img src="" alt="" />
          </div>
          <div className='text'>
            <div className="title">
              Vadim Sadovski
            </div>
            <div className='descr'>
              @vadimsadovski
            </div>
          </div>
        </div>
        <div className='block_right'>
          <div className='image'>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
          <div className='button'>
            <img src="" alt="" />
            <div>Download</div>
          </div>
        </div>
      </div>
      <div className="center">
        <img src="" alt="" />
      </div>
      <div className="hashtag">
        <div className='text'>
          Похожии теги
        </div>
        <ul className='tag'>
          <li className='item'>Girl</li>
          <li className='item'>Woman</li>
          <li className='item'>Mood</li>
          <li className='item'>People</li>
          <li className='item'>Free Pictures</li>
        </ul>
      </div>
    </div>
  )
}

export default Photo