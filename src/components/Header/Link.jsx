const Link = ({link, title}) => {
    return (
        <li className="list-item">
            <a href={link} className="item-link">{title}</a>
        </li>
    )
}

export default Link