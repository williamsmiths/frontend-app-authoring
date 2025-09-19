import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  modalTitle: {
    id: 'course-authoring.library-authoring.library-team.title',
    defaultMessage: 'Nhóm Thư viện',
    description: 'Title of the Library Team modal',
  },
  modalClose: {
    id: 'course-authoring.library-authoring.library-team.close',
    defaultMessage: 'Đóng',
    description: 'Title of the Library Team modal close button',
  },
  noMembersFound: {
    id: 'course-authoring.library-authoring.library-team.no-members',
    defaultMessage: 'Nhóm của thư viện này chưa có thành viên nào.',
    description: 'Text to show in the Library Team modal if no team members are found for this library.',
  },
  addTeamMemberButton: {
    id: 'course-authoring.library-authoring.library-team.add-member',
    defaultMessage: 'Thêm thành viên mới',
    descriptior: 'Title of the Library Team modal "Add member" button',
  },
  allowPublicReadLabel: {
    id: 'course-authoring.library-authoring.library-team.allow-public-read',
    defaultMessage: 'Cho phép xem công khai',
    descriptior: 'Title of the Library Team modal "Allow public read" on/off switch',
  },
  allowPublicReadHelperText: {
    id: 'course-authoring.library-authoring.library-team.allow-public-read-helper',
    defaultMessage: 'Cho phép bất kỳ ai có quyền truy cập Studio xem thư viện này và sử dụng nội dung trong các khóa học của họ.',
    descriptior: 'Helper text for the Library Team modal "Allow public read" on/off switch',
  },
  addMemberFormTitle: {
    id: 'course-authoring.library-authoring.add-member-form.title',
    defaultMessage: 'Thêm người dùng vào nhóm thư viện của bạn',
    description: 'Title of the Library Team modal "Add member" form',
  },
  addMemberFormEmailLabel: {
    id: 'course-authoring.library-authoring.add-member-form.email-label',
    defaultMessage: 'Địa chỉ email của người dùng',
    description: 'Label for the email field in the Library Team modal "Add member" form',
  },
  addMemberFormEmailPlaceholder: {
    id: 'course-authoring.library-authoring.add-member-form.email-placeholder',
    defaultMessage: 'ví dụ: {email}',
    description: 'Placeholder text for the email field in the Library Team modal "Add member" form',
  },
  addMemberFormEmailHelperText: {
    id: 'course-authoring.library-authoring.add-member-form.email-helper-text',
    defaultMessage: 'Cung cấp địa chỉ email của người dùng bạn muốn thêm',
    description: 'Helper text for the email field in the Library Team modal "Add member" form',
  },
  addMemberFormSubmitButton: {
    id: 'course-authoring.library-authoring.library-team.save-member',
    defaultMessage: 'Thêm thành viên',
    description: 'Title of the Submit button on the Library Team modal "Add member" form',
  },
  cancelButton: {
    id: 'course-authoring.library-authoring.library-team.cancel',
    defaultMessage: 'Hủy',
    description: 'Title of the Cancel button on the Library Team modal "Add member" form',
  },
  deleteMember: {
    id: 'course-authoring.library-authoring.library-team.delete-member',
    defaultMessage: 'Xóa thành viên nhóm',
    description: 'Title of the Library Team modal "Delete member" button',
  },
  cannotChangeRoleSingleAdmin: {
    id: 'course-authoring.library-authoring.library-team.cannot-changerole-single-admin',
    defaultMessage: 'Thăng một thành viên khác thành Admin để thay đổi quyền truy cập của người này.',
    description: (
      'Shown to Library Admins if there\'s only one Admin in the Team,'
      + ' explaining why this member cannot be changed yet.'
    ),
  },
  makeMemberAdmin: {
    id: 'course-authoring.library-authoring.library-team.make-member-admin',
    defaultMessage: 'Đặt làm Admin',
    description: 'Title of the Library Team modal button to give a member an Admin role',
  },
  makeMemberAuthor: {
    id: 'course-authoring.library-authoring.library-team.make-member-author',
    defaultMessage: 'Đặt làm Tác giả',
    description: 'Title of the Library Team modal button to give a member an Author role',
  },
  makeMemberReader: {
    id: 'course-authoring.library-authoring.library-team.make-member-reader',
    defaultMessage: 'Đặt làm Chỉ đọc',
    description: 'Title of the Library Team modal button to give a member an Read-Only role',
  },
  roleAdmin: {
    id: 'course-authoring.library-authoring.library-team.admin-role',
    defaultMessage: 'Admin',
    description: 'Label to use for the "Administrator" Library role',
  },
  roleAuthor: {
    id: 'course-authoring.library-authoring.library-team.author-role',
    defaultMessage: 'Tác giả',
    description: 'Label to use for the "Author" Library role',
  },
  roleReader: {
    id: 'course-authoring.library-authoring.library-team.read-only-role',
    defaultMessage: 'Chỉ đọc',
    description: 'Label to use for the "Read Only" Library role',
  },
  roleUnknown: {
    id: 'course-authoring.library-authoring.library-team.unknown-role',
    defaultMessage: 'Không xác định',
    description: 'Label to use for an unknown Library role',
  },
  roleYou: {
    id: 'course-authoring.library-authoring.library-team.you-role',
    defaultMessage: 'Bạn!',
    description: 'Label to use when labeling the current user\'s Library role',
  },
  addMemberSuccess: {
    id: 'course-authoring.library-authoring.library-team.add-member-success',
    defaultMessage: 'Thêm thành viên nhóm thành công',
    description: 'Message shown when a Library Team member is successfully added',
  },
  addMemberError: {
    id: 'course-authoring.library-authoring.library-team.add-member-error',
    defaultMessage: 'Lỗi khi thêm thành viên nhóm',
    description: 'Message shown when an error occurs while adding a Library Team member',
  },
  addMemberSpecificError: {
    id: 'course-authoring.library-authoring.library-team.add-member-specific-error',
    defaultMessage: 'Lỗi khi thêm thành viên nhóm. {message}',
    description: 'Message shown when an error occurs while adding a Library Team member, including a specific error message.',
  },
  deleteMemberSuccess: {
    id: 'course-authoring.library-authoring.library-team.delete-member-success',
    defaultMessage: 'Xóa thành viên nhóm thành công',
    description: 'Message shown when a Library Team member is successfully deleted',
  },
  deleteMemberError: {
    id: 'course-authoring.library-authoring.library-team.delete-member-error',
    defaultMessage: 'Lỗi khi xóa thành viên nhóm',
    description: 'Message shown when an error occurs while updating a Library Team member',
  },
  updateMemberSuccess: {
    id: 'course-authoring.library-authoring.library-team.update-member-success',
    defaultMessage: 'Cập nhật thành viên nhóm thành công',
    description: 'Message shown when a Library Team member is successfully updated',
  },
  updateMemberError: {
    id: 'course-authoring.library-authoring.library-team.update-member-error',
    defaultMessage: 'Lỗi khi cập nhật thành viên nhóm',
    description: 'Message shown when an error occurs while updating a Library Team member',
  },
  updateLibrarySuccess: {
    id: 'course-authoring.library-authoring.library-team.update-library-success',
    defaultMessage: 'Cập nhật thư viện thành công',
    description: 'Message shown when a Library\'s metadata is successfully updated',
  },
  updateLibraryError: {
    id: 'course-authoring.library-authoring.library-team.update-library-error',
    defaultMessage: 'Lỗi khi cập nhật thư viện',
    description: 'Message shown when an error occurs while updating a Library\'s metadata',
  },
});

export default messages;