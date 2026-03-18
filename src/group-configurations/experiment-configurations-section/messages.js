import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.group-configurations.experiment-configuration.title',
    defaultMessage: 'Cấu hình nhóm thử nghiệm',
    description: 'Title for the page displaying experiment group configurations.',
  },
  addNewGroup: {
    id: 'course-authoring.group-configurations.experiment-group.add-new-group',
    defaultMessage: 'Cấu hình nhóm mới',
    description: 'Label for adding a new experiment group configuration.',
  },
  experimentConfigurationName: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name',
    defaultMessage: 'Tên cấu hình nhóm',
    description: 'Label for the input field to enter the name of an experiment group configuration.',
  },
  experimentConfigurationId: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.id',
    defaultMessage: 'ID cấu hình nhóm {id}',
    description: 'Label displaying the ID of an experiment group configuration.',
  },
  experimentConfigurationNameFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.feedback',
    defaultMessage: 'Tên hoặc mô tả ngắn của cấu hình.',
    description: 'Feedback message for the name/description input field of an experiment group configuration.',
  },
  experimentConfigurationNamePlaceholder: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.placeholder',
    defaultMessage: 'Đây là tên của cấu hình nhóm',
    description: 'Placeholder text for the name input field of an experiment group configuration.',
  },
  experimentConfigurationNameRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.required',
    defaultMessage: 'Tên cấu hình nhóm là bắt buộc.',
    description: 'Error message displayed when the name of the experiment group configuration is required but not provided.',
  },
  experimentConfigurationDescription: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description',
    defaultMessage: 'Mô tả',
    description: 'Label for the description input field of an experiment group configuration.',
  },
  experimentConfigurationDescriptionFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description.feedback',
    defaultMessage: 'Mô tả dài (tùy chọn).',
    description: 'Feedback message for the description input field of an experiment group configuration.',
  },
  experimentConfigurationDescriptionPlaceholder: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description.placeholder',
    defaultMessage: 'Đây là mô tả của cấu hình nhóm',
    description: 'Placeholder text for the description input field of an experiment group configuration.',
  },
  experimentConfigurationGroups: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups',
    defaultMessage: 'Các nhóm',
    description: 'Label for the section displaying groups within an experiment group configuration.',
  },
  experimentConfigurationGroupsFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.feedback',
    defaultMessage: 'Tên các nhóm mà học viên sẽ được phân vào, ví dụ: Control, Video, Problems. Bạn phải có ít nhất hai nhóm.',
    description: 'Feedback message for the groups section of an experiment group configuration.',
  },
  experimentConfigurationGroupsNameRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.name.required',
    defaultMessage: 'Tất cả các nhóm phải có tên.',
    description: 'Error message displayed when the name of a group within an experiment group configuration is required but not provided.',
  },
  experimentConfigurationGroupsNameUnique: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.name.unique',
    defaultMessage: 'Tất cả các nhóm phải có tên duy nhất.',
    description: 'Error message displayed when the names of groups within an experiment group configuration are not unique.',
  },
  experimentConfigurationGroupsRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.required',
    defaultMessage: 'Phải có ít nhất một nhóm.',
    description: 'Error message displayed when at least one group is required within an experiment group configuration.',
  },
  experimentConfigurationGroupsTooltip: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.tooltip',
    defaultMessage: 'Xóa',
    description: 'Tooltip message for the delete action within the groups section of an experiment group configuration.',
  },
  experimentConfigurationGroupsAdd: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.add',
    defaultMessage: 'Thêm nhóm khác',
    description: 'Label for the button to add another group within the groups section of an experiment group configuration.',
  },
  experimentConfigurationDeleteRestriction: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.delete.restriction',
    defaultMessage: 'Không thể xóa khi đang được sử dụng bởi một thử nghiệm',
    description: 'Error message indicating that an experiment group configuration cannot be deleted because it is currently in use by an experiment.',
  },
  experimentConfigurationCancel: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.cancel',
    defaultMessage: 'Hủy',
    description: 'Label for the cancel button within an experiment group configuration.',
  },
  experimentConfigurationSave: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.save',
    defaultMessage: 'Lưu',
    description: 'Label for the save button within an experiment group configuration.',
  },
  experimentConfigurationCreate: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.create',
    defaultMessage: 'Tạo',
    description: 'Label for the create button within an experiment group configuration.',
  },
  experimentConfigurationAlert: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.alert',
    defaultMessage: 'Cấu hình này hiện đang được sử dụng trong các thử nghiệm nội dung. Nếu bạn thay đổi các nhóm, bạn có thể cần chỉnh sửa các thử nghiệm đó.',
    description: 'Alert message indicating that an experiment group configuration is currently used in content experiments and that changes may require editing those experiments.',
  },
  emptyExperimentGroup: {
    id: 'course-authoring.group-configurations.experiment-card.empty-experiment-group',
    defaultMessage: 'Cấu hình nhóm này chưa được sử dụng. Bắt đầu bằng cách thêm một thử nghiệm nội dung vào bất kỳ bài học nào qua {outlineComponentLink}.',
    description: 'Message displayed when an experiment group configuration is not in use and suggests adding a content experiment.',
  },
  courseOutline: {
    id: 'course-authoring.group-configurations.experiment-card.course-outline',
    defaultMessage: 'Đề Cương Khóa Học',
    description: 'Label for the course outline section within an experiment card.',
  },
  actionEdit: {
    id: 'course-authoring.group-configurations.experiment-card.action.edit',
    defaultMessage: 'Chỉnh Sửa',
    description: 'Label for the edit action within an experiment card.',
  },
  actionDelete: {
    id: 'course-authoring.group-configurations.experiment-card.action.delete',
    defaultMessage: 'Xóa',
    description: 'Label for the delete action within an experiment card.',
  },
  subtitleModalDelete: {
    id: 'course-authoring.group-configurations.experiment-card.delete-modal.subtitle',
    defaultMessage: 'cấu hình nhóm',
    description: 'Subtitle for the delete modal indicating the type of entity being deleted.',
  },
  deleteRestriction: {
    id: 'course-authoring.group-configurations.experiment-card.delete-restriction',
    defaultMessage: 'Không thể xóa khi đang được sử dụng bởi một bài học',
    description: 'Error message indicating that an experiment card cannot be deleted because it is currently in use by a unit.',
  },
});

export default messages;