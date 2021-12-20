import './Mode.scss'

const Mode = () => {
  return (
    <div className='mode'>
      <div className='mode__block'>
        <div className='mode__ribbon active'>
          <span className='mode__item mode__item_ribbon'></span>
          <span className='mode__item mode__item_ribbon'></span>
        </div>
        <div className='mode__tile active'>
          <span className='mode__item mode__item_tile'></span>
          <span className='mode__item mode__item_tile'></span>
          <span className='mode__item mode__item_tile'></span>
          <span className='mode__item mode__item_tile'></span>
        </div>
      </div>
    </div>
  )
}

export default Mode