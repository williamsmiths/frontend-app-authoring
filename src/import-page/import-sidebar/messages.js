import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title1: {
    id: 'course-authoring.import.sidebar.title1',
    defaultMessage: 'Tại sao cần nhập khóa học?',
  },
  description1: {
    id: 'course-authoring.import.sidebar.description1',
    defaultMessage: 'Bạn có thể muốn chạy phiên bản mới của một khóa học hiện có, hoặc thay thế hoàn toàn khóa học hiện tại. Hoặc bạn có thể đã phát triển khóa học bên ngoài {studioShortName}.',
  },
  importedContent: {
    id: 'course-authoring.import.sidebar.importedContent',
    defaultMessage: 'Những nội dung nào được nhập?',
  },
  importedContentHeading: {
    id: 'course-authoring.import.sidebar.importedContentHeading',
    defaultMessage: 'Các nội dung sau sẽ được nhập.',
  },
  content1: {
    id: 'course-authoring.import.sidebar.content1',
    defaultMessage: 'Nội dung và cấu trúc khóa học',
  },
  content2: {
    id: 'course-authoring.import.sidebar.content2',
    defaultMessage: 'Ngày khóa học',
  },
  content3: {
    id: 'course-authoring.import.sidebar.content3',
    defaultMessage: 'Chính sách chấm điểm',
  },
  content4: {
    id: 'course-authoring.import.sidebar.content4',
    defaultMessage: 'Bất kỳ cấu hình nhóm nào',
  },
  content5: {
    id: 'course-authoring.import.sidebar.content5',
    defaultMessage: 'Cài đặt trên trang thiết lập nâng cao, bao gồm khóa API MATLAB và LTI passport',
  },
  notImportedContent: {
    id: 'course-authoring.import.sidebar.notImportedContent',
    defaultMessage: 'Các nội dung sau không được nhập.',
  },
  content6: {
    id: 'course-authoring.import.sidebar.content6',
    defaultMessage: 'Nội dung dành riêng cho học viên, chẳng hạn như điểm số và dữ liệu diễn đàn thảo luận',
  },
  content7: {
    id: 'course-authoring.import.sidebar.content7',
    defaultMessage: 'Nhóm khóa học',
  },
  warningTitle: {
    id: 'course-authoring.import.sidebar.warningTitle',
    defaultMessage: 'Cảnh báo: nhập khi khóa học đang diễn ra',
  },
  warningDescription: {
    id: 'course-authoring.import.sidebar.warningDescription',
    defaultMessage: 'Nếu bạn thực hiện nhập khi khóa học đang chạy và thay đổi tên URL (hoặc các node url_name) của bất kỳ thành phần bài tập nào, dữ liệu học viên liên quan đến các thành phần đó có thể bị mất. Dữ liệu này bao gồm điểm số của học viên.',
  },
  learnMoreButtonTitle: {
    id: 'course-authoring.import.sidebar.learnMoreButtonTitle',
    defaultMessage: 'Tìm hiểu thêm về việc nhập khóa học',
  },
});

export default messages;