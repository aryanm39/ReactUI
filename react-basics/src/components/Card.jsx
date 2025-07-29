function Card({title,msg})
{
    return(
    <>
        <div style={{border : '0px solid lightgray',  boxShadow : '0px 0px 10px 10px gray', backgroundColor : 'white', margin : '20px', padding : '10px'}}>
            <h1 style={{color : 'black'}}>{title}</h1>
            <h3 style={{color : 'black'}}>{msg}</h3>
        </div>
    </>)
}

export default Card