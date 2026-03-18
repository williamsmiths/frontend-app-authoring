import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  warningTitle: {
    id: 'course-authoring.generic.saving-error-alert.title',
    defaultMessage: 'Studio đang gặp sự cố khi lưu công việc của bạn',
    description: 'Title for an alert indicating saving error in the studio environment',
  },
  warningDescription: {
    id: 'course-authoring.generic.saving-error-alert.description',
    defaultMessage: 'Điều này có thể do lỗi máy chủ hoặc kết nối internet của bạn. Hãy thử tải lại trang hoặc kiểm tra kết nối mạng.',
    description: 'Description providing possible reasons and solutions for saving error in the studio environment',
  },
  warningTitleAriaLabelledBy: {
    id: 'course-authoring.generic.saving-error-alert.title.aria.labelled-by',
    defaultMessage: 'saving-error-alert-title',
    description: 'ARIA label ID for the title of the saving error alert',
  },
  warningDescriptionAriaDescribedBy: {
    id: 'course-authoring.generic.saving-error-alert.aria.described-by',
    defaultMessage: 'saving-error-alert-description',
    description: 'ARIA description ID for the saving error alert',
  },
});

export default messages;