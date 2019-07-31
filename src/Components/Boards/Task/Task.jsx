import React, { Component } from 'react';
import './Task.scss';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    background-color: #fff;
    border-color:red;
    margin-bottom: 10px;
`;

class Task extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {provided => (
                      <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <div className="kr-app-boards-content-column-task-content">{this.props.task.content}</div>
                      </Container>
                )}
            </Draggable>
        )
    }
}

export default Task;
