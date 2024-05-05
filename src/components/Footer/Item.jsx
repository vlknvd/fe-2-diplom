const Item = ({link, alt, text}) => {
    return (
        <>
        <li className="block-item">
            <a href="" className="block-item_link">
                <img src={link} alt={alt} className="block-item_img" />
            </a>
            <a href="" className="block-item_link">
                <p className="block-item_text">{text}</p>
            </a>
        </li>
        
        </>
    )
}

export default Item