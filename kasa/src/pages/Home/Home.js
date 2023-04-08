import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Gallery from '../../components/Gallery/Gallery'

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>
	)
}