import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  stepperPreparingTitle: {
    id: 'course-authoring.export.stepper.title.preparing',
    defaultMessage: 'Đang chuẩn bị',
  },
  stepperExportingTitle: {
    id: 'course-authoring.export.stepper.title.exporting',
    defaultMessage: 'Đang xuất',
  },
  stepperCompressingTitle: {
    id: 'course-authoring.export.stepper.title.compressing',
    defaultMessage: 'Đang nén',
  },
  stepperSuccessTitle: {
    id: 'course-authoring.export.stepper.title.success',
    defaultMessage: 'Hoàn tất',
  },
  stepperPreparingDescription: {
    id: 'course-authoring.export.stepper.description.preparing',
    defaultMessage: 'Đang chuẩn bị bắt đầu xuất khóa học',
  },
  stepperExportingDescription: {
    id: 'course-authoring.export.stepper.description.exporting',
    defaultMessage: 'Đang tạo các tệp dữ liệu xuất (Bạn có thể rời khỏi trang này an toàn, nhưng tránh thay đổi lớn về nội dung cho đến khi quá trình xuất hoàn tất)',
  },
  stepperCompressingDescription: {
    id: 'course-authoring.export.stepper.description.compressing',
    defaultMessage: 'Đang nén dữ liệu xuất và chuẩn bị để tải xuống',
  },
  stepperSuccessDescription: {
    id: 'course-authoring.export.stepper.description.success',
    defaultMessage: 'Khóa học đã xuất của bạn hiện có thể tải xuống',
  },
  downloadCourseButtonTitle: {
    id: 'course-authoring.export.stepper.download.button.title',
    defaultMessage: 'Tải xuống khóa học đã xuất',
  },
  stepperHeaderTitle: {
    id: 'course-authoring.export.stepper.header.title',
    defaultMessage: 'Trạng thái xuất khóa học',
  },
});

export default messages;