import classNames from "classnames"

type CardProps = {
  id: number,
  img: string,
  isInactive: boolean,  //carta a faccia in giù
  isFlipped: boolean,   //carta a faccia in su
  isDisable: boolean,   //carta indovinata
  onClick: (id: number) => void
}

function Card(cardProps: CardProps) {

  const backSide = '/img/backSide.png'

  const handleClick = () => {
    !cardProps.isFlipped && !cardProps.isDisable && cardProps.onClick(cardProps.id)
  }

  return (
    <div
      className={classNames('card', {
        'card-is-flipped': cardProps.isFlipped,
        'card-is-inactive': cardProps.isInactive
      })}
      onClick={handleClick}
    >
      <div className="card card-face">
        <img src={backSide} alt="card backside" />
      </div>
      <div className="card card-face card-face-back">
        <img src={cardProps.img} alt="card" />
      </div>
    </div>
  )
}


export default Card