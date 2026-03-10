import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function Rating(props: { value: string }) {
    const score = parseInt(props.value)

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                    key={star}
                    icon={faStar}
                    className={`rating__star ${star <= score ? "rating__star--active" : ""}`}
                />
            ))}
        </div>
    )
}
