import { connect } from 'react-redux';

import { updateDonation } from 'store';

import DonationInput from 'components/atoms/DonationInput';

const mapStateToProps = ({ donation: { amount } }) => ({ amount });

const mapDispatchToProps = dispatch => ({ update({ target: { value } }) { dispatch(updateDonation(value)); } });

export default connect(mapStateToProps, mapDispatchToProps)(DonationInput);