import React from 'react'
import './style.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import {useProgressContext} from '../../context/ProgressContext'

interface card {
    question: string,
    answer: string
  }

interface Props {
    cards: card[],
    // numberCard: number,
    // changeCard: any
}

 const RightContainer: React.FC<Props> = (props) => {
    const [status, setStatus] = React.useState(false)
    const {numberCard, changeNumber} = useProgressContext()
    return (
    <div >
        <div className = {`card ${status? 'flip': ''}`} onClick = {()=>setStatus(!status)}
        >
        {/* <Paper  elevation={0}> */}
            <div className='front'>
                {props.cards[numberCard - 1].question}
            </div>
            <div className='back'>
                {props.cards[numberCard - 1].answer}
            </div>
            
        {/* </Paper> */}
        </div>
        <div className = 'changePage'>
        <IconButton sx = {{mr : 5}} color="primary"
            disabled = {numberCard === 1 ? true : false} onClick = {()=> {
                changeNumber(numberCard - 1) ;
                setStatus(false)
            }}
        >
            <ArrowBackIosIcon fontSize='small'/>
        </IconButton>
        <IconButton color="primary" disabled = {numberCard === props.cards.length ? true : false}
            onClick = {()=> {
                changeNumber(numberCard + 1) ;
                setStatus(false)
            }}
        >
            <ArrowForwardIosIcon fontSize= 'small'/>
        </IconButton>
        </div>
    </div>
  )
}
export default RightContainer