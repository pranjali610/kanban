import React, { useState, useEffect } from "react";
import "./App.css";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Board from "./Components/Board/Board";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]); // New state for users
  const [groupingOption, setGroupingOption] = useState("status");
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
       
        const ticketsResponse = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const ticketsData = await ticketsResponse.json();
        setTickets(ticketsData.tickets);

       
        const usersResponse = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const usersData = await usersResponse.json();
        setUsers(usersData.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  
  const groupTickets = () => {
    switch (groupingOption) {
      case "status":
        return groupByStatus();
      case "priority":
        return groupByPriority();
      default:
        return {};
    }
  };


  const groupByStatus = () => {
    const allStatuses = ["Backlog", "Todo", "In progress", "Done"];
    return allStatuses.reduce((groups, status) => {
      groups[status] = tickets.filter((ticket) => ticket.status === status);
      return groups;
    }, {});
  };



  // Group tickets by priority
  const groupByPriority = () => {
    // Assuming each ticket has a "priority" property
    const allPriorities = [0, 1, 2, 3, 4];
    return allPriorities.reduce((groups, priority) => {
      groups[`Priority ${priority}`] = tickets.filter(
        (ticket) => ticket.priority === priority
      );
      return groups;
    }, {});
  };

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
  };

  return (
    <div className="app">
      <div className="app_navbar">
        <div className="button">
          <TuneIcon className="icon" />
          <span onClick={togglePanel}>Display</span>
          <KeyboardArrowDownIcon onClick={togglePanel} />
        </div>
        {panelOpen && (
          <div className="panel">
            {/* Grouping section */}
            <div className="grouping">
              <span>Grouping</span>
              <button onClick={() => setGroupingOption("status")}>
                Status
              </button>
            </div>
            <div className="ordering">
              <span>Ordering</span>
              <button onClick={() => setGroupingOption("priority")}>
                Priority
              </button>
            </div>

          </div>
        )}
      </div>
      <div className="app_outer">
        <div className="app_boards">
         
          {Object.entries(groupTickets()).map(([groupName, groupTickets]) => (
            <Board key={groupName} title={groupName} tickets={groupTickets} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


