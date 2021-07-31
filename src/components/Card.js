import { useState } from "react"

const Card = ({ movie }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <div
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {!isShown && (
        <img className="video" controls alt={movie.title}>
          <source src={movie.thumbnail} />
        </img>
      )}

      {isShown && (
        <>
        <img className="video" controls alt={movie.title}>
          <source src={movie.thumbnail} />
        </img>
          <div className="info-box">
            <p>{movie.title}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Card
