import './Banner.css'

const Banner = ({name, link, children}) => {
    return (
        <div className={`banner ${name}`}>
            <img src={link} alt="" className={`banner-img ${name}`} />
            {name === 'home' ? <h2 className="banner-title">Вся жизнь - <strong>путешествия</strong></h2> : null}
            {children}
        </div>
    )
}

export default Banner