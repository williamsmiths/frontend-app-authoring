import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.delete-modal.title',
    defaultMessage: 'Xóa {category} này?',
  },
  description: {
    id: 'course-authoring.course-outline.delete-modal.description',
    defaultMessage: 'Việc xóa {category} này là vĩnh viễn và không thể hoàn tác.',
  },
  deleteButton: {
    id: 'course-authoring.course-outline.delete-modal.button.delete',
    defaultMessage: 'Xóa',
  },
  pendingDeleteButton: {
    id: 'course-authoring.course-outline.delete-modal.button.pending-delete',
    defaultMessage: 'Đang xóa',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.delete-modal.button.cancel',
    defaultMessage: 'Hủy',
  },
});

export default messages;