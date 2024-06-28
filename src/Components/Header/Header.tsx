import logo from '../../assets/Images/logo.png'

export default function Header() {
  return (
    <header style={{
        maxWidth: 'var(--max-width)',
        margin: '8px auto',
        
    }}>
        <img src={logo} className='HeadLogo' alt="ONESTOP NDT" style={{
            height: '60px'
        }} />
    </header>
  )
}
