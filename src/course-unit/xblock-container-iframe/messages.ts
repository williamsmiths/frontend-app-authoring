import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  xblockIframeTitle: {
    id: 'course-authoring.course-unit.xblock.iframe.title',
    defaultMessage: 'Iframe unit khóa học',
    description: 'Title for the xblock iframe',
  },
  legacyEditModalIframeTitle: {
    id: 'course-authoring.course-unit.legacy.modal.xblock-edit.iframe.title',
    defaultMessage: 'Modal chỉnh sửa xBlock legacy',
    description: 'Title for the legacy xblock edit modal iframe',
  },
  xblockIframeLabel: {
    id: 'course-authoring.course-unit.xblock.iframe.label',
    defaultMessage: '{xblockCount} xBlock bên trong khung',
    description: '{xblockCount} xBlocks inside the frame',
  },
  videoPickerModalTitle: {
    id: 'course-authoring.course-unit.xblock.video-editor.title',
    defaultMessage: 'Chọn video',
    description: 'Select video',
  },
});

export default messages;