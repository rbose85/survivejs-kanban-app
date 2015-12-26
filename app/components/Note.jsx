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

    renderNote() {
        return <div onClick={this.edit}>{this.props.task}</div>;
    }

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
