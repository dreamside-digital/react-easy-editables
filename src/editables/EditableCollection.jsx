import React from "react";
import PropTypes from 'prop-types'
import Button from "@material-ui/core/Button"
import IconButton from '@material-ui/core/IconButton';
import AddIcon from "@material-ui/icons/Add";
import { EditablesContext } from "./EditablesContext";


class EditableCollection extends React.Component {

  onSaveItem = itemId => item => {
    const newCollection = {
      ...this.props.content,
      [itemId]: {
        content: {
          ...this.props.content[itemId].content,
          ...item
        }
      }
    }

    this.props.onSave(newCollection)
  }

  onDeleteItem = itemId => () => {
    const newCollection = { ...this.props.content }
    delete newCollection[itemId]

    this.props.onSave(newCollection)
  }

  onAddItem = () => {
    const newItemId = `${this.props.name}-${Date.now()}`
    const newCollection = {
      ...this.props.content,
      [newItemId]: this.props.defaultContent
    }

    this.props.onSave(newCollection)
  }


  render() {
    const { content, Component, classes, reverseOrder, ...rest } = this.props;

    const itemsKeys = Object.keys(content);
    let orderedItems = itemsKeys.sort()
    if (reverseOrder) {
      orderedItems = orderedItems.reverse()
    }

    if (!this.context.showEditingControls && (itemsKeys.length < 1)) {
      return <p>Coming soon!</p>
    }

    return (
      <div className={`collection ${classes}`}>
        {orderedItems.map((key,index) => {
          const componentContent = content[key].content;
          return(
            <Component
              key={`collection-item-${key}`}
              index={index}
              content={componentContent}
              onSave={this.onSaveItem(key)}
              onDelete={this.props.onDeleteItem ? this.props.onDeleteItem(key) : this.onDeleteItem(key)}
            />
          )
        })}
        {
          this.context.showEditingControls &&
          <div className="row mt-4">
            <div className="col-12">
              <IconButton onClick={this.props.onAddItem || this.onAddItem}>
                <AddIcon />
              </IconButton>
            </div>
          </div>
        }
      </div>
    );
  }
}

EditableCollection.contextType = EditablesContext;

EditableCollection.propTypes = {
  items: PropTypes.object,
  isEditingPage: PropTypes.bool,
  options: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onAddItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  defaultContent: PropTypes.object,
  name: PropTypes.string,
  reverseOrder: PropTypes.bool,
}


EditableCollection.defaultProps = {
  items: {},
  isEditingPage: false,
  options: {},
  onSave: (newCollection) => { console.log(`Implement save function!`, newCollection)},
  defaultContent: {},
  name: 'item',
  reverseOrder: true,
}

export default EditableCollection;


