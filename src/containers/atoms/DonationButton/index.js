import {connect} from 'react-redux';

import DonationButton from 'components/atoms/DonationButton';

const mapStateToProps = ({donation: {amount}}) => ({amount});

export default connect(mapStateToProps)(DonationButton);