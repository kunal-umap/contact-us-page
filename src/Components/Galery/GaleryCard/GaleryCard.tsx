import Style from './GaleryCard.module.css'

export default function GaleryCard(props: {image:  any, title: string}) {
  return (
    <div className={Style.CArd}>
        <img src={props.image} alt={props.title}  className={Style.CrdImage} />
        <p className={Style.CrdTytle} >{props.title}</p>
    </div>
  )
}
