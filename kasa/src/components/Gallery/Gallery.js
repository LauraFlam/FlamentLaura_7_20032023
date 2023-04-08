import './Gallery.scss'
import data from '../../Data/Data'
import LogementCard from '../LogementCard/LogementCard'

export default function Gallery() {

    return (
        <main className='home_gallery'>
            {data.map(data => {
                return (
                    <LogementCard
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}