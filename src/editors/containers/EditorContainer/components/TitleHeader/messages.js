import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  loading: {
    id: 'authoring.texteditor.title.loading',
    defaultMessage: 'Đang tải...',
    description: 'Message displayed while loading content',
  },
  cancelChangesLabel: {
    id: 'authoring.texteditor.header.cancelChangesLabel',
    defaultMessage: 'Hủy thay đổi và quay lại ngữ cảnh học tập',
    description: 'Screen reader label title for icon button to return to learning context',
  },
  editTitleLabel: {
    id: 'authoring.texteditor.header.editTitleLabel',
    defaultMessage: 'Chỉnh sửa tiêu đề',
    description: 'Screen reader label title for icon button to edit the xblock title',
  },
  cancelTitleEdit: {
    id: 'authoring.texteditor.header.cancelTitleEdit',
    defaultMessage: 'Hủy',
    description: 'Screen reader label title for icon button to edit the xblock title',
  },
  saveTitleEdit: {
    id: 'authoring.texteditor.header.saveTitleEdit',
    defaultMessage: 'Lưu',
    description: 'Screen reader label title for icon button to edit the xblock title',
  },
});

export default messages;