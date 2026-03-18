import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  sidebarTitle: {
    id: 'course-authoring.course-team.sidebar.title',
    defaultMessage: 'Vai trò trong nhóm khóa học',
  },
  sidebarAbout_1: {
    id: 'course-authoring.course-team.sidebar.about-1',
    defaultMessage: 'Các thành viên nhóm khóa học có vai trò Nhân viên (Staff) là đồng tác giả của khóa học. Họ có đầy đủ quyền viết và chỉnh sửa toàn bộ nội dung khóa học.',
  },
  sidebarAbout_2: {
    id: 'course-authoring.course-team.sidebar.about-2',
    defaultMessage: 'Quản trị viên (Admin) là các thành viên của nhóm khóa học có quyền thêm hoặc xóa các thành viên khác khỏi nhóm.',
  },
  sidebarAbout_3: {
    id: 'course-authoring.course-team.sidebar.about-3',
    defaultMessage: 'Tất cả thành viên của nhóm khóa học có thể truy cập nội dung trong Studio, LMS và Insights, nhưng sẽ không tự động được ghi danh vào khóa học.',
  },
  ownershipTitle: {
    id: 'course-authoring.course-team.sidebar.ownership.title',
    defaultMessage: 'Chuyển quyền sở hữu',
  },
  ownershipDescription: {
    id: 'course-authoring.course-team.sidebar.ownership.description',
    defaultMessage: 'Mỗi khóa học phải có ít nhất một Quản trị viên (Admin). Nếu bạn là Quản trị viên và muốn chuyển quyền sở hữu khóa học, hãy nhấp vào {strong} để cấp quyền Quản trị viên cho người dùng khác, sau đó yêu cầu người đó xóa bạn khỏi danh sách Nhóm khóa học.',
  },
  addAdminAccess: {
    id: 'course-authoring.course-team.sidebar.ownership.addAdminAccess',
    defaultMessage: 'Cấp quyền quản trị',
  },
});

export default messages;