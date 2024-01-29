import Button from "./Button"

function NavButton(props){
    const { text , icon } = props
    
    return(
        <Button 
            className="button__nav"
            text = {text}
            icon = {icon}
        />
    )
}

export default NavButton