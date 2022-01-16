import ErrorImage from '../../assets/404.png'

export const Error = () => {
  return (
    <div className="error" >
      <img src={ErrorImage} alt="error" style={{width: '100%', height: '50%'}} />
    </div>
  )
}