import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {Link} from 'react-router-dom';

export default function Error() {
	return (
		<div className='error'>
			<Header />
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
			<Footer />
		</div>
	)
}