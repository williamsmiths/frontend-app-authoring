import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  unexpectedError: {
    id: 'unexpected.error.message.text',
    defaultMessage: 'Đã xảy ra lỗi không mong đợi. Vui lòng nhấn nút bên dưới để tải lại trang.',
    description: 'error message when an unexpected error occurs',
  },
  unexpectedErrorButtonLabel: {
    id: 'unexpected.error.button.text',
    defaultMessage: 'Thử lại',
    description: 'text for button that tries to reload the app by refreshing the page',
  },
  returnToUnitPageLabel: {
    id: 'unexpected.error.returnToUnitPage.button.text',
    defaultMessage: 'Quay lại trang học phần',
    description: 'Text for button that navigates back to the unit page',
  },
  returnToOutlineLabel: {
    id: 'unexpected.error.returnToCourseOutline.button.text',
    defaultMessage: 'Quay lại dàn bài {outlineType}',
    description: 'Text for button that navigates back to the course outline',
  },
});

export default messages;