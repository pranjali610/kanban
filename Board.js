import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import AddIcon from "@mui/icons-material/Add";
import "./Board.css";
import Card from "../Card/Card";


function getStatusName(status) {
  const statusNames = {
    Backlog: "Backlog",
    Todo: "To Do",
    "In progress": "In Progress",
    Done: "Done",
    Cancelled: "Cancelled",
  };
  return statusNames[status] || status;
}


function getPriorityName(priority) {
  const priorityNames = {
    4: "Urgent (Priority level 4)",
    3: "High (Priority level 3)",
    2: "Medium (Priority level 2)",
    1: "Low (Priority level 1)",
    0: "No priority (Priority level 0)",
  };
  return priorityNames[priority] || "Unknown";
}


function Board({ tickets }) {
  const statusName = tickets.length > 0 ? getStatusName(tickets[0].status) : "";
  const priorityName = tickets.length > 0 ? getPriorityName(tickets[0].priority) : "";
  

  return (
    <div className="board">
      <div className="board_top">
        <span className="icon">
          <CircleOutlinedIcon style={{ fontSize: "18px" }} />
        </span>
        <p className="board_top_title">

          {statusName}
          <span>{tickets.length}</span>
        </p>
        <span className="icon">
          <AddIcon style={{ fontSize: "25px" }} />
          <MoreHorizIcon style={{ fontSize: "25px" }} />
        </span>
      </div>
      <div className="board_cards">
        <div className="board_card_column">
          {tickets?.map((ticket) => (
            <Card key={ticket?.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;



