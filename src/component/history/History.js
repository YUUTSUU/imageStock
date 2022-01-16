const History = ({historyQueryHandler, history}) => {
  return (
    <div className='history'>
      <div className='history__title'>Ваши запросы</div>
      <ul className='history__list'>
        {history.map((item, i) => (<li key={i} className="history__item" onClick={historyQueryHandler}>{item}</li>))}
      </ul>
    </div>
  )
}

export default History