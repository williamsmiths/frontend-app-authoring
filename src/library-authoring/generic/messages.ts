import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  manageCollectionsSuccess: {
    id: 'course-authoring.library-authoring.manage-collections.success',
    defaultMessage: 'Nội dung đã được thêm vào bộ sưu tập.',
    description: 'Message to display on updating item collections',
  },
  manageCollectionsFailed: {
    id: 'course-authoring.library-authoring.manage-collections.failed',
    defaultMessage: 'Không thể thêm nội dung vào bộ sưu tập.',
    description: 'Message to display on failure of updating item collections',
  },
});

export default messages;
