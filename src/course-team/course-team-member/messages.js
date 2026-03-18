import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  roleAdmin: {
    id: 'course-authoring.course-team.member.role.admin',
    defaultMessage: 'Quản trị viên',
  },
  roleStaff: {
    id: 'course-authoring.course-team.member.role.staff',
    defaultMessage: 'Nhân viên',
  },
  roleYou: {
    id: 'course-authoring.course-team.member.role.you',
    defaultMessage: 'Bạn',
  },
  hint: {
    id: 'course-authoring.course-team.member.hint',
    defaultMessage: 'Hãy cấp quyền Quản trị viên cho thành viên khác nếu bạn muốn gỡ quyền quản trị của mình',
  },
  addButton: {
    id: 'course-authoring.course-team.member.button.add',
    defaultMessage: 'Cấp quyền quản trị',
  },
  removeButton: {
    id: 'course-authoring.course-team.member.button.remove-admin-access',
    defaultMessage: 'Gỡ quyền quản trị',
  },
  deleteUserButton: {
    id: 'course-authoring.course-team.member.button.delete',
    defaultMessage: 'Xóa người dùng',
  },
});

export default messages;