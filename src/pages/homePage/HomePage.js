import Menu from '../../components/menu/Menu'
import Content from '../../components/content/Content'

const Home = () => {
   return (
    <div className='home'>
      <div className="container">
        <Menu />
        <Content />
      </div>
    </div>
  )
}

export default Home