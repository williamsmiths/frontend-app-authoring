import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  addNewGroup: {
    id: 'course-authoring.group-configurations.content-groups.add-new-group',
    defaultMessage: 'Nhóm nội dung mới',
    description: 'Label for adding a new content group.',
  },
  newGroupHeader: {
    id: 'course-authoring.group-configurations.content-groups.new-group.header',
    defaultMessage: 'Tên nhóm nội dung *',
    description: 'Header text for the input field to enter the name of a new content group.',
  },
  newGroupInputPlaceholder: {
    id: 'course-authoring.group-configurations.content-groups.new-group.input.placeholder',
    defaultMessage: 'Đây là tên của nhóm',
    description: 'Placeholder text for the input field where the name of a new content group is entered.',
  },
  invalidMessage: {
    id: 'course-authoring.group-configurations.content-groups.new-group.invalid-message',
    defaultMessage: 'Tất cả các nhóm phải có tên duy nhất.',
    description: 'Error message displayed when the name of the new content group is not unique.',
  },
  cancelButton: {
    id: 'course-authoring.group-configurations.content-groups.new-group.cancel',
    defaultMessage: 'Hủy',
    description: 'Label for the cancel button when creating a new content group.',
  },
  deleteButton: {
    id: 'course-authoring.group-configurations.content-groups.edit-group.delete',
    defaultMessage: 'Xóa',
    description: 'Label for the delete button when editing a content group.',
  },
  createButton: {
    id: 'course-authoring.group-configurations.content-groups.new-group.create',
    defaultMessage: 'Tạo',
    description: 'Label for the create button when creating a new content group.',
  },
  saveButton: {
    id: 'course-authoring.group-configurations.content-groups.edit-group.save',
    defaultMessage: 'Lưu',
    description: 'Label for the save button when editing a content group.',
  },
  requiredError: {
    id: 'course-authoring.group-configurations.content-groups.new-group.required-error',
    defaultMessage: 'Tên nhóm là bắt buộc',
    description: 'Error message displayed when the name of the content group is required but not provided.',
  },
  alertGroupInUsage: {
    id: 'course-authoring.group-configurations.content-groups.edit-group.alert-group-in-usage',
    defaultMessage: 'Nhóm nội dung này đang được sử dụng trong một hoặc nhiều đơn vị.',
    description: 'Alert message displayed when attempting to delete a content group that is currently in use by one or more units.',
  },
  deleteRestriction: {
    id: 'course-authoring.group-configurations.content-groups.delete-restriction',
    defaultMessage: 'Không thể xóa khi đang được sử dụng bởi một đơn vị',
    description: 'Message indicating that a content group cannot be deleted because it is currently in use by a unit.',
  },
  emptyContentGroups: {
    id: 'course-authoring.group-configurations.container.empty-content-groups',
    defaultMessage: 'Trong {outlineComponentLink}, sử dụng nhóm này để kiểm soát quyền truy cập vào một thành phần.',
    description: 'Message displayed when there are no content groups available, suggesting how to use them within the course outline.',
  },
  courseOutline: {
    id: 'course-authoring.group-configurations.container.course-outline',
    defaultMessage: 'Đề cương khóa học',
    description: 'Label for the course outline link.',
  },
  actionEdit: {
    id: 'course-authoring.group-configurations.container.action.edit',
    defaultMessage: 'Chỉnh sửa',
    description: 'Label for the edit action in the container.',
  },
  actionDelete: {
    id: 'course-authoring.group-configurations.container.action.delete',
    defaultMessage: 'Xóa',
    description: 'Label for the delete action in the container.',
  },
  subtitleModalDelete: {
    id: 'course-authoring.group-configurations.container.delete-modal.subtitle',
    defaultMessage: 'nhóm nội dung',
    description: 'Substr for the delete modal indicating the type of entity being deleted.',
  },
});

export default messages;