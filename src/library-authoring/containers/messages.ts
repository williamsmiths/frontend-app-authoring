import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  openUnitButton: {
    id: 'course-authoring.library-authoring.container-sidebar.open-button',
    defaultMessage: 'Mở',
    description: 'Button text to open unit',
  },
  previewTabTitle: {
    id: 'course-authoring.library-authoring.container-sidebar.preview-tab.title',
    defaultMessage: 'Xem trước',
    description: 'Title for preview tab',
  },
  manageTabTitle: {
    id: 'course-authoring.library-authoring.container-sidebar.manage-tab.title',
    defaultMessage: 'Quản lý',
    description: 'Title for manage tab',
  },
  manageTabTagsTitle: {
    id: 'course-authoring.library-authoring.container-sidebar.manage-tab.tags.title',
    defaultMessage: 'Thẻ ({count})',
    description: 'Title for tags section in manage tab',
  },
  manageTabCollectionsTitle: {
    id: 'course-authoring.library-authoring.container-sidebar.manage-tab.collections.title',
    defaultMessage: 'Bộ sưu tập ({count})',
    description: 'Title for collections section in manage tab',
  },
  publishContainerButton: {
    id: 'course-authoring.library-authoring.container-sidebar.publish-button',
    defaultMessage: 'Xuất bản',
    description: 'Button text to publish the unit/subsection/section',
  },
  publishContainerSuccess: {
    id: 'course-authoring.library-authoring.container-sidebar.publish-success',
    defaultMessage: 'Tất cả thay đổi đã được xuất bản',
    description: 'Popup text after publishing a unit/subsection/section',
  },
  publishContainerFailed: {
    id: 'course-authoring.library-authoring.container-sidebar.publish-failure',
    defaultMessage: 'Xuất bản thay đổi thất bại',
    description: 'Popup text seen if publishing a unit/subsection/section fails',
  },
  settingsTabTitle: {
    id: 'course-authoring.library-authoring.container-sidebar.settings-tab.title',
    defaultMessage: 'Cài đặt',
    description: 'Title for settings tab',
  },
  updateContainerSuccessMsg: {
    id: 'course-authoring.library-authoring.update-container-success-msg',
    defaultMessage: 'Cập nhật vùng chứa thành công.',
    description: 'Message displayed when container is updated successfully',
  },
  updateContainerErrorMsg: {
    id: 'course-authoring.library-authoring.update-container-error-msg',
    defaultMessage: 'Cập nhật vùng chứa thất bại.',
    description: 'Message displayed when container update fails',
  },
});

export default messages;