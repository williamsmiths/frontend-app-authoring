import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  roleAdmin: {
    id: 'course-authoring.course-team.member.role.admin',
    defaultMessage: 'Quản trị viên',
  },
  roleStaff: {
    id: 'course-authoring.course-team.member.role.staff',
    defaultMessage: 'Nhân sự',
  },
  roleYou: {
    id: 'course-authoring.course-team.member.role.you',
    defaultMessage: 'Bạn!',
  },
  hint: {
    id: 'course-authoring.course-team.member.hint',
    defaultMessage: 'Hãy nâng một thành viên khác lên Quản trị viên để xóa quyền quản trị của bạn',
  },
  addButton: {
    id: 'course-authoring.course-team.member.button.add',
    defaultMessage: 'Thêm quyền quản trị',
  },
  removeButton: {
    id: 'course-authoring.course-team.member.button.remove-admin-access',
    defaultMessage: 'Xóa quyền quản trị',
  },
  deleteUserButton: {
    id: 'course-authoring.course-team.member.button.delete',
    defaultMessage: 'Xóa người dùng',
  },
});

export default messages;