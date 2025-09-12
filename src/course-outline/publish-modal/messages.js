import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.publish-modal.title',
    defaultMessage: 'Xuất bản {title}',
  },
  description: {
    id: 'course-authoring.course-outline.publish-modal.description',
    defaultMessage: 'Xuất bản tất cả các thay đổi chưa xuất bản cho {category} này?',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.publish-modal.button.cancel',
    defaultMessage: 'Hủy',
  },
  publishButton: {
    id: 'course-authoring.course-outline.publish-modal.button.label',
    defaultMessage: 'Xuất bản',
  },
});

export default messages;
