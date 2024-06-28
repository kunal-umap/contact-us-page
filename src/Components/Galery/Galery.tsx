import Style from './Galery.module.css'
import Companys from '../../assets/GaleryImages/Companies.png'
import Jobs from '../../assets/GaleryImages/Jobs.png'
import Articles from '../../assets/GaleryImages/Articles.png'
import Webiners from '../../assets/GaleryImages/Webiners.png'
import Foroums from '../../assets/GaleryImages/Foroums.png'
import ApplicationNotes from '../../assets/GaleryImages/ApplicationNotes.png'
import GaleryCard from './GaleryCard/GaleryCard'

export default function Galery() {
  return (
    <section className={Style.MainContainer} >
        <GaleryCard image={Companys} title='Companys' />
        <GaleryCard image={Jobs} title='Jobs' />
        <GaleryCard image={Articles} title='Articles' />
        <GaleryCard image={Webiners} title='Webiners' />
        <GaleryCard image={Foroums} title='Foroums' />
        <GaleryCard image={ApplicationNotes} title='Appliction Notes' />
    </section>
  )
}
