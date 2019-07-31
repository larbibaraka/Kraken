import React, { Component } from 'react';
import './Boards.scss';
import { GET_COLUMNS } from '../../Requests';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column/Column';
import { GraphQLClient } from "graphql-request";

class Board extends Component {
    constructor (props) {
        super(props);
        this.state = {
            columns: []
        }
    }

    getData() {
        const client = new GraphQLClient("http://localhost:8000/graphql");

        client.request(GET_COLUMNS, {"columnId": this.state.columnId, "first": this.state.first}).then(data => {
            this.setState({
                columns : data.columns
            })
        });
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className="kr-app-board">
                <div className="kr-app-board-header">

                </div>
                <div className="kr-app-board-content">
                    <div className="kr-app-boards-content-columns">
                        {this.state.columns.map(column => (
                            <DragDropContext key={column.id}>
                                <Column key={column.id} column={column} />
                            </DragDropContext>
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Board;
