function Img({name, alt='', cls='', onClick=() => 1}) {
    return (
        <img src={`/images/${name}`} alt={alt ? alt : "(X)"} className={cls} onClick={onClick} />
    )
}

export default Img
