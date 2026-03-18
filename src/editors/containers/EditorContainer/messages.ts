import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  cancelConfirmTitle: {
    id: 'authoring.editorContainer.cancelConfirm.title',
    defaultMessage: 'Thoát trình chỉnh sửa?',
    description: 'Label for modal confirming cancellation',
  },
  cancelConfirmDescription: {
    id: 'authoring.editorContainer.cancelConfirm.description',
    defaultMessage: 'Bạn có chắc muốn thoát trình chỉnh sửa không? Mọi thay đổi chưa lưu sẽ bị mất.',
    description: 'Description text for modal confirming cancellation',
  },
  exitButtonAlt: {
    id: 'authoring.editorContainer.exitButton.alt',
    defaultMessage: 'Thoát trình chỉnh sửa',
    description: 'Alt text for the Exit button',
  },
  keepEditingButtonLabel: {
    id: 'authoring.editorContainer.keepEditing.label',
    defaultMessage: 'Tiếp tục chỉnh sửa',
    description: 'Label for keep editing button on the editor cancel confirmation',
  },
  discardChangesButtonlabel: {
    id: 'authoring.editorContainer.discardChanges.label',
    defaultMessage: 'Hủy thay đổi và thoát',
    description: 'Label for discard changes button on the editor cancel confirmation',
  },
  modalTitle: {
    id: 'authoring.editorContainer.accessibleTitle',
    defaultMessage: 'Hộp thoại trình chỉnh sửa',
    description: 'Text that labels the the editor modal dialog for non-visual users',
  },
  contentSaveFailed: {
    id: 'authoring.editorfooter.save.error',
    defaultMessage: 'Lỗi: Lưu nội dung thất bại. Vui lòng kiểm tra các thay đổi gần đây và thử lại sau.',
    description: 'Error message displayed when content fails to save.',
  },
  cancelButtonAriaLabel: {
    id: 'authoring.editorfooter.cancelButton.ariaLabel',
    defaultMessage: 'Hủy thay đổi và quay lại ngữ cảnh học tập',
    description: 'Screen reader label for cancel button',
  },
  cancelButtonLabel: {
    id: 'authoring.editorfooter.cancelButton.label',
    defaultMessage: 'Hủy',
    description: 'Label for cancel button',
  },
  saveButtonAriaLabel: {
    id: 'authoring.editorfooter.savebutton.ariaLabel',
    defaultMessage: 'Lưu thay đổi và quay lại ngữ cảnh học tập',
    description: 'Screen reader label for save button',
  },
  saveButtonLabel: {
    id: 'authoring.editorfooter.savebutton.label',
    defaultMessage: 'Lưu',
    description: 'Label for Save button',
  },
});

export default messages;