import React from 'react';
import { render } from 'react-dom';
import { EditablesContext, theme } from '../../src/editables/EditablesContext';

import EditableParagraph from '../../src/editables/EditableParagraph';
import EditableText from '../../src/editables/EditableText';
import EditableTextArea from '../../src/editables/EditableTextArea';
import EditableNumber from '../../src/editables/EditableNumber';
import EditableLink from "../../src/editables/EditableLink";
import EditableImageUpload from "../../src/editables/EditableImageUpload";
import EditableFileUpload from "../../src/editables/EditableFileUpload";
import EditableBackgroundImage from "../../src/editables/EditableBackgroundImage";
import EditableTimeline from "../../src/editables/EditableTimeline";
import EditableEmbeddedIframe from "../../src/editables/EditableEmbeddedIframe";
import EditableLightboxImageUpload from "../../src/editables/EditableLightboxImageUpload";
import EditableCollection from "../../src/editables/EditableCollection";

import "./index.css"

const defaultPageContent = {
  backgroundImg: { imageSrc: "https://www.nomadiclabs.ca/img/nomadic-04.jpg" },
  title: { text: "Editable Fields Demo!" },
  textarea: { text: "Check the README on Github for the documentation \n\nHappy editing!" },
  subtitle: { text: "Go ahead and edit this page!" },
  paragraph: { text: "<p>This package makes it easy to implement on-page editing in your awesome React project. Feel free to test it out!</p><p>Toggle <strong>Show editable fields</strong> to switch between the editing interface and the default view.</p>" },
  link: { link: "https://github.com/nomadic-labs/react-easy-editables", anchor: "Source code on Github"},
  image: { imageSrc: "https://placekitten.com/400/300", caption: "Picture of an adorable kitten courtesy of https://placekitten.com" },
  lightboxImage: { imageSrc: "https://placekitten.com/600/300", caption: "Picture of an adorable kitten courtesy of https://placekitten.com" },
  file: { filepath: "https://www.nomadiclabs.ca/img/nomadic-04.jpg", filename: "Uploaded file (jpg)" },
  timeline: { spreadsheetId: '1vieT0gVrDOHAvAUW8uUWQZj2heeJr8Xg6bZbvKkFFbQ', timelines: "Toy Story Movies, Jurassic Park Movies", apiKey: "AIzaSyBT0ozOMS-9tV6HqqMUHsUxqovZ-Jp7UZ8" },
  youtubeVideo: {
    src: "https://www.youtube.com/embed/5qap5aO4i9A",
    title: "lofi hip hop radio",
    height: '300',
    width: '560'
  },
  collection: {
    exItem1: {
      content: {
        text: "I'm item 1"
      }
    },
    exItem2: {
      content: {
        text: "I'm item 2"
      }
    }
  }
}

const collectionItemDefaultContent = {
  content: {
    text: "I'm a new item!"
  }
}

const RepeatedComponent = ({ content, onSave, ...rest }) => {
  return(
    <div className="demo-items">
      <EditableText content={content} onSave={onSave} {...rest} />
    </div>
  )
}

const uploadImage = image => {
  return new Promise(resolve => {

    const FR = new FileReader();

    FR.addEventListener("load", function(e) {
      resolve(e.target.result)
    });

    FR.readAsDataURL(image);
  })
}

class App extends React.Component {
  state = {
    showEditingControls: false,
    theme: theme,
    pageContent: defaultPageContent,
  }

  handleContentChange = field => content => {
    this.setState({
      pageContent: {
        ...this.state.pageContent,
        [field]: content
      }
    })
  }

  toggleEditingControls = event => {
    event.stopPropagation()
    this.setState({ showEditingControls: !this.state.showEditingControls });
  }

  render() {
    const { pageContent } = this.state;

    return(
      <EditablesContext.Provider value={ {...this.state} }>
        <div className="grid-container">
          <div className="grid-item header">
            <EditableBackgroundImage content={pageContent.backgroundImg} onSave={this.handleContentChange("backgroundImg")} styles={{ height: "300px"}} uploadImage={uploadImage}>
              <div className="header-content">
                <h1><EditableText content={pageContent.title} onSave={this.handleContentChange("title")} /></h1>
              </div>
            </EditableBackgroundImage>
          </div>
        </div>


        <div className="wrapper">
          <div className="flex-container">
            <div className="flex-item image">
              <EditableImageUpload
                content={pageContent.image}
                onSave={this.handleContentChange("image")}
                maxSize={1024*1024*2}
                showCaption={true}
                uploadImage={uploadImage}
              />
            </div>

            <div className="flex-item desc">
              <h2><EditableText content={pageContent.subtitle} onSave={this.handleContentChange("subtitle")} /></h2>
              <hr />

              <div className="demo-items">
                <EditableParagraph content={pageContent.paragraph} onSave={this.handleContentChange("paragraph")} />
              </div>

              <div className="demo-items">
                <ul>
                  <li><EditableLink content={pageContent.link} onSave={this.handleContentChange("link")} /></li>
                  <li>
                    <EditableFileUpload
                      content={pageContent.file}
                      onSave={this.handleContentChange("file")}
                      maxSize={1024*1024*2}
                      uploadFile={uploadImage}
                    />
                  </li>
                </ul>
              </div>

              <div className="demo-items">
                <EditableTextArea content={pageContent.textarea} onSave={this.handleContentChange("textarea")} EditorProps={{ rows: 4 }} />
              </div>

              <button className={`btn ${this.state.showEditingControls ? 'active' : 'inactive'}`} onClick={this.toggleEditingControls}>{`${this.state.showEditingControls ? 'Stop Editing' : 'Start Editing'}`}</button>
            </div>

          </div>

          <div className="flex-container">
            <div className="flex-item">
              <h2>Repeated components</h2>
              <div className='collections'>
                <EditableCollection
                  content={pageContent.collection}
                  Component={RepeatedComponent}
                  defaultContent={collectionItemDefaultContent}
                  onSave={this.handleContentChange("collection")}
                  name={"example"}
                />
              </div>
            </div>
          </div>


          <div className="flex-container">
            <div className="flex-item">
              <h2>Lightbox Image</h2>
              <div className='youtube-video'>
                <EditableLightboxImageUpload content={pageContent.lightboxImage} onSave={this.handleContentChange("lightboxImage")} uploadImage={uploadImage} />
              </div>
            </div>
          </div>

          <div className="flex-container">
            <div className="flex-item">
              <h2>Embedded Iframe</h2>
              <div className='youtube-video'>
                <EditableEmbeddedIframe content={pageContent.youtubeVideo} onSave={this.handleContentChange("youtubeVideo")} />
              </div>
            </div>
          </div>

          {/*<div className="flex-container">
                      <div className="flex-item">
                        <h2>Google sheets timeline</h2>
                        <EditableTimeline content={pageContent.timeline} onSave={this.handleContentChange("timeline")} apiKey="AIzaSyBT0ozOMS-9tV6HqqMUHsUxqovZ-Jp7UZ8" />
                      </div>
                    </div> */}

        </div>

        <footer>
          <small>Created by <a href="https://www.nomadiclabs.ca">Nomadic Labs</a></small>
        </footer>
      </EditablesContext.Provider>
    );
  }
}

render(<App />, document.getElementById("root"));