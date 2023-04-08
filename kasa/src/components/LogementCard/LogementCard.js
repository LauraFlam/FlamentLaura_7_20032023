import './LogementCard.scss'
import { Link } from 'react-router-dom'

export default function LogementCard({id, title, cover}) {

	return (
		<Link to={`/logements/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}