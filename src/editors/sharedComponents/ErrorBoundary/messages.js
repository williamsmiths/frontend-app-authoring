import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  unexpectedError: {
    id: 'unexpected.error.message.text',
    defaultMessage: 'Đã xảy ra lỗi không mong muốn. Vui lòng nhấp vào nút bên dưới để làm mới trang.',
    description: 'error message when an unexpected error occurs',
  },
  unexpectedErrorButtonLabel: {
    id: 'unexpected.error.button.text',
    defaultMessage: 'Thử lại',
    description: 'text for button that tries to reload the app by refreshing the page',
  },
  returnToUnitPageLabel: {
    id: 'unexpected.error.returnToUnitPage.button.text',
    defaultMessage: 'Quay lại trang bài học',
    description: 'Text for button that navigates back to the unit page',
  },
  returnToOutlineLabel: {
    id: 'unexpected.error.returnToCourseOutline.button.text',
    defaultMessage: 'Quay lại đề cương {outlineType}',
    description: 'Text for button that navigates back to the course outline',
  },
});

export default messages;