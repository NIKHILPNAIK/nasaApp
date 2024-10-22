export default function Main(props) {
    const { data } = props;

    return (
        <div className="imgContainer">
            {data.hdurl ? (
                <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" />
            ) : (
                <p>Image not available for today</p>
            )}
        </div>
    );
}

