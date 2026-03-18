import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.group-configurations.empty-placeholder.title',
    defaultMessage: 'Bạn chưa tạo nhóm nội dung nào.',
    description: 'Title displayed when there are no content groups created yet.',
  },
  experimentalTitle: {
    id: 'course-authoring.group-configurations.experimental-empty-placeholder.title',
    defaultMessage: 'Bạn chưa tạo cấu hình nhóm nào.',
    description: 'Title displayed when there are no experimental group configurations created yet.',
  },
  button: {
    id: 'course-authoring.group-configurations.empty-placeholder.button',
    defaultMessage: 'Thêm nhóm nội dung đầu tiên',
    description: 'Label for the button to add the first content group when none exist.',
  },
  experimentalButton: {
    id: 'course-authoring.group-configurations.experimental-empty-placeholder.button',
    defaultMessage: 'Thêm cấu hình nhóm đầu tiên',
    description: 'Label for the button to add the first experimental group configuration when none exist.',
  },
});

export default messages;