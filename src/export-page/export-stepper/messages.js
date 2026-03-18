import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  stepperPreparingTitle: {
    id: 'course-authoring.export.stepper.title.preparing',
    defaultMessage: 'Đang Chuẩn Bị',
  },
  stepperExportingTitle: {
    id: 'course-authoring.export.stepper.title.exporting',
    defaultMessage: 'Đang Xuất',
  },
  stepperCompressingTitle: {
    id: 'course-authoring.export.stepper.title.compressing',
    defaultMessage: 'Đang Nén',
  },
  stepperSuccessTitle: {
    id: 'course-authoring.export.stepper.title.success',
    defaultMessage: 'Thành Công',
  },
  stepperPreparingDescription: {
    id: 'course-authoring.export.stepper.description.preparing',
    defaultMessage: 'Đang chuẩn bị bắt đầu xuất',
  },
  stepperExportingDescription: {
    id: 'course-authoring.export.stepper.description.exporting',
    defaultMessage: 'Đang tạo các tệp dữ liệu xuất (Bây giờ bạn có thể rời khỏi trang này một cách an toàn, nhưng tránh thực hiện các thay đổi lớn đối với nội dung cho đến khi việc xuất hoàn tất)',
  },
  stepperCompressingDescription: {
    id: 'course-authoring.export.stepper.description.compressing',
    defaultMessage: 'Đang nén dữ liệu đã xuất và chuẩn bị để tải xuống',
  },
  stepperSuccessDescription: {
    id: 'course-authoring.export.stepper.description.success',
    defaultMessage: 'Khóa học đã xuất của bạn có thể được tải xuống',
  },
  downloadCourseButtonTitle: {
    id: 'course-authoring.export.stepper.download.button.title',
    defaultMessage: 'Tải Xuống Khóa Học Đã Xuất',
  },
  stepperHeaderTitle: {
    id: 'course-authoring.export.stepper.header.title',
    defaultMessage: 'Trạng Thái Xuất Khóa Học',
  },
});

export default messages;
