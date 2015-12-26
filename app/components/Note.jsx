import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        }
    }

    render() {
        if (this.state.isEditing) {
            return this.renderEdit();
        }

        return this.renderNote();
    }

    renderEdit() {
        return <input type="text"
                      autoFocus={true}
                      defaultValue={this.props.task}
                      onBlur={this.toggleEdit}
                      onKeyPress={this.checkEnter}/>
    }

    renderNote = () => {
        const onDelete = this.props.onDelete;

        return (
            <div onClick={this.edit}>
                <span className="task">{this.props.task}</span>
                {onDelete ? this.renderDelete() : null}
            </div>
        );
    };

    renderDelete = () => {
        return <button className="delete"
                       onClick={this.props.onDelete}>x</button>;
    };

    edit = () => {
        this.setState({
            isEditing: true
        });
    };

    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.toggleEdit(e);
        }
    };

    toggleEdit = (e) => {
        this.props.onEdit(e.target.value);

        this.setState({
            isEditing: !this.state.isEditing
        });
    };
}
