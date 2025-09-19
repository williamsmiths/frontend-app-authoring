import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.course-optimizer.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.course-optimizer.heading.title',
    defaultMessage: 'Tối ưu Khóa học',
  },
  headingSubtitle: {
    id: 'course-authoring.course-optimizer.heading.subtitle',
    defaultMessage: 'Công cụ',
  },
  description1: {
    id: 'course-authoring.course-optimizer.description1',
    defaultMessage: `Công cụ này sẽ quét phiên bản đã xuất bản của khóa học để tìm các liên kết hỏng.
Các thay đổi chưa xuất bản sẽ không được đưa vào quá trình quét.
Lưu ý rằng quá trình này sẽ mất nhiều thời gian hơn với các khóa học lớn.
Để cập nhật quét sau khi bạn đã xuất bản các thay đổi mới cho khóa học,
hãy nhấn lại nút "Bắt đầu quét".`,
  },
  description2: {
    id: 'course-authoring.course-optimizer.description2',
    defaultMessage: 'Liên kết hỏng là các liên kết trỏ tới các trang web bên ngoài, hình ảnh hoặc video không tồn tại hoặc không còn khả dụng. Những liên kết này có thể gây ra sự cố cho học viên khi họ cố truy cập nội dung.',
  },
  card1Title: {
    id: 'course-authoring.course-optimizer.card1.title',
    defaultMessage: 'Quét khóa học của tôi để tìm liên kết hỏng',
  },
  card2Title: {
    id: 'course-authoring.course-optimizer.card2.title',
    defaultMessage: 'Quét khóa học của tôi để tìm liên kết hỏng',
  },
  buttonTitle: {
    id: 'course-authoring.course-optimizer.button.title',
    defaultMessage: 'Bắt đầu quét',
  },
  preparingStepTitle: {
    id: 'course-authoring.course-optimizer.peparing-step.title',
    defaultMessage: 'Đang chuẩn bị',
  },
  preparingStepDescription: {
    id: 'course-authoring.course-optimizer.peparing-step.description',
    defaultMessage: 'Chuẩn bị để bắt đầu quét',
  },
  scanningStepTitle: {
    id: 'course-authoring.course-optimizer.scanning-step.title',
    defaultMessage: 'Đang quét',
  },
  scanningStepDescription: {
    id: 'course-authoring.course-optimizer.scanning-step.description',
    defaultMessage: 'Đang quét các liên kết hỏng trong khóa học của bạn (Bạn có thể rời khỏi trang này an toàn, nhưng tránh thực hiện các thay đổi lớn cho nội dung cho đến khi quá trình quét hoàn tất)',
  },
  successStepTitle: {
    id: 'course-authoring.course-optimizer.success-step.title',
    defaultMessage: 'Thành công',
  },
  successStepDescription: {
    id: 'course-authoring.course-optimizer.success-step.description',
    defaultMessage: 'Quá trình quét đã hoàn tất. Bạn có thể xem danh sách kết quả bên dưới.',
  },
  lastScannedOn: {
    id: 'course-authoring.course-optimizer.last-scanned-on',
    defaultMessage: 'Lần quét cuối cùng vào',
  },
});

export default messages;