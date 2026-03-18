import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  cancel: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.cancel',
    defaultMessage: 'Hủy',
  },
  save: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.save',
    defaultMessage: 'Lưu',
  },
  saving: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.saving',
    defaultMessage: 'Đang Lưu',
  },
  saved: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.saved',
    defaultMessage: 'Đã Lưu',
  },
  retry: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.retry',
    defaultMessage: 'Thử Lại',
  },
  enabled: {
    id: 'course-authoring.pages-resources.app-settings-modal.badge.enabled',
    defaultMessage: 'Đã Bật',
  },
  disabled: {
    id: 'course-authoring.pages-resources.app-settings-modal.badge.disabled',
    defaultMessage: 'Đã Tắt',
  },
  errorSavingTitle: {
    id: 'course-authoring.pages-resources.app-settings-modal.save-error.title',
    defaultMessage: 'Chúng tôi không thể áp dụng các thay đổi của bạn.',
  },
  errorSavingMessage: {
    id: 'course-authoring.pages-resources.app-settings-modal.save-error.message',
    defaultMessage: 'Vui lòng kiểm tra các mục nhập và thử lại.',
  },
});

export default messages;
