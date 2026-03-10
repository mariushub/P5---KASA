import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Carousel(props: { images: string[] }) {
    const [current, setCurrent] = useState(0)
    const images = props.images
    const total = images.length

    const prev = () => setCurrent(current === 0 ? total - 1 : current - 1)
    const next = () => setCurrent(current === total - 1 ? 0 : current + 1)

    if (total === 1) {
        return (
            <div className="carousel">
                <img src={images[0]} alt="" className="carousel__image" />
            </div>
        )
    }

    return (
        <div className="carousel">
            <img src={images[current]} alt="" className="carousel__image" />
            {current > 0 && (
                <button className="carousel__btn carousel__btn--prev" onClick={prev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}
            {current < total - 1 && (
                <button className="carousel__btn carousel__btn--next" onClick={next}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
            <span className="carousel__counter">{current + 1}/{total}</span>
        </div>
    )
}
