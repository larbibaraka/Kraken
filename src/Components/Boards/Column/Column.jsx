import React, { Component } from 'react';
import './Column.scss';
import { GET_TASKS } from '../../../Requests';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task/Task';
import { GraphQLClient } from "graphql-request";

const TaskList = styled.div`
    padding: 8px;
`;

class Column extends Component {
    constructor (props) {
      super(props);
      this.state = {
        tasks : [],
        columnId : this.props.column.id,
        first : 20,
      }
      this.loadFunc = this.loadFunc.bind(this);
    }

    getData() {
        const client = new GraphQLClient("http://localhost:8000/graphql");

        client.request(GET_TASKS, {"columnId": this.state.columnId, "first": this.state.first}).then(data => {
            this.setState({
              tasks : data.allTasks
            })
        });
    }

    componentDidMount() {
        const socket = new WebSocket('ws://localhost:8000/tasks/');
        socket.onopen = function(event) {
            console.log("WebSocket is open now.");
        };
        this.getData()
    }

    loadFunc () {
        this.setState({
          first: this.state.first + 30
        })
    }

    render() {
        return (
            <div className="kr-app-boards-content-column">
                <div className="kr-app-boards-content-column-header">
                    <div className="kr-app-boards-content-column-name">{this.props.column.name}</div>
                    <div className="kr-app-boards-content-column-tasksNumber"></div>
                </div>
                    <Droppable droppableId={this.props.column.id}>
                        {provided => (
                          <TaskList {...provided.droppableProps} ref={provided.innerRef}>
                              {this.state.tasks.map((task, index) =>
                                  <Task key={task.id} task={task} index={index} />
                              )}
                              {provided.placeholder}
                          </TaskList>
                        )}
                    </Droppable>
            </div>
        )
    }
}

export default Column;
