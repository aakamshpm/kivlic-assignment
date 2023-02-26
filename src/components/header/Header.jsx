import Navbar from '../navbar/Navbar'
import './header.css'
import vacant from '../../assets/vacant.png'

const Header = () => {
  return (
    <div className='kivlic__header'>
      <div>
        <Navbar />
      </div>
      <div className='kivlic__header-careers'>
        <h2>Careers</h2>
        <img src={vacant} alt="vacant" />
      </div>
    </div>
  )
}

export default Header