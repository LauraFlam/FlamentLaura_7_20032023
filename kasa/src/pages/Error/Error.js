import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {Link} from 'react-router-dom';
import './Error.scss'

export default function Error() {
	return (
		<div className='error'>
			<Header />
			<div className="error_bloc">
            	<h1>404</h1>
            	<p>Oups! La page que vous demandez n'existe pas.</p>
            	<Link className="error_bloc_link" to='/'>Retourner sur la page d'accueil</Link>
			</div>
			<Footer />
		</div>
	)
}