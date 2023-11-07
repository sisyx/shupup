function Input({type="text", placeholder="...", value='', cls='', onChange}) {
    function handleChange(event) {
        if (onChange) 
            onChange()
        else return 1
    }
    return (
        <input type={type} placeholder={placeholder} onChange={handleChange} className={cls}/>
    )
}

export default Input