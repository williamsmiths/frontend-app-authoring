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
    // This is only used in the "PreviewChangesEmbed" iframe for the legacy UI
    id: 'course-authoring.library-authoring.component-comparison.iframeTitlePrefix',
    defaultMessage: 'So sánh thay đổi',
    description: 'Title used for the compare changes dialog',
  },
  previewNotAvailable: {
    id: 'course-authoring.library-authoring.component-comparison.preview-not-available',
    defaultMessage: 'Hiện tại không thể xem trước các thay đổi của bài học',
    description: 'Message shown when preview is not available.',
  },
});

export default messages;