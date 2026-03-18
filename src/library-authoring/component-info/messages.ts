import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  advancedDetailsTitle: {
    id: 'course-authoring.library-authoring.component.advanced.title',
    defaultMessage: 'Chi tiết nâng cao',
    description: 'Heading for the advanced technical details of a component',
  },
  advancedDetailsAssets: {
    id: 'course-authoring.library-authoring.component.advanced.assets',
    defaultMessage: 'Tài nguyên (Tệp)',
    description: 'Heading for files attached to the component',
  },
  advancedDetailsAssetsDeleteFileTitle: {
    id: 'course-authoring.library-authoring.component.advanced.assets.delete-file-title',
    defaultMessage: 'Xóa tệp',
    description: 'Title for confirmation dialog when deleting a file',
  },
  advancedDetailsAssetsDeleteButton: {
    id: 'course-authoring.library-authoring.component.advanced.assets.delete-btn',
    defaultMessage: 'Xóa tệp này',
    description: 'screen reader description of the delete button for each static asset file',
  },
  advancedDetailsOLX: {
    id: 'course-authoring.library-authoring.component.advanced.olx',
    defaultMessage: 'Nguồn OLX',
    description: 'Heading for the component\'s OLX source code',
  },
  advancedDetailsOLXEditButton: {
    id: 'course-authoring.library-authoring.component.advanced.olx-edit',
    defaultMessage: 'Chỉnh sửa OLX',
    description: 'Label for button to enable editing the OLX',
  },
  advancedDetailsOLXSaveButton: {
    id: 'course-authoring.library-authoring.component.advanced.olx-save',
    defaultMessage: 'Lưu',
    description: 'Button to save changes to the OLX',
  },
  advancedDetailsOLXCancelButton: {
    id: 'course-authoring.library-authoring.component.advanced.olx-save',
    defaultMessage: 'Hủy',
    description: 'Button to cancel changes to the OLX',
  },
  advancedDetailsOLXEditWarning: {
    id: 'course-authoring.library-authoring.component.advanced.olx-warning',
    defaultMessage: 'Hãy cẩn thận! Đây là tính năng nâng cao và lỗi có thể làm hỏng thành phần.',
    description: 'Warning for users about editing OLX directly.',
  },
  advancedDetailsOLXEditFailed: {
    id: 'course-authoring.library-authoring.component.advanced.olx-failed',
    defaultMessage: 'Đã xảy ra lỗi và không thể lưu OLX.',
    description: 'Error message shown when saving the OLX fails.',
  },
  advancedDetailsOLXError: {
    id: 'course-authoring.library-authoring.component.advanced.olx-error',
    defaultMessage: 'Không thể tải OLX',
    description: 'Error message if OLX is unavailable',
  },
  advancedDetailsUsageKey: {
    id: 'course-authoring.library-authoring.component.advanced.usage-key',
    defaultMessage: 'ID (Usage key)',
    description: 'Heading for the component\'s ID',
  },
  updateComponentSuccessMsg: {
    id: 'course-authoring.library-authoring.component.update.success',
    defaultMessage: 'Cập nhật thành phần thành công.',
    description: 'Message when the component is updated successfully',
  },
  updateComponentErrorMsg: {
    id: 'course-authoring.library-authoring.component.update.error',
    defaultMessage: 'Đã xảy ra lỗi khi cập nhật thành phần.',
    description: 'Message when there is an error when updating the component',
  },
  editComponentButtonTitle: {
    id: 'course-authoring.library-authoring.component.edit.title',
    defaultMessage: 'Chỉnh sửa thành phần',
    description: 'Title for edit component button',
  },
  publishComponentButtonTitle: {
    id: 'course-authoring.library-authoring.component.publish.title',
    defaultMessage: 'Xuất bản thành phần',
    description: 'Title for publish component button',
  },
  previewTabTitle: {
    id: 'course-authoring.library-authoring.component.preview-tab.title',
    defaultMessage: 'Xem trước',
    description: 'Title for preview tab',
  },
  manageTabTitle: {
    id: 'course-authoring.library-authoring.component.manage-tab.title',
    defaultMessage: 'Quản lý',
    description: 'Title for manage tab',
  },
  manageTabTagsTitle: {
    id: 'course-authoring.library-authoring.component.manage-tab.tags-title',
    defaultMessage: 'Thẻ ({count})',
    description: 'Title for the Tags container in the management tab',
  },
  manageTabCollectionsTitle: {
    id: 'course-authoring.library-authoring.component.manage-tab.collections-title',
    defaultMessage: 'Bộ sưu tập ({count})',
    description: 'Title for the Collections container in the management tab',
  },
  detailsTabTitle: {
    id: 'course-authoring.library-authoring.component.details-tab.title',
    defaultMessage: 'Chi tiết',
    description: 'Title for details tab',
  },
  detailsTabUsageTitle: {
    id: 'course-authoring.library-authoring.component.details-tab.usage-title',
    defaultMessage: 'Sử dụng thành phần',
    description: 'Title for the Component Usage container in the details tab',
  },
  detailsTabUsageEmpty: {
    id: 'course-authoring.library-authoring.component.details-tab.usage-empty',
    defaultMessage: 'Thành phần này chưa được sử dụng trong khóa học nào.',
    description: 'Message to display in usage section when component is not used in any course',
  },
  detailsTabHistoryTitle: {
    id: 'course-authoring.library-authoring.component.details-tab.history-title',
    defaultMessage: 'Lịch sử thành phần',
    description: 'Title for the Component History container in the details tab',
  },
  previewExpandButtonTitle: {
    id: 'course-authoring.library-authoring.component.preview.expand.title',
    defaultMessage: 'Mở rộng',
    description: 'Title for expand preview button',
  },
  previewModalTitle: {
    id: 'course-authoring.library-authoring.component.preview.modal.title',
    defaultMessage: 'Xem trước thành phần',
    description: 'Title for preview modal',
  },
  componentPickerSingleSelect: {
    id: 'course-authoring.library-authoring.component-picker.single-select',
    defaultMessage: 'Thêm vào khóa học',
    description: 'Button to add component to course',
  },
  componentPickerMultipleSelect: {
    id: 'course-authoring.library-authoring.component-picker.multiple-select',
    defaultMessage: 'Chọn',
    description: 'Button to select component',
  },
  publishSuccessMsg: {
    id: 'course-authoring.component-authoring.component.publish.success',
    defaultMessage: 'Xuất bản thành phần thành công.',
    description: 'Message when the component is published successfully.',
  },
  publishErrorMsg: {
    id: 'course-authoring.component-authoring.component.publish.error',
    defaultMessage: 'Đã xảy ra lỗi khi xuất bản thành phần.',
    description: 'Message when there is an error when publishing the component.',
  },
});

export default messages;