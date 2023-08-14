import React from 'react'
import './Card.css'
import ErrorIcon from '@mui/icons-material/Error';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import SignalCellularAlt1BarIcon from '@mui/icons-material/SignalCellularAlt1Bar';
function getPriorityIcon(priority) {
  switch (priority) {
    case 0:
      return <MoreHorizOutlinedIcon  style={{ color: 'grey' }} />;
    case 1:
      return <SignalCellularAltIcon  style={{ color: 'grey' }} />;
    case 2:
      return <SignalCellularAlt1BarIcon style={{ color: 'grey' }} />;
    case 3:
      return <SignalCellularAlt2BarIcon style={{ color: 'grey' }} />;
    case 4:
          return <ErrorIcon style={{ color: 'red' }} />;
    default:
      return null;
  }
}
function getPriorityTitle(priority) {
  switch (priority) {
    case 0:
      return 'None';
    case 1:
      return 'Low';
    case 2:
      return 'Medium';
    case 3:
      return 'High';
    case 4:
      return 'Critical';
    default:
      return '';
  }
}
function Card({ ticket }) {
  return (
    <div className="card">
       <div className="card_top">
        <div className="card_top_labels">
           {ticket.id}
         </div>
       </div>

       <div className="card_title">
         {ticket.title}
       </div>
      <div className="card_footer">
        {getPriorityIcon(ticket.priority)}
        <div className="request">
          <CircleIcon />
          {ticket.tag[0]}
        </div>
        <div className="priority">
          {getPriorityTitle(ticket.priority)}
        </div>
      </div>
    </div>
  );
}



export default Card;



