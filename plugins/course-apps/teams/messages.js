import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'authoring.pagesAndResources.teams.heading',
    defaultMessage: 'Cấu hình nhóm',
  },
  enableTeamsLabel: {
    id: 'authoring.pagesAndResources.teams.enableTeams.label',
    defaultMessage: 'Nhóm',
  },
  enableTeamsHelp: {
    id: 'authoring.pagesAndResources.teams.enableTeams.help',
    defaultMessage: 'Cho phép người học làm việc cùng nhau trong các dự án hoặc hoạt động cụ thể.',
  },
  enableTeamsLink: {
    id: 'authoring.pagesAndResources.teams.enableTeams.link',
    defaultMessage: 'Tìm hiểu thêm về nhóm',
  },
  teamSize: {
    id: 'authoring.pagesAndResources.teams.teamSize.heading',
    defaultMessage: 'Kích thước nhóm',
  },
  maxTeamSize: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSize',
    defaultMessage: 'Số lượng tối đa trong nhóm',
  },
  maxTeamSizeHelp: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeHelp',
    defaultMessage: 'Số lượng người học tối đa có thể tham gia một nhóm',
  },
  maxTeamSizeEmpty: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeEmpty',
    defaultMessage: 'Nhập số lượng tối đa của nhóm',
  },
  maxTeamSizeInvalid: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeInvalid',
    defaultMessage: 'Số lượng tối đa của nhóm phải là số dương lớn hơn 0.',
  },
  maxTeamSizeTooHigh: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeTooHigh',
    defaultMessage: 'Số lượng tối đa của nhóm không được lớn hơn {max}',
  },
  groups: {
    id: 'authoring.pagesAndResources.teams.groups.heading',
    defaultMessage: 'Nhóm',
  },
  groupsHelp: {
    id: 'authoring.pagesAndResources.teams.groups.help',
    defaultMessage: 'Nhóm là không gian nơi người học có thể tạo hoặc tham gia các đội.',
  },
  configureGroup: {
    id: 'authoring.pagesAndResources.teams.configureGroup.heading',
    defaultMessage: 'Cấu hình nhóm',
  },
  groupFormNameLabel: {
    id: 'authoring.pagesAndResources.teams.group.name.label',
    defaultMessage: 'Tên nhóm',
  },
  groupFormNameHelp: {
    id: 'authoring.pagesAndResources.teams.group.name.help',
    defaultMessage: 'Chọn một tên duy nhất cho nhóm này',
  },
  groupFormNameEmpty: {
    id: 'authoring.pagesAndResources.teams.group.name.error.empty',
    defaultMessage: 'Nhập tên duy nhất cho nhóm này',
  },
  groupFormNameExists: {
    id: 'authoring.pagesAndResources.teams.group.name.error.exists',
    defaultMessage: 'Tên này đã được sử dụng',
  },
  groupFormDescriptionLabel: {
    id: 'authoring.pagesAndResources.teams.group.description.label',
    defaultMessage: 'Mô tả',
  },
  groupFormDescriptionHelp: {
    id: 'authoring.pagesAndResources.teams.group.description.help',
    defaultMessage: 'Nhập thông tin chi tiết về nhóm này',
  },
  groupFormDescriptionError: {
    id: 'authoring.pagesAndResources.teams.group.description.error',
    defaultMessage: 'Nhập mô tả cho nhóm này',
  },
  groupFormTypeLabel: {
    id: 'authoring.pagesAndResources.teams.group.type.label',
    defaultMessage: 'Loại',
  },
  groupFormTypeHelp: {
    id: 'authoring.pagesAndResources.teams.group.type.help',
    defaultMessage: 'Kiểm soát ai có thể xem, tạo và tham gia nhóm',
  },
  groupTypeOpen: {
    id: 'authoring.pagesAndResources.teams.group.types.open',
    defaultMessage: 'Mở',
  },
  groupTypeOpenManaged: {
    id: 'authoring.pagesAndResources.teams.group.types.open_managed',
    defaultMessage: 'Mở (quản lý)',
  },
  groupTypeOpenManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.open_managed.description',
    defaultMessage: 'Chỉ nhân viên khóa học có thể tạo nhóm. Người học có thể xem, tham gia và rời nhóm.',
  },
  groupTypeOpenDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.open.description',
    defaultMessage: 'Người học có thể tạo, tham gia, rời và xem các nhóm khác',
  },
  groupTypePublicManaged: {
    id: 'authoring.pagesAndResources.teams.group.types.public_managed',
    defaultMessage: 'Công khai (quản lý)',
  },
  groupTypePublicManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.public_managed.description',
    defaultMessage: 'Chỉ nhân viên khóa học có thể quản lý nhóm và thành viên. Người học có thể xem các nhóm khác.',
  },
  groupTypePrivateManaged: {
    id: 'authoring.pagesAndResources.teams.group.types.private_managed',
    defaultMessage: 'Riêng tư (quản lý)',
  },
  groupTypePrivateManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.private_managed.description',
    defaultMessage: 'Chỉ nhân viên khóa học có thể quản lý nhóm, thành viên và xem các nhóm khác.',
  },
  groupFormMaxSizeLabel: {
    id: 'authoring.pagesAndResources.teams.group.maxSize.label',
    defaultMessage: 'Số lượng tối đa của nhóm (tùy chọn)',
  },
  groupFormMaxSizeHelp: {
    id: 'authoring.pagesAndResources.teams.group.maxSize.help',
    defaultMessage: 'Ghi đè số lượng tối đa toàn cục của nhóm',
  },
  addGroup: {
    id: 'authoring.pagesAndResources.teams.addGroup.button',
    defaultMessage: 'Thêm nhóm',
  },
  deleteAlt: {
    id: 'authoring.pagesAndResources.teams.group.delete',
    defaultMessage: 'Xóa',
  },
  expandAlt: {
    id: 'authoring.pagesAndResources.teams.group.expand',
    defaultMessage: 'Mở trình chỉnh sửa nhóm',
  },
  collapseAlt: {
    id: 'authoring.pagesAndResources.teams.group.collapse',
    defaultMessage: 'Đóng trình chỉnh sửa nhóm',
  },
  delete: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.initiateDelete',
    defaultMessage: 'Xóa',
  },
  cancel: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.cancel-delete.button',
    defaultMessage: 'Hủy',
  },
  groupDeleteHeading: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.heading',
    defaultMessage: 'Xóa nhóm này?',
  },
  groupDeleteBody: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.body',
    defaultMessage: `edX khuyến nghị bạn không nên xóa nhóm khi khóa học đang diễn ra.
Nhóm của bạn sẽ không còn hiển thị trong LMS và người học sẽ không thể rời khỏi các đội liên quan đến nhóm này.
Vui lòng xóa người học khỏi các đội trước khi xóa nhóm tương ứng.`,
  },
  noGroupsErrorTitle: {
    id: 'authoring.pagesAndResources.teams.enableGroups.error.noGroupsFound.title',
    defaultMessage: 'Không tìm thấy nhóm',
  },
  noGroupsErrorMessage: {
    id: 'authoring.pagesAndResources.teams.enableGroups.error.noGroupsFound.message',
    defaultMessage: 'Thêm một hoặc nhiều nhóm để bật tính năng nhóm.',
  },
});

export default messages;