import PropTypes from 'prop-types';
import { Badge, Button } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../messages';
import AddComponentIcon from './AddComponentIcon';

const AddComponentButton = ({
  type, displayName, onClick, beta,
}) => {
  const intl = useIntl();

  return (
    <Button
      variant="outline"
      className="add-component-button custom-icon-filled bg-gray-100"
      onClick={onClick}
    >
      <AddComponentIcon type={type} />
      <span className="sr-only">{intl.formatMessage(messages.buttonText)}</span>
      <span className="small mt-2">{displayName}</span>
      {beta && <Badge className="pb-1 mt-1" variant="danger">Beta</Badge>}
    </Button>
  );
};

AddComponentButton.defaultProps = {
  beta: false,
};

AddComponentButton.propTypes = {
  type: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  beta: PropTypes.bool,
};

export default AddComponentButton;
