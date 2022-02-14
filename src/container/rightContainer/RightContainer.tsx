import React from 'react'
import './style.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';

interface card {
    question: string,
    answer: string
  }

interface Props {
    cards: card[],
    numberCard: number,
    changeCard: any
}

 const RightContainer: React.FC<Props> = (props) => {
    const [status, setStatus] = React.useState(false)
  return (
    <div >
        <div className = {`card ${status? 'flip': ''}`} onClick = {()=>setStatus(!status)}
        >
        {/* <Paper  elevation={0}> */}
            <div className='front'>
                {props.cards[props.numberCard].question}
            </div>
            <div className='back'>
                {props.cards[props.numberCard].answer}
            </div>
            
        {/* </Paper> */}
        </div>
        <div className = 'changePage'>
        <IconButton sx = {{mr : 5}} color="primary"
            disabled = {props.numberCard === 0 ? true : false} onClick = {()=> {
                props.changeCard(props.numberCard - 1);
                setStatus(false)
            }}
        >
            <ArrowBackIosIcon fontSize='small'/>
        </IconButton>
        <IconButton color="primary" disabled = {props.numberCard === props.cards.length - 1 ? true : false}
            onClick = {()=> {
                props.changeCard(props.numberCard + 1);
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