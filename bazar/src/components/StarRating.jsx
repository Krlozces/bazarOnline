import '../styles.css'; // Asegúrate de importar tus estilos CSS donde sea necesario

export default function StarRating({ stars }) {
    const maxStars = 5;
    const starPercentage = (stars / maxStars) * 100;

    const starPercentageRounded = Math.round(starPercentage);

    const StarStyles = () => {
        return {
            width: starPercentageRounded + "%"
        };
    };

    return (
        <div className="stars-gray">
            <div className="stars-yellow" style={StarStyles()}></div>
        </div>
    );
}
