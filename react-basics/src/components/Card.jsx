function Card({title,msg})
{
    return(
    <>
        <div style={{border : '10px solid lightgray', borderRadius : '30%', boxShadow : '10px 10px 10px 10px gray', float : 'left', backgroundColor : 'white', margin : '20px'}}>
            <h1 style={{color : 'black'}}>{title}</h1>
            <h3 style={{color : 'black'}}>{msg}</h3>
        </div>
    </>)
}

export default Card