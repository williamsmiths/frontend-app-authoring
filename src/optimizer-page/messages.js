import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.course-optimizer.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.course-optimizer.heading.title',
    defaultMessage: 'Trình Tối Ưu Hóa Khóa Học',
  },
  headingSubtitle: {
    id: 'course-authoring.course-optimizer.heading.subtitle',
    defaultMessage: 'Công Cụ',
  },
  description1: {
    id: 'course-authoring.course-optimizer.description1',
    defaultMessage: `Công cụ này sẽ quét phiên bản đã xuất bản của khóa học để tìm các liên kết bị hỏng.
    Các thay đổi chưa xuất bản sẽ không được включ trong quá trình quét.
    Lưu ý rằng quá trình này sẽ mất nhiều thời gian hơn đối với các khóa học lớn.
    Để cập nhật kết quả sau khi bạn đã xuất bản thay đổi mới,
    hãy nhấn nút "Bắt đầu quét" một lần nữa.
    `,
  },
  description2: {
    id: 'course-authoring.course-optimizer.description2',
    defaultMessage: 'Liên kết bị hỏng là các liên kết trỏ đến website, hình ảnh hoặc video bên ngoài không tồn tại hoặc không còn khả dụng. Những liên kết này có thể gây khó khăn cho người học khi truy cập nội dung.',
  },
  card1Title: {
    id: 'course-authoring.course-optimizer.card1.title',
    defaultMessage: 'Quét khóa học để tìm liên kết bị hỏng',
  },
  card2Title: {
    id: 'course-authoring.course-optimizer.card2.title',
    defaultMessage: 'Quét khóa học để tìm liên kết bị hỏng',
  },
  buttonTitle: {
    id: 'course-authoring.course-optimizer.button.title',
    defaultMessage: 'Bắt đầu quét',
  },
  preparingStepTitle: {
    id: 'course-authoring.course-optimizer.peparing-step.title',
    defaultMessage: 'Đang Chuẩn Bị',
  },
  preparingStepDescription: {
    id: 'course-authoring.course-optimizer.peparing-step.description',
    defaultMessage: 'Đang chuẩn bị bắt đầu quá trình quét',
  },
  scanningStepTitle: {
    id: 'course-authoring.course-optimizer.scanning-step.title',
    defaultMessage: 'Đang quét',
  },
  scanningStepDescription: {
    id: 'course-authoring.course-optimizer.scanning-step.description',
    defaultMessage: 'Đang quét các liên kết bị hỏng trong khóa học (Bạn có thể rời trang này an toàn, nhưng nên tránh thay đổi nội dung lớn cho đến khi quá trình hoàn tất)',
  },
  successStepTitle: {
    id: 'course-authoring.course-optimizer.success-step.title',
    defaultMessage: 'Thành Công',
  },
  successStepDescription: {
    id: 'course-authoring.course-optimizer.success-step.description',
    defaultMessage: 'Quá trình quét đã hoàn tất. Bạn có thể xem danh sách kết quả bên dưới.',
  },
  lastScannedOn: {
    id: 'course-authoring.course-optimizer.last-scanned-on',
    defaultMessage: 'Quét lần cuối vào',
  },
});

export default messages;