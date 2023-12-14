import { HOMEPAGE } from "../App"

function Img({name, alt='', cls='', onClick=() => 1}) {
    return (
        <img src={`${HOMEPAGE}/images/${name}`} alt={alt ? alt : "(X)"} className={cls} onClick={onClick} />
    )
}

export default Img
