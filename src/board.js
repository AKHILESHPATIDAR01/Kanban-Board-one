import { Component } from "react";
import "./styles.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 0, stage: 0, text: "Task 1" },
        { id: 1, stage: 1, text: "Task 2" },
        { id: 1, stage: 1, text: "Task 3" },
        { id: 1, stage: 2, text: "Task 4" }
      ],
      stages: ["Not Started", "In Progress", "Pending release", "Done"]
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.stages.map((stage, index) => {
          return (
            <div className="column">
              {this.state.tasks.map((task, indexx) => {
                return (
                  task.stage === index && (
                    <div className="task">
                      <div className="arrow-container">
                        <div className="left">
                          <button>👈🏻</button>
                        </div>
                        <div className="right">
                          <button>👉🏻</button>
                        </div>
                      </div>
                      <div className="text-container">
                        <div>{task.text}</div>
                      </div>
                      <div className="delete-container">
                        <button> delete </button>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;
