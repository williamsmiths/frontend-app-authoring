import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  componentCardMenuAlt: {
    id: 'course-authoring.library-authoring.component.menu',
    defaultMessage: 'Menu thao tác thành phần',
    description: 'Alt/title text for the component card menu button.',
  },
  collectionCardMenuAlt: {
    id: 'course-authoring.library-authoring.collection.menu',
    defaultMessage: 'Menu thao tác bộ sưu tập',
    description: 'Alt/title text for the collection card menu button.',
  },
  containerCardMenuAlt: {
    id: 'course-authoring.library-authoring.container.menu',
    defaultMessage: 'Menu thao tác vùng chứa',
    description: 'Alt/title text for the container card menu button.',
  },
  menuOpen: {
    id: 'course-authoring.library-authoring.menu.open',
    defaultMessage: 'Mở',
    description: 'Menu item for open a collection/container.',
  },
  menuEdit: {
    id: 'course-authoring.library-authoring.component.menu.edit',
    defaultMessage: 'Chỉnh sửa',
    description: 'Menu item for edit a component.',
  },
  menuCopyToClipboard: {
    id: 'course-authoring.library-authoring.component.menu.copy',
    defaultMessage: 'Sao chép vào clipboard',
    description: 'Menu item for copy a component.',
  },
  menuDelete: {
    id: 'course-authoring.library-authoring.component.menu.delete',
    defaultMessage: 'Xóa',
    description: 'Menu item for deleting a component.',
  },
  menuAddToCollection: {
    id: 'course-authoring.library-authoring.component.menu.add',
    defaultMessage: 'Thêm vào bộ sưu tập',
    description: 'Menu item for add a component to collection.',
  },
  menuRemoveFromCollection: {
    id: 'course-authoring.library-authoring.component.menu.remove',
    defaultMessage: 'Xóa khỏi bộ sưu tập',
    description: 'Menu item for remove an item from collection.',
  },
  removeComponentFromCollectionSuccess: {
    id: 'course-authoring.library-authoring.component.remove-from-collection-success',
    defaultMessage: 'Đã xóa mục thành công',
    description: 'Message for successful removal of an item from collection.',
  },
  removeComponentFromCollectionFailure: {
    id: 'course-authoring.library-authoring.component.remove-from-collection-failure',
    defaultMessage: 'Xóa mục thất bại',
    description: 'Message for failure of removal of an item from collection.',
  },
  deleteComponentWarningTitle: {
    id: 'course-authoring.library-authoring.component.delete-confirmation-title',
    defaultMessage: 'Xóa thành phần',
    description: 'Title text for the warning displayed before deleting a component',
  },
  deleteComponentNamePlaceholder: {
    id: 'course-authoring.library-authoring.component.delete-confirmation-placeholder',
    defaultMessage: 'thành phần này',
    description: 'Text shown in place of the component\'s title while we\'re loading the title',
  },
  deleteComponentConfirm: {
    id: 'course-authoring.library-authoring.component.delete-confirmation-text',
    defaultMessage: 'Xóa {componentName}? {message}',
    description: 'Confirmation text to display before deleting a component',
  },
  deleteComponentConfirmMsg1: {
    id: 'course-authoring.library-authoring.component.delete-confirmation-msg-1',
    defaultMessage: 'Nếu thành phần này đã được sử dụng trong khóa học, các bản sao đó sẽ không bị xóa nhưng sẽ không còn nhận cập nhật từ thư viện.',
    description: 'First part of confirmation message to display before deleting a component',
  },
  deleteComponentConfirmMsg2: {
    id: 'course-authoring.library-authoring.component.delete-confirmation-msg-2',
    defaultMessage: 'Nếu thành phần này đã được sử dụng trong bất kỳ bài học nào, nó cũng sẽ bị xóa khỏi các bài học đó.',
    description: 'Second part of confirmation message to display before deleting a component',
  },
  deleteComponentCancelButton: {
    id: 'course-authoring.library-authoring.component.cancel-delete-button',
    defaultMessage: 'Hủy',
    description: 'Button to cancel deletion of a component',
  },
  deleteComponentButton: {
    id: 'course-authoring.library-authoring.component.confirm-delete-button',
    defaultMessage: 'Xóa',
    description: 'Button to confirm deletion of a component',
  },
  deleteComponentSuccess: {
    id: 'course-authoring.library-authoring.component.delete-error-success',
    defaultMessage: 'Đã xóa thành phần',
    description: 'Message to display on delete component success',
  },
  undoDeleteComponentToastAction: {
    id: 'course-authoring.library-authoring.component.undo-delete-component-toast-button',
    defaultMessage: 'Hoàn tác',
    description: 'Toast message to undo deletion of component',
  },
  undoDeleteComponentToastSuccess: {
    id: 'course-authoring.library-authoring.component.undo-delete-component-toast-text',
    defaultMessage: 'Hoàn tác thành công',
    description: 'Message to display on undo delete component success',
  },
  undoDeleteComponentToastFailed: {
    id: 'course-authoring.library-authoring.component.undo-delete-component-failed',
    defaultMessage: 'Hoàn tác xóa thành phần thất bại',
    description: 'Message to display on failure to undo delete component',
  },
  deleteCollection: {
    id: 'course-authoring.library-authoring.collection.delete-menu-text',
    defaultMessage: 'Xóa',
    description: 'Menu item to delete a collection.',
  },
  deleteCollectionConfirm: {
    id: 'course-authoring.library-authoring.collection.delete-confirmation-text',
    defaultMessage: 'Bạn có chắc muốn xóa bộ sưu tập: {collectionTitle}?',
    description: 'Confirmation text to display before deleting collection',
  },
  deleteCollectionFailed: {
    id: 'course-authoring.library-authoring.collection.delete-failed-error',
    defaultMessage: 'Xóa bộ sưu tập thất bại',
    description: 'Message to display on failure to delete collection',
  },
  deleteCollectionSuccess: {
    id: 'course-authoring.library-authoring.collection.delete-error-success',
    defaultMessage: 'Đã xóa bộ sưu tập',
    description: 'Message to display on delete collection success',
  },
  undoDeleteCollectionToastAction: {
    id: 'course-authoring.library-authoring.collection.undo-delete-collection-toast-button',
    defaultMessage: 'Hoàn tác',
    description: 'Toast message to undo deletion of collection',
  },
  undoDeleteCollectionToastMessage: {
    id: 'course-authoring.library-authoring.collection.undo-delete-collection-toast-text',
    defaultMessage: 'Hoàn tác thành công',
    description: 'Message to display on undo delete collection success',
  },
  undoDeleteCollectionToastFailed: {
    id: 'course-authoring.library-authoring.collection.undo-delete-collection-failed',
    defaultMessage: 'Hoàn tác xóa bộ sưu tập thất bại',
    description: 'Message to display on failure to undo delete collection',
  },
  componentPickerSingleSelectTitle: {
    id: 'course-authoring.library-authoring.component-picker.single.title',
    defaultMessage: 'Thêm',
    description: 'Button title for picking a component',
  },
  componentPickerMultipleSelectTitle: {
    id: 'course-authoring.library-authoring.component-picker.multiple.title',
    defaultMessage: 'Chọn',
    description: 'Button title for selecting multiple components',
  },
  unpublishedChanges: {
    id: 'course-authoring.library-authoring.component.unpublished-changes',
    defaultMessage: 'Thay đổi chưa xuất bản',
    description: 'Badge text shown when a component has unpublished changes',
  },
  publishConfirmationTitle: {
    id: 'course-authoring.library-authoring.component.publish-confirmation.title',
    defaultMessage: 'Xuất bản {displayName}',
    description: 'Title of the modal to confirm publish a component in a library',
  },
  publishConfirmationButton: {
    id: 'course-authoring.library-authoring.component.publish-confirmation.confirm',
    defaultMessage: 'Xuất bản',
    description: 'Text in confirmation button of the modal to confirm publish a component in a library',
  },
  publishConfirmationBody: {
    id: 'course-authoring.library-authoring.component.publish-confirmation.body',
    defaultMessage: 'Xuất bản tất cả thay đổi chưa xuất bản cho thành phần này?',
    description: 'Body text of the modal to confirm publish a component in a library',
  },
  publishConfimrationDownstreamsBody: {
    id: 'course-authoring.library-authoring.component.publish-confirmation.downsteams-body',
    defaultMessage: 'Nội dung này hiện đang được sử dụng trong:',
    description: 'Body text to show downstreams of the modal to confirm publish a component in a library',
  },
  publishConfirmationDownstreamsAlert: {
    id: 'course-authoring.library-authoring.component.publish-confirmation.downsteams-alert',
    defaultMessage: 'Thành phần này có thể được đồng bộ trong các khóa học sau khi xuất bản.',
    description: 'Alert text of the modal to confirm publish a component in a library.',
  },
  menuDeleteContainer: {
    id: 'course-authoring.library-authoring.container.delete-menu-text',
    defaultMessage: 'Xóa',
    description: 'Menu item to delete a container.',
  },
  deleteUnitWarningTitle: {
    id: 'course-authoring.library-authoring.unit.delete-confirmation-title',
    defaultMessage: 'Xóa bài học',
    description: 'Title text for the warning displayed before deleting a Unit',
  },
  deleteUnitConfirm: {
    id: 'course-authoring.library-authoring.unit.delete-confirmation-text',
    defaultMessage: 'Xóa {unitName}? {message}',
    description: 'Confirmation text to display before deleting a unit',
  },
  deleteUnitConfirmMsg1: {
    id: 'course-authoring.library-authoring.unit.delete-confirmation-msg-1',
    defaultMessage: 'Các khóa học liên quan sẽ ngừng nhận cập nhật.',
    description: 'First part of confirmation message to display before deleting a unit',
  },
  deleteUnitConfirmMsg2: {
    id: 'course-authoring.library-authoring.unit.delete-confirmation-msg-2',
    defaultMessage: 'Các thành phần sẽ vẫn tồn tại trong thư viện.',
    description: 'Second part of confirmation message to display before deleting a unit',
  },
  deleteUnitSuccess: {
    id: 'course-authoring.library-authoring.unit.delete.success',
    defaultMessage: 'Đã xóa bài học',
    description: 'Message to display on delete unit success',
  },
  deleteUnitFailed: {
    id: 'course-authoring.library-authoring.unit.delete-failed-error',
    defaultMessage: 'Xóa bài học thất bại',
    description: 'Message to display on failure to delete a unit',
  },
  undoDeleteContainerToastAction: {
    id: 'course-authoring.library-authoring.container.undo-delete-container-toast-button',
    defaultMessage: 'Hoàn tác',
    description: 'Toast message to undo deletion of container',
  },
  undoDeleteContainerToastMessage: {
    id: 'course-authoring.library-authoring.container.undo-delete-container-toast-text',
    defaultMessage: 'Hoàn tác thành công',
    description: 'Message to display on undo delete container success',
  },
  undoDeleteUnitToastFailed: {
    id: 'course-authoring.library-authoring.unit.undo-delete-unit-failed',
    defaultMessage: 'Hoàn tác xóa bài học thất bại',
    description: 'Message to display on failure to undo delete unit',
  },
  containerPreviewMoreBlocks: {
    id: 'course-authoring.library-authoring.component.container-card-preview.more-blocks',
    defaultMessage: '+{count}',
    description: 'Count shown when a container has more blocks than will fit on the card preview.',
  },
  removeComponentFromUnitMenu: {
    id: 'course-authoring.library-authoring.unit.component.remove.button',
    defaultMessage: 'Xóa khỏi bài học',
    description: 'Text of the menu item to remove a component from a unit',
  },
  removeComponentFromContainerSuccess: {
    id: 'course-authoring.library-authoring.component.remove-from-container-success',
    defaultMessage: 'Đã xóa thành phần thành công',
    description: 'Message for successful removal of a component from container.',
  },
  removeComponentFromContainerFailure: {
    id: 'course-authoring.library-authoring.component.remove-from-container-failure',
    defaultMessage: 'Xóa thành phần thất bại',
    description: 'Message for failure of removal of a component from container.',
  },
  undoRemoveComponentFromContainerToastAction: {
    id: 'course-authoring.library-authoring.component.undo-remove-from-container-toast-button',
    defaultMessage: 'Hoàn tác',
    description: 'Toast message to undo remove a component from container.',
  },
  undoRemoveComponentFromContainerToastSuccess: {
    id: 'course-authoring.library-authoring.component.undo-remove-component-from-container-toast-text',
    defaultMessage: 'Hoàn tác thành công',
    description: 'Message to display on undo delete component success',
  },
  undoRemoveComponentFromContainerToastFailed: {
    id: 'course-authoring.library-authoring.component.undo-remove-component-from-container-failed',
    defaultMessage: 'Hoàn tác xóa thành phần thất bại',
    description: 'Message to display on failure to undo delete component',
  },
});
export default messages;