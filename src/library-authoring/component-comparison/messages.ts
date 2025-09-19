import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  oldVersionTitle: {
    id: 'course-authoring.library-authoring.component-comparison.oldVersion',
    defaultMessage: 'Phiên bản cũ',
    description: 'Title shown for old version when comparing changes',
  },
  newVersionTitle: {
    id: 'course-authoring.library-authoring.component-comparison.newVersion',
    defaultMessage: 'Phiên bản mới',
    description: 'Title shown for new version when comparing changes',
  },
  iframeTitlePrefix: {
    id: 'course-authoring.library-authoring.component-comparison.iframeTitlePrefix',
    defaultMessage: 'So sánh thay đổi',
    description: 'Title used for the compare changes dialog',
  },
  previewNotAvailable: {
    id: 'course-authoring.library-authoring.component-comparison.preview-not-available',
    defaultMessage: 'Xem trước không khả dụng cho các thay đổi của đơn vị vào lúc này',
    description: 'Message shown when preview is not available.',
  },
});

export default messages;