import StyleMap from './MapSection.module.css'

export default function MapSection() {
    return (
        <section className={StyleMap.MapSec}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1844443454456!2d73.00443887369758!3d19.143401949856052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfeb4288ae8d%3A0x8b330290504e58fa!2sLaser%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1719502168592!5m2!1sen!2sin" width="800" height="600" style={{
                border: 0,
            }}
                className={StyleMap.MapBack} allowFullScreen={false} loading="lazy" referrerPolicy='no-referrer-when-downgrade'></iframe>
            <div className={StyleMap.CardContain}>
                <div className={StyleMap.inner}>
                    <div className={StyleMap.card}>
                        <h3 className={StyleMap.CardHEad} >OnestopNDT</h3>
                        <p className={StyleMap.CardDecp} >PAP/R/406 Rabale MIDC Near Dol Electric Company Rabale MIDC, Navi Mumbai - 400701.</p>
                        <p className={StyleMap.CardDecp1} >Landline - 022 4131 0099</p>
                        <a href="#" className={StyleMap.MApLink} ><svg  style={{marginRight: '12px'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <g id="Layer 2">
                                <path id="Vector" d="M1.45825 17.5C1.45825 5.83333 5.83325 1.45833 17.4999 1.45833C29.1666 1.45833 33.5416 5.83333 33.5416 17.5C33.5416 29.1667 29.1666 33.5417 17.4999 33.5417C5.83325 33.5417 1.45825 29.1667 1.45825 17.5Z" fill="white" />
                                <path id="Vector_2" d="M19.3376 9.04167C18.7444 8.84798 18.1242 8.74954 17.5001 8.75C16.608 8.75446 15.7276 8.95234 14.9194 9.32999C14.1112 9.70765 13.3946 10.2561 12.8188 10.9375L15.7355 13.3583L19.3376 9.04167Z" fill="#1A73E8" />
                                <path id="Vector_3" d="M12.8187 10.9375C11.8838 12.0314 11.367 13.4214 11.3604 14.8604C11.3518 15.8639 11.5556 16.8579 11.9583 17.7771L15.677 13.4021L12.8187 10.9375Z" fill="#EA4335" />
                                <path id="Vector_4" d="M17.5001 12.5125C17.8071 12.5106 18.1114 12.5696 18.3953 12.6862C18.6793 12.8027 18.9373 12.9745 19.1543 13.1916C19.3714 13.4087 19.5432 13.6667 19.6598 13.9506C19.7764 14.2346 19.8354 14.5389 19.8334 14.8458C19.8289 15.3826 19.6323 15.8999 19.2793 16.3042C19.2793 16.3042 21.1168 14.1021 22.9251 11.9292C22.5568 11.2178 22.0515 10.5862 21.4384 10.0706C20.8252 9.55506 20.1163 9.16574 19.3522 8.925L15.7209 13.3C15.9408 13.0453 16.2144 12.8426 16.5221 12.7065C16.8298 12.5703 17.1638 12.504 17.5001 12.5125Z" fill="#4285F4" />
                                <path id="Vector_5" d="M17.5001 17.1938C17.1932 17.1957 16.8889 17.1367 16.6049 17.0201C16.3209 16.9035 16.0629 16.7317 15.8459 16.5147C15.6288 16.2976 15.457 16.0396 15.3405 15.7556C15.2239 15.4717 15.1648 15.1674 15.1668 14.8604C15.17 14.3235 15.3668 13.8057 15.7209 13.4021L12.0022 17.7771C12.7698 19.1927 13.6997 20.5141 14.773 21.7146L19.2793 16.3479C19.0644 16.6124 18.7931 16.8256 18.4853 16.972C18.1775 17.1183 17.8409 17.1941 17.5001 17.1938Z" fill="#FBBC04" />
                                <path id="Vector_6" d="M19.1917 23.1875C21.2334 20.0083 23.5667 18.55 23.5667 14.8604C23.5683 13.8807 23.3332 12.9151 22.8813 12.0458L14.7292 21.7146C15.0792 22.1813 15.4147 22.6479 15.7647 23.1729C17.0042 25.0833 16.6542 26.2354 17.4563 26.2354C18.2584 26.2354 17.9084 25.0833 19.148 23.1729" fill="#34A853" />
                            </g>
                        </svg>Google map Link</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
