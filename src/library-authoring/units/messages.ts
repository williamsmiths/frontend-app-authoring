import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  infoButtonText: {
    id: 'course-authoring.library-authoring.unit-header.buttons.info',
    defaultMessage: 'Thông tin đơn vị',
    description: 'Button text to unit sidebar from unit page',
  },
  addContentButton: {
    id: 'course-authoring.library-authoring.unit-header.buttons.add-content',
    defaultMessage: 'Thêm nội dung',
    description: 'Text of button to add content to unit',
  },
  addExistingContentButton: {
    id: 'course-authoring.library-authoring.unit-header.buttons.add-existing-content',
    defaultMessage: 'Thêm nội dung hiện có',
    description: 'Text of button to add existing content to unit',
  },
  newContentButton: {
    id: 'course-authoring.library-authoring.unit-header.buttons.add-new-content',
    defaultMessage: 'Thêm nội dung mới',
    description: 'Text of button to add new content to unit',
  },
  breadcrumbsAriaLabel: {
    id: 'course-authoring.library-authoring.breadcrumbs.label.text',
    defaultMessage: 'Điều hướng phân cấp',
    description: 'Aria label for navigation breadcrumbs',
  },
  draftChipText: {
    id: 'course-authoring.library-authoring.unit-component.draft-chip.text',
    defaultMessage: 'Bản nháp',
    description: 'Chip in components in unit page that is shown when component has unpublished changes',
  },
  updateComponentSuccessMsg: {
    id: 'course-authoring.library-authoring.unit-component.update.success',
    defaultMessage: 'Cập nhật thành phần thành công.',
    description: 'Message when the component is updated successfully',
  },
  updateComponentErrorMsg: {
    id: 'course-authoring.library-authoring.unit-component.update.error',
    defaultMessage: 'Có lỗi xảy ra khi cập nhật thành phần.',
    description: 'Message when there is an error when updating the component',
  },
  updateContainerSuccessMsg: {
    id: 'course-authoring.library-authoring.update-container-success-msg',
    defaultMessage: 'Cập nhật container thành công.',
    description: 'Message displayed when container is updated successfully',
  },
  updateContainerErrorMsg: {
    id: 'course-authoring.library-authoring.update-container-error-msg',
    defaultMessage: 'Cập nhật container thất bại.',
    description: 'Message displayed when container update fails',
  },
  orderUpdatedMsg: {
    id: 'course-authoring.library-authoring.unit-component.order-updated-msg.text',
    defaultMessage: 'Thứ tự đã được cập nhật',
    description: 'Toast message displayed when components are successfully reordered in a unit',
  },
  failedOrderUpdatedMsg: {
    id: 'course-authoring.library-authoring.unit-component.failed-order-updated-msg.text',
    defaultMessage: 'Cập nhật thứ tự thành phần thất bại',
    description: 'Toast message displayed when components are successfully reordered in a unit',
  },
});

export default messages;