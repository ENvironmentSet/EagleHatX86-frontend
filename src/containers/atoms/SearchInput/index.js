import { connect } from 'react-redux';

import { updateKeyword } from 'store';

import SearchInput from 'components/atoms/SearchInput';

const mapStateToProps = ({ query: { keyword } }) => ({ keyword });

const mapDispatchToProps = dispatch => ({ update({ target: { value } }) { dispatch(updateKeyword(value)); } });

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);