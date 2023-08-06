import { useRouteError } from "react-router-dom"

const Error=()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <>
        <h1>Ooops!!!</h1>
        <h3>Something Went Wrong !!</h3>
        </>
    )
}

export default Error