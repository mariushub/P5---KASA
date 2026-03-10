import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

export default function Collapse(props: { title: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <button className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <span className="collapse__title">{props.title}</span>
                <FontAwesomeIcon icon={faChevronUp} className={`collapse__arrow ${isOpen ? "collapse__arrow--open" : ""}`} />
            </button>
            {isOpen && (
                <div className="collapse__content">
                    {props.children}
                </div>
            )}
        </div>
    )
}
