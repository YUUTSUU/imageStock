const Mode = () => {
  return (
    <div className='mode'>
      <div className='mode__container'>
        <div
          data-item='rabbin'
          className="mode__block mode__ribbon"
          // className='mode__block mode__ribbon active' :
          //     'mode__block mode__ribbon'
          // }
        >
          <span className='mode__item mode__item_ribbon'></span>
          <span className='mode__item mode__item_ribbon'></span>
        </div>
        <div
          className="mode__block mode__tile"
          // className={
          //   !mode ?
          //     'mode__block mode__tile active' :
          //     'mode__block mode__tile'
          // }
        >
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