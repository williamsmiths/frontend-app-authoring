import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.custom-pages.heading',
    defaultMessage: 'Trang tùy chỉnh',
  },
  errorAlertMessage: {
    id: 'course-authoring.custom-pages.errorAlert.message',
    defaultMessage: 'Không thể {actionName} trang. Vui lòng thử lại.',
  },
  note: {
    id: 'course-authoring.custom-pages.note',
    defaultMessage: `Lưu ý: Các trang có thể được truy cập công khai. Nếu người dùng biết URL
      của một trang, họ có thể xem trang đó ngay cả khi chưa đăng ký
      hoặc chưa đăng nhập vào khóa học của bạn.`,
  },
  addPageHeaderLabel: {
    id: 'course-authoring.custom-pages.header.addPage.label',
    defaultMessage: 'Trang mới',
  },
  viewLiveLabel: {
    id: 'course-authoring.custom-pages.header.viewLive.label',
    defaultMessage: 'Xem trực tiếp',
  },
  pageExplanationHeader: {
    id: 'course-authoring.custom-pages.pageExplanation.header',
    defaultMessage: 'Trang là gì?',
  },
  pageExplanationBody: {
    id: 'course-authoring.custom-pages.pageExplanation.body',
    defaultMessage: `Các trang được hiển thị theo chiều ngang ở đầu khóa học của bạn. Các trang mặc định (Home, Course, Discussion, Wiki, và Progress)
      được theo sau bởi sách giáo trình và các trang tùy chỉnh mà bạn tạo.`,
  },
  customPagesExplanationHeader: {
    id: 'course-authoring.custom-pages.customPagesExplanation.header',
    defaultMessage: 'Trang tùy chỉnh',
  },
  customPagesExplanationBody: {
    id: 'course-authoring.custom-pages.customPagesExplanation.body',
    defaultMessage: `Bạn có thể tạo và chỉnh sửa các trang tùy chỉnh để cung cấp cho học viên nội dung bổ sung. Ví dụ, bạn có thể tạo
      các trang cho chính sách chấm điểm, slide khóa học và lịch khóa học.`,
  },
  studentViewExplanationHeader: {
    id: 'course-authoring.custom-pages.studentViewExplanation.header',
    defaultMessage: 'Trang hiển thị với học viên như thế nào?',
  },
  studentViewExplanationBody: {
    id: 'course-authoring.custom-pages.studentViewExplanation.body',
    defaultMessage: 'Học viên sẽ thấy các trang mặc định và trang tùy chỉnh ở đầu khóa học và sử dụng các liên kết để điều hướng.',
  },
  studentViewExampleButton: {
    id: 'course-authoring.custom-pages.studentViewExampleButton.label',
    defaultMessage: 'Xem ví dụ',
  },
  studentViewModalTitle: {
    id: 'course-authoring.custom-pages.studentViewModal.title',
    defaultMessage: 'Các trang trong khóa học của bạn',
  },
  studentViewModalBody: {
    id: 'course-authoring.custom-pages.studentViewModal.Body',
    defaultMessage: "Các trang xuất hiện trên thanh điều hướng phía trên của khóa học. Các trang mặc định (Home, Course, Discussion, Wiki, và Progress) được theo sau bởi sách giáo trình và các trang tùy chỉnh.",
  },
  newPageTitle: {
    id: 'course-authoring.custom-pages.page.newPage.title',
    defaultMessage: 'Trống',
  },
  editTooltipContent: {
    id: 'course-authoring.custom-pages.editTooltip.content',
    defaultMessage: 'Chỉnh sửa',
  },
  deleteTooltipContent: {
    id: 'course-authoring.custom-pages.deleteTooltip.content',
    defaultMessage: 'Xóa',
  },
  visibilityTooltipContent: {
    id: 'course-authoring.custom-pages.visibilityTooltip.content',
    defaultMessage: 'Ẩn/hiện trang đối với người học',
  },
  addPageBodyLabel: {
    id: 'course-authoring.custom-pages.body.addPage.label',
    defaultMessage: 'Thêm trang mới',
  },
  addingPageBodyLabel: {
    id: 'course-authoring.custom-pages.body.addingPage.label',
    defaultMessage: 'Đang thêm trang mới',
  },
  deleteConfirmationTitle: {
    id: 'course-authoring.custom-pages..deleteConfirmation.title',
    defaultMessage: 'Xác nhận xóa trang',
  },
  deleteConfirmationMessage: {
    id: 'course-authoring.custom-pages..deleteConfirmation.message',
    defaultMessage: 'Bạn có chắc muốn xóa trang này không? Hành động này không thể hoàn tác.',
  },
  deletePageLabel: {
    id: 'course-authoring.custom-pages.deleteConfirmation.deletePage.label',
    defaultMessage: 'Xóa',
  },
  deletingPageBodyLabel: {
    id: 'course-authoring.custom-pages.deleteConfirmation.deletingPage.label',
    defaultMessage: 'Đang xóa',
  },
  cancelButtonLabel: {
    id: 'course-authoring.custom-pages.deleteConfirmation.cancelButton.label',
    defaultMessage: 'Hủy',
  },
});

export default messages;