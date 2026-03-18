import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.advanced-settings.heading.title',
    defaultMessage: 'Cài đặt nâng cao',
  },
  headingSubtitle: {
    id: 'course-authoring.advanced-settings.heading.subtitle',
    defaultMessage: 'Cài đặt',
  },
  policy: {
    id: 'course-authoring.advanced-settings.policies.title',
    defaultMessage: 'Định nghĩa chính sách thủ công',
  },
  alertWarning: {
    id: 'course-authoring.advanced-settings.alert.warning',
    defaultMessage: 'Bạn đã thực hiện một số thay đổi',
  },
  alertWarningDescriptions: {
    id: 'course-authoring.advanced-settings.alert.warning.descriptions',
    defaultMessage: 'Các thay đổi của bạn sẽ không có hiệu lực cho đến khi bạn lưu lại. Hãy chú ý định dạng của khóa và giá trị, vì hệ thống không thực hiện kiểm tra hợp lệ.',
  },
  alertSuccess: {
    id: 'course-authoring.advanced-settings.alert.success',
    defaultMessage: 'Các thay đổi chính sách của bạn đã được lưu.',
  },
  alertSuccessDescriptions: {
    id: 'course-authoring.advanced-settings.alert.success.descriptions',
    defaultMessage: 'Hệ thống không kiểm tra tính hợp lệ của khóa hoặc cặp giá trị. Nếu gặp khó khăn, hãy kiểm tra lại định dạng của bạn.',
  },
  alertProctoringError: {
    id: 'course-authoring.advanced-settings.alert.proctoring.error',
    defaultMessage: 'Khóa học này có cài đặt kỳ thi có giám sát chưa hoàn chỉnh hoặc không hợp lệ.',
  },
  alertProctoringErrorDescriptions: {
    id: 'course-authoring.advanced-settings.alert.proctoring.error.descriptions',
    defaultMessage: 'Bạn sẽ không thể thực hiện thay đổi cho đến khi các cài đặt sau được cập nhật ở trang bên dưới.',
  },
  buttonSaveText: {
    id: 'course-authoring.advanced-settings.alert.button.save',
    defaultMessage: 'Lưu thay đổi',
  },
  buttonSavingText: {
    id: 'course-authoring.advanced-settings.alert.button.saving',
    defaultMessage: 'Đang lưu...',
  },
  buttonCancelText: {
    id: 'course-authoring.advanced-settings.alert.button.cancel',
    defaultMessage: 'Hủy',
  },
  deprecatedButtonShowText: {
    id: 'course-authoring.advanced-settings.deprecated.button.show',
    defaultMessage: 'Hiển thị',
  },
  deprecatedButtonHideText: {
    id: 'course-authoring.advanced-settings.deprecated.button.hide',
    defaultMessage: 'Ẩn',
  },
  alertWarningAriaLabelledby: {
    id: 'course-authoring.advanced-settings.alert.warning.aria.labelledby',
    defaultMessage: 'notification-warning-title',
  },
  alertWarningAriaDescribedby: {
    id: 'course-authoring.advanced-settings.alert.warning.aria.describedby',
    defaultMessage: 'notification-warning-description',
  },
  alertSuccessAriaLabelledby: {
    id: 'course-authoring.advanced-settings.alert.success.aria.labelledby',
    defaultMessage: 'tieu-de-xac-nhan',
  },
  alertSuccessAriaDescribedby: {
    id: 'course-authoring.advanced-settings.alert.success.aria.describedby',
    defaultMessage: 'mo-ta-xac-nhan',
  },
  alertProctoringAriaLabelledby: {
    id: 'course-authoring.advanced-settings.alert.proctoring.error.aria.labelledby',
    defaultMessage: 'alert-danger-title',
  },
  alertProctoringDescribedby: {
    id: 'course-authoring.advanced-settings.alert.proctoring.error.aria.describedby',
    defaultMessage: 'alert-danger-description',
  },
});

export default messages;