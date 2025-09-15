import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'authoring.course-unit.preview-changes.modal-title',
    defaultMessage: 'Xem trước thay đổi: {blockTitle}',
    description: 'Preview changes modal title text',
  },
  defaultUnitTitle: {
    id: 'authoring.course-unit.preview-changes.modal-default-unit-title',
    defaultMessage: 'Xem trước thay đổi: Đơn vị học',
    description: 'Preview changes modal default title text for units',
  },
  defaultComponentTitle: {
    id: 'authoring.course-unit.preview-changes.modal-default-component-title',
    defaultMessage: 'Xem trước thay đổi: Thành phần',
    description: 'Preview changes modal default title text for components',
  },
  acceptChangesBtn: {
    id: 'authoring.course-unit.preview-changes.accept-changes-btn',
    defaultMessage: 'Chấp nhận thay đổi',
    description: 'Preview changes modal accept button text.',
  },
  acceptChangesFailure: {
    id: 'authoring.course-unit.preview-changes.accept-changes-failure',
    defaultMessage: 'Không thể cập nhật thành phần',
    description: 'Toast message to display when accepting changes call fails',
  },
  ignoreChangesBtn: {
    id: 'authoring.course-unit.preview-changes.accept-ignore-btn',
    defaultMessage: 'Bỏ qua thay đổi',
    description: 'Preview changes modal ignore button text.',
  },
  ignoreChangesFailure: {
    id: 'authoring.course-unit.preview-changes.ignore-changes-failure',
    defaultMessage: 'Không thể bỏ qua thay đổi',
    description: 'Toast message to display when ignore changes call fails',
  },
  cancelBtn: {
    id: 'authoring.course-unit.preview-changes.cancel-btn',
    defaultMessage: 'Hủy',
    description: 'Preview changes modal cancel button text.',
  },
  confirmationTitle: {
    id: 'authoring.course-unit.preview-changes.confirmation-dialog-title',
    defaultMessage: 'Bỏ qua những thay đổi này?',
    description: 'Preview changes confirmation dialog title when user clicks on ignore changes.',
  },
  confirmationDescription: {
    id: 'authoring.course-unit.preview-changes.confirmation-dialog-description',
    defaultMessage: 'Bạn có muốn bỏ qua vĩnh viễn phiên bản đã cập nhật này không? Nếu có, bạn sẽ không thể cập nhật cho đến khi có phiên bản mới hơn được xuất bản (trong thư viện).',
    description: 'Preview changes confirmation dialog description text when user clicks on ignore changes.',
  },
  confirmationConfirmBtn: {
    id: 'authoring.course-unit.preview-changes.confirmation-dialog-confirm-btn',
    defaultMessage: 'Bỏ qua',
    description: 'Preview changes confirmation dialog confirm button text when user clicks on ignore changes.',
  },
  olderVersionPreviewAlert: {
    id: 'course-authoring.review-tab.preview.old-version-alert',
    defaultMessage: 'Bản xem trước phiên bản cũ là phiên bản thư viện trước đó',
    description: 'Alert message stating that older version in preview is of library block',
  },
});

export default messages;