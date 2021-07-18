import { useState , useEffect} from "react"
import Background,{OContainer, XContainer} from "./background"
const Game =({currentState, setCurrentState})=>{
    const [elements, setElements]=useState([])
    const [win, setWin]=useState(false)
    const [play, setPlay]=useState(true)
    const [emptyPos, setEmptyPos]=useState([...Array(9).keys()])
    const [msg, setMsg]=useState("")
    const createXO=(pos)=>{
        let el=elements[pos];
        let retEle= (<div></div>)
        if(el!==undefined && el.click){
            if(el.X){
                retEle=(<XContainer/>)
            }else{
                retEle=(<OContainer/>)
            }
        }
        return retEle
    }
    const updateWin =()=>{
        if(currentState){
            setMsg("X is Winner")
        }else{
            setMsg("O is Winner")
        }
    }
    const checkCondition=(el, pos1, pos2, pos3)=>{
        return el[pos1].click && el[pos2].click && el[pos3].click && el[pos1].X===el[pos2].X && el[pos2].X===el[pos3].X
    }
    const checkPos0=(el)=>{
        if(el[0].click){
            if(checkCondition(el, 0, 1, 2)){
                return [true, el[0].X]
            }else if(checkCondition(el, 0, 3, 6)){
                return [true, el[0].X]
            }
        }
        return [false, el[0].X]
    }
    const checkPos4=(el)=>{
        if(el[4].click){
            if(checkCondition(el, 3, 4, 5)){
                return [true, el[4].X]
            }else if(checkCondition(el, 1, 4, 7)){
                return [true, el[4].X]
            }else if(checkCondition(el, 2, 4, 6)){
                return [true, el[4].X]
            }else if(checkCondition(el, 0, 4, 8)){
                return [true, el[4].X]
            }
        }
        return [false, el[4].X]
    }
    const checkPos8=(el)=>{
        if(el[8].click){
            if(checkCondition(el, 6, 7, 8)){
                return [true, el[8].X]
            }else if(checkCondition(el, 2, 5, 8)){
                return [true, el[8].X]
            }
        }
        return [false,el[8].X]
    }
    const checkWin=()=>{
        let el= [...elements];
        let check=false
        let winner=false
        if(el.length===9){
            [check, winner]=checkPos0(el)
            if(check){
                setWin(true)
                updateWin(winner)
                return true
            }
            [check, winner]=checkPos4(el)
            if(check){
                setWin(true)
                updateWin(winner)
                return true
            }
            [check, winner]=checkPos8(el)
            if(check){
                setWin(true)
                updateWin(winner)
                return true
            }
        }
        return false
    }
    const createXOat =(pos)=>{
        if(win){
            return
        }
        let data= [...elements];
        let el = data[pos]     
        if (!el.click){
            el.click=true
            if(currentState){
                el.X=true
            }  
            setPlay(!play) 
            setCurrentState(!currentState)   
            if(checkWin()){
                setWin(!win)
            }  
        }  
        
        let arr= [...emptyPos]
        let ch=arr.indexOf(pos)
        arr.splice(ch, 1)
        setEmptyPos([...arr])
        setElements([...data])     
    }
    const CPU=()=>{
        createXOat(emptyPos[Math.floor(Math.random()*emptyPos.length)])
    }
    
    useEffect(()=>{
        let el=[] 
        for(let x=0;x<9;x++){
            el.push({"click":false, "X":false})
        }
        setElements([...el])
    }, [])
    useEffect(()=>{
        if(!play && !win){
            CPU()
        }
    })
    return (
        <div>
            <Background createXO={createXO} createXOat={createXOat}/> 
            <h4 className="mt-5 text-dark">{msg}</h4>
        </div>
    )
}
export default Game