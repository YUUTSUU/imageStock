import {useSelector} from 'react-redux'
import './History.scss'

const History = () => {
  const {searchData} = useSelector((state) => state.menu)

  return (
    <div className='history'>
      <div className='history__title'>Ваши запросы</div>
      <ul className='history__list'>
        {searchData.map((item, i) => (<li key={i} className="search__item">{item}</li>))}
      </ul>
    </div>
  )
}

export default History