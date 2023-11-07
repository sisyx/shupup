function VerticalLine({sizex='2px',sizey='100%', color= '#C10000', cls='' }) {

    const stl = {
        width: sizex,
        height: sizey,
        backgroundColor: color
    }

    return (
        <div style={stl} className={cls}></div>
    )
}

export default VerticalLine
