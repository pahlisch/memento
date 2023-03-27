 const Card = ({ image, selected, onClick }) => {


    return (
        <div>
            <div className={selected && 'selected'}>
                <img alt="" src={image} className="card-face" />

                <img alt=""
                className="card-back"
                src = {'/assets/fireship.png'}
                />

            </div>
        </div>
    );

 };

 export default Card;