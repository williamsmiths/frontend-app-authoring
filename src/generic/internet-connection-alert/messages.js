import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  offlineWarningTitle: {
    id: 'course-authoring.generic.alert.warning.offline.title',
    defaultMessage: 'Studio gặp sự cố khi lưu công việc của bạn',
  },
  offlineWarningDescription: {
    id: 'course-authoring.generic.alert.warning.offline.description',
    defaultMessage: 'Điều này có thể xảy ra do lỗi máy chủ hoặc kết nối Internet của bạn. Hãy thử làm mới trang hoặc đảm bảo bạn đang trực tuyến.',
  },
  offlineWarningTitleAriaLabelledBy: {
    id: 'course-authoring.generic.alert.warning.offline.title.aria.labelled-by',
    defaultMessage: 'alert-internet-error-title',
  },
  offlineWarningDescriptionAriaDescribedBy: {
    id: 'course-authoring.generic.alert.warning.offline.subtitle.aria.described-by',
    defaultMessage: 'alert-internet-error-description',
  },
});

export default messages;