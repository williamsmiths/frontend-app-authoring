import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  sidebarTitle: {
    id: 'course-authoring.course-team.sidebar.title',
    defaultMessage: 'Vai trò trong nhóm khóa học',
  },
  sidebarAbout_1: {
    id: 'course-authoring.course-team.sidebar.about-1',
    defaultMessage: 'Thành viên nhóm khóa học với vai trò Nhân sự (Staff) là đồng tác giả khóa học. Họ có toàn quyền viết và chỉnh sửa tất cả nội dung khóa học.',
  },
  sidebarAbout_2: {
    id: 'course-authoring.course-team.sidebar.about-2',
    defaultMessage: 'Quản trị viên (Admin) là những thành viên có thể thêm hoặc xóa các thành viên khác trong nhóm khóa học.',
  },
  sidebarAbout_3: {
    id: 'course-authoring.course-team.sidebar.about-3',
    defaultMessage: 'Tất cả thành viên nhóm khóa học đều có thể truy cập nội dung trong Studio, LMS và Insights, nhưng không tự động được ghi danh vào khóa học.',
  },
  ownershipTitle: {
    id: 'course-authoring.course-team.sidebar.ownership.title',
    defaultMessage: 'Chuyển quyền sở hữu',
  },
  ownershipDescription: {
    id: 'course-authoring.course-team.sidebar.ownership.description',
    defaultMessage: 'Mỗi khóa học phải có một Quản trị viên. Nếu bạn là Quản trị viên và muốn chuyển quyền sở hữu khóa học, hãy nhấp {strong} để đặt một người dùng khác làm Quản trị viên, sau đó yêu cầu họ xóa bạn khỏi danh sách Nhóm khóa học.',
  },
  addAdminAccess: {
    id: 'course-authoring.course-team.sidebar.ownership.addAdminAccess',
    defaultMessage: 'Thêm quyền quản trị',
  },
});

export default messages;