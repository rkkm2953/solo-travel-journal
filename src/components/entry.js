export default function entry(props) {
    return (
        <>
            <div className='entry--log'>
                <div className='entry--img-trim'>
                    <img
                        className='entry--img'
                        alt='some pic here'
                        src={props.imageUrl}
                    />
                </div>
                <div className='entry--info'>
                    <p className='entry--line'>
                        <i className='fas fa-map-marker-alt'></i>
                        <span className='entry--country'>
                            {props.location}
                            <a
                                className='entry--link'
                                href={props.googleMapsUrl}
                            >
                                View on Google Maps
                            </a>
                        </span>
                    </p>
                    <h1 className='entry--location'>{props.title}</h1>
                    <h4 className='entry--date'>
                        {props.startDate} - {props.endDate}
                    </h4>
                    <p className='entry--desc'>{props.description}</p>
                </div>
            </div>
        </>
    );
}