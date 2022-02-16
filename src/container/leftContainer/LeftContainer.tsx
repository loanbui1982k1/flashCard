import React from "react";
import "./style.css";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import {useProgressContext} from '../../context/ProgressContext'
interface Props {
  // numberCard: number,
  totalCards: number
}


const LeftContainer: React.FC<Props> = (props) => {

  const {numberCard} = useProgressContext()
  return (
    <div className="leftContainer">
      <div className="leftTitle">
        <CreditCardIcon
          fontSize="small"
          sx={{ mr: "5px", position: "relative", top: "5px" }}
        />
        Thẻ ghi nhớ
      <progress className="progressBar" value = {numberCard} max = {props.totalCards}></progress>
      <div className="progress">
        <span>Tiến độ</span>
        <span>{numberCard}/{props.totalCards}</span>
      </div>
      </div>
    </div>
  );
}
export default LeftContainer