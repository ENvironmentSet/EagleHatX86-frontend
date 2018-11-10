import { connect } from 'react-redux';

import { loadNotices } from 'store';

import LoadNoticeButton from 'components/atoms/LoadNoticeButton';

const mapDispatchToProps = dispatch => ({
  load() {
    dispatch(loadNotices());
  }
});

export default connect(null, mapDispatchToProps)(LoadNoticeButton);
