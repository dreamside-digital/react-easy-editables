import React from "react";
import Button from "@material-ui/core/Button"


class EditableCollection extends React.Component {

  onSaveItem = itemId => item => {
    const newCollection = {
      ...this.props.items,
      [itemId]: item
    }

    this.props.onSave(newCollection)
  }

  onDeleteItem = itemId => () => {
    this.props.onDeleteItem(itemId)
  }

  onAddItem = () => {
    this.props.onAddItem(this.props.defaultContent)
  }


  render() {
    const { items, Component, isEditingPage, classes, ...rest } = this.props;

    const itemsKeys = Object.keys(items);

    if (!isEditingPage && (itemsKeys.length < 1)) {
      return <p>Coming soon!</p>
    }

    return (
      <div className={`collection ${classes}`}>
        {itemsKeys.map((key,index) => {
          const content = items[key];
          return(
            <Component
              key={`collection-item-${key}`}
              index={index}
              content={content}
              onSave={this.onSaveItem(key)}
              onDelete={this.onDeleteItem(key)}
            />
          )
        })}
        {
          isEditingPage &&
          <div className="row mt-4">
            <div className="col-12">
              <Button onClick={this.onAddItem}>Add item</Button>
            </div>
          </div>
        }
      </div>
    );
  }
}


EditableCollection.defaultProps = {
  items: {},
  isEditingPage: false,
  options: {}
}

export default EditableCollection;


