import Card from './cards'
import travelData from '../travel-data.js'

export default function CardsMapping() {
    const cardElements = travelData.map(trip => {
        return <Card city={trip.city} country={trip.country} link={trip.link} image={trip.image} dates={trip.dates} description={trip.description} />
    })

    return(
        <div>
            {cardElements}
        </div>
    )
}