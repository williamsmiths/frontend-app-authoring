import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'authoring.pagesAndResources.teams.heading',
    defaultMessage: 'Cấu hình Nhóm',
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
    defaultMessage: 'Tìm hiểu thêm về Nhóm',
  },
  teamSize: {
    id: 'authoring.pagesAndResources.teams.teamSize.heading',
    defaultMessage: 'Quy mô nhóm',
  },
  maxTeamSize: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSize',
    defaultMessage: 'Quy mô nhóm tối đa',
  },
  maxTeamSizeHelp: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeHelp',
    defaultMessage: 'Số lượng tối đa người học có thể tham gia vào một nhóm',
  },
  maxTeamSizeEmpty: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeEmpty',
    defaultMessage: 'Nhập quy mô nhóm tối đa',
  },
  maxTeamSizeInvalid: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeInvalid',
    defaultMessage: 'Quy mô nhóm tối đa phải là số nguyên dương lớn hơn 0.',
  },
  maxTeamSizeTooHigh: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeTooHigh',
    defaultMessage: 'Quy mô nhóm tối đa không được lớn hơn {max}',
  },
  groups: {
    id: 'authoring.pagesAndResources.teams.groups.heading',
    defaultMessage: 'Các nhóm',
  },
  groupsHelp: {
    id: 'authoring.pagesAndResources.teams.groups.help',
    defaultMessage: 'Các nhóm là không gian nơi người học có thể tạo hoặc tham gia nhóm.',
  },
  configureGroup: {
    id: 'authoring.pagesAndResources.teams.configureGroup.heading',
    defaultMessage: 'Cấu hình nhóm',
  },
  groupFormNameLabel: {
    id: 'authoring.pagesAndResources.teams.group.name.label',
    defaultMessage: 'Tên',
  },
  groupFormNameHelp: {
    id: 'authoring.pagesAndResources.teams.group.name.help',
    defaultMessage: 'Chọn một tên duy nhất cho nhóm này',
  },
  groupFormNameEmpty: {
    id: 'authoring.pagesAndResources.teams.group.name.error.empty',
    defaultMessage: 'Nhập một tên duy nhất cho nhóm này',
  },
  groupFormNameExists: {
    id: 'authoring.pagesAndResources.teams.group.name.error.exists',
    defaultMessage: 'Có vẻ như tên này đã được sử dụng',
  },
  groupFormDescriptionLabel: {
    id: 'authoring.pagesAndResources.teams.group.description.label',
    defaultMessage: 'Mô tả',
  },
  groupFormDescriptionHelp: {
    id: 'authoring.pagesAndResources.teams.group.description.help',
    defaultMessage: 'Nhập chi tiết về nhóm này',
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
    defaultMessage: 'Mở có quản lý',
  },
  groupTypeOpenManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.open_managed.description',
    defaultMessage: 'Chỉ nhân sự khóa học có thể tạo nhóm. Người học có thể xem, tham gia và rời khỏi nhóm.',
  },
  groupTypeOpenDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.open.description',
    defaultMessage: 'Người học có thể tạo, tham gia, rời khỏi và xem các nhóm khác',
  },
  groupTypePublicManaged: {
    id: 'authoring.pagesAndResources.teams.group.types.public_managed',
    defaultMessage: 'Công khai có quản lý',
  },
  groupTypePublicManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.public_managed.description',
    defaultMessage: 'Chỉ nhân sự khóa học có thể kiểm soát nhóm và thành viên. Người học có thể xem các nhóm khác.',
  },
  groupTypePrivateManaged: {
    id: 'authoring.pagesAndResources.teams.group.types.private_managed',
    defaultMessage: 'Riêng tư có quản lý',
  },
  groupTypePrivateManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.private_managed.description',
    defaultMessage: 'Chỉ nhân sự khóa học có thể kiểm soát nhóm, thành viên và xem các nhóm khác',
  },
  groupFormMaxSizeLabel: {
    id: 'authoring.pagesAndResources.teams.group.maxSize.label',
    defaultMessage: 'Quy mô nhóm tối đa (tùy chọn)',
  },
  groupFormMaxSizeHelp: {
    id: 'authoring.pagesAndResources.teams.group.maxSize.help',
    defaultMessage: 'Ghi đè quy mô nhóm tối đa toàn cục',
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
    defaultMessage: 'Mở rộng trình chỉnh sửa nhóm',
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
    defaultMessage: `edX khuyến nghị bạn không nên xóa nhóm khi khóa học đang chạy.
    Nhóm của bạn sẽ không còn hiển thị trong LMS và người học sẽ không thể rời khỏi các nhóm liên kết với nó.
    Vui lòng xóa người học khỏi nhóm trước khi xóa nhóm liên kết.`,
    description: 'Message displayed to admins when deleting a group. Make sure to include line breaks so that the final text is rendered properly.',
  },
  noGroupsErrorTitle: {
    id: 'authoring.pagesAndResources.teams.enableGroups.error.noGroupsFound.title',
    defaultMessage: 'Không tìm thấy nhóm nào',
    description: 'Title of error message displayed when a user tries to enable teams but no group is defined.',
  },
  noGroupsErrorMessage: {
    id: 'authoring.pagesAndResources.teams.enableGroups.error.noGroupsFound.message',
    defaultMessage: 'Thêm ít nhất một nhóm để bật tính năng Nhóm.',
    description: 'Body of error message displayed when a user tries to enable teams but no group is defined.',
  },
});

export default messages;