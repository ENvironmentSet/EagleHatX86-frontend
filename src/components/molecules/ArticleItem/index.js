import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SimpleTextArea from 'components/atoms/SimpleTextArea';
import Modal from '@material-ui/core/Modal';
import RenderMarkdown from 'react-markdown';

class ArticleItem extends React.Component {
  state = {
    modalOpened: false,
  };

  handleOpen = () => {
    this.setState({modalOpened: true});
  };

  handleClose = () => {
    this.setState({modalOpened: false});
  };

  render() {
    const { title, content } = this.props;
    const { modalOpened } = this.state;

    return (
      <ListItem button onClick={this.handleOpen}>
        <ListItemText inset primary={title} />
        <Modal
          open={modalOpened}
          onClose={this.handleClose}
        >
          <SimpleTextArea>
            <RenderMarkdown source={content} />
          </SimpleTextArea>
        </Modal>
      </ListItem>
    );
  }
}

export default ArticleItem;
