
const OContainer=()=>{
    const box={
        color: "white",
        fontFamily: `'Helvetica', 'Arial', sans-serif`,
        // fontSize: `4em`,
        fontWeight: 'bold',
        textAlign: 'center',
        
      }
    return (
        <div style={box} className="mt-md-4">
            <i className="fa fa-circle-o fa-5x" aria-hidden="true"></i>
        </div>  
    )
}

const XContainer=()=>{
    const box={
        color: "white",
        fontFamily: `italic`,
        fontWeight: 'bold',
        textAlign: 'center'
      }
    return (
        <div style={box} className="mt-md-4">
            <i className="fa fa-times fa-5x" aria-hidden="true"></i>
        </div>  
    )
}
const Background=({createXO, createXOat})=>{
    
    return (
        <div className="mt-5 row tic-border" style={{margin:"auto auto"}}>
                <div
                    onClick={()=>{createXOat(0)}}
                    className="col-4 tic-border-nested text-center border-bottom border-right border-light"
                >
                    {createXO(0)}
                </div>
                <div 
                    onClick={()=>{createXOat(1)}}
                    className="col-4 tic-border-nested border border-top-0 border-light">
                    {createXO(1)}
                </div>
                <div 
                    onClick={()=>{createXOat(2)}}
                    className="col-4 tic-border-nested border-left border-bottom border-light">
                    {createXO(2)}
                </div>
                <div 
                    onClick={()=>{createXOat(3)}}
                    className="col-4 tic-border-nested border border-left-0 border-light">
                    {createXO(3)}
                </div>
                <div 
                    onClick={()=>{createXOat(4)}}
                    className="col-4 tic-border-nested border border-light">
                    {createXO(4)}
                </div>
                <div 
                    onClick={()=>{createXOat(5)}}
                    className="col-4 tic-border-nested border border-right-0 border-light">
                    {createXO(5)}
                </div>
                <div 
                    onClick={()=>{createXOat(6)}}
                    className="col-4 tic-border-nested border-right border-top border-light">
                    {createXO(6)}
                </div>
                <div 
                    onClick={()=>{createXOat(7)}}
                    className="col-4 tic-border-nested border border-bottom-0 border-light">
                    {createXO(7)}
                </div>
                <div 
                    onClick={()=>{createXOat(8)}}
                    className="col-4 tic-border-nested border-left border-top border-light">
                    {createXO(8)}
                </div>
            </div>
            
            
    )
}

export default Background;
export {OContainer,XContainer};
