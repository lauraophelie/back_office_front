import Link from "react-router-dom";

function Pagination(props){
    const {value, link, className} = props

    return(
        <button
            className = {className} >
            <Link to = {link}> {value} </Link>
        </button>   
    )
}

export default Pagination