import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.ora.heading',
    defaultMessage: 'Cấu Hình Chấm Điểm Ngang Hàng Linh Hoạt',
    description: 'Title for the modal dialog header',
  },
  ORASettingsHelpLink: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.link',
    defaultMessage: 'Tìm Hiểu Thêm Về Cài Đặt Đánh Giá Phản Hồi Mở',
    description: 'Descriptive text for the hyperlink to the docs site',
  },
  enableFlexPeerGradeLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.label',
    defaultMessage: 'Chấm Điểm Ngang Hàng Linh Hoạt',
    description: 'Label for form switch',
  },
  enableFlexPeerGradeHelp: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.help',
    defaultMessage: 'Bật Chấm Điểm Ngang Hàng Linh Hoạt cho tất cả các đánh giá phản hồi mở trong khóa học có chấm điểm ngang hàng.',
    description: 'Help text describing what happens when the switch is enabled',
  },
  enabledBadgeLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.enabled-badge.label',
    defaultMessage: 'Đã Bật',
    description: 'Label for badge that show users that a setting is enabled',
  },
  cancelLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.cancel-button.label',
    defaultMessage: 'Hủy',
    description: 'Label for button that cancels user changes',
  },
  saveLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-button.label',
    defaultMessage: 'Lưu',
    description: 'Label for button that saves user changes',
  },
  pendingSaveLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.pending-save-button.label',
    defaultMessage: 'Đang Lưu',
    description: 'Label for button that has pending api save calls',
  },
  errorSavingTitle: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-error.title',
    defaultMessage: 'We couldn\'t apply your changes.',
  },
  errorSavingMessage: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-error.message',
    defaultMessage: 'Vui lòng kiểm tra các mục nhập và thử lại.',
  },
});

export default messages;