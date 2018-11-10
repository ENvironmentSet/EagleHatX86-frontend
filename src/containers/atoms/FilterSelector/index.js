import { connect } from 'react-redux';

import { updateFilter } from 'store';

import FilterSelector from 'components/atoms/FilterSelector';

const mapStateToProps = ({ query: { filter } }) => ({ filter });

const mapDispatchToProps = dispatch => ({ update({ target: { value } }) { dispatch(updateFilter(value)); } });

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelector);
