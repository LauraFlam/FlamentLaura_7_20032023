import './Header.scss'
import Navbar from '../Navbar/Navbar'
import Logo from '../../assets/logo.png'

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<Navbar />
		</header>
	)
}
