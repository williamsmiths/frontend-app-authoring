import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title1: {
    id: 'course-authoring.import.sidebar.title1',
    defaultMessage: 'Tại sao lại nhập khóa học?',
  },
  description1: {
    id: 'course-authoring.import.sidebar.description1',
    defaultMessage: 'Bạn có thể muốn chạy phiên bản mới của một khóa học hiện có, hoặc thay thế hoàn toàn khóa học hiện tại. Hoặc, bạn có thể đã phát triển khóa học bên ngoài {studioShortName}.',
  },
  importedContent: {
    id: 'course-authoring.import.sidebar.importedContent',
    defaultMessage: 'Nội dung nào được nhập?',
  },
  importedContentHeading: {
    id: 'course-authoring.import.sidebar.importedContentHeading',
    defaultMessage: 'Nội dung sau đây sẽ được nhập.',
  },
  content1: {
    id: 'course-authoring.import.sidebar.content1',
    defaultMessage: 'Nội dung và cấu trúc khóa học',
  },
  content2: {
    id: 'course-authoring.import.sidebar.content2',
    defaultMessage: 'Ngày học',
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
    defaultMessage: 'Cài đặt trên trang cài đặt nâng cao, bao gồm khóa API MATLAB và LTI passports',
  },
  notImportedContent: {
    id: 'course-authoring.import.sidebar.notImportedContent',
    defaultMessage: 'Nội dung sau đây sẽ không được nhập.',
  },
  content6: {
    id: 'course-authoring.import.sidebar.content6',
    defaultMessage: 'Nội dung dành cho từng học viên, chẳng hạn như điểm và dữ liệu diễn đàn thảo luận',
  },
  content7: {
    id: 'course-authoring.import.sidebar.content7',
    defaultMessage: 'Nhóm giảng dạy',
  },
  warningTitle: {
    id: 'course-authoring.import.sidebar.warningTitle',
    defaultMessage: 'Cảnh báo: nhập khóa học khi khóa học đang chạy',
  },
  warningDescription: {
    id: 'course-authoring.import.sidebar.warningDescription',
    defaultMessage: 'Nếu bạn thực hiện nhập khi khóa học đang chạy và thay đổi tên URL (hoặc các nút url_name) của bất kỳ thành phần bài tập nào, dữ liệu học viên liên quan đến các thành phần đó có thể bị mất. Dữ liệu này bao gồm điểm số bài tập của học viên.',
  },
  learnMoreButtonTitle: {
    id: 'course-authoring.import.sidebar.learnMoreButtonTitle',
    defaultMessage: 'Tìm hiểu thêm về việc nhập khóa học',
  },
});

export default messages;