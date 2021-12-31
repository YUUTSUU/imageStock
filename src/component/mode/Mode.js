const Mode = ({
  mode,
  rabbinHandler,
  tileHandler
}) => {
  return (
    <div className='mode'>
      <div className='mode__container'>
        <div
          data-item='rabbin'
          className={
            mode ?
              'mode__block mode__ribbon active' :
              'mode__block mode__ribbon'
          }
          onClick={rabbinHandler}
        >
          <span className='mode__item mode__item_ribbon'></span>
          <span className='mode__item mode__item_ribbon'></span>
        </div>
        <div
          className={
            !mode ?
              'mode__block mode__tile active' :
              'mode__block mode__tile'
          }
          onClick={tileHandler}
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