import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  errorTitle: {
    id: 'course-authoring.export.modal.error.title',
    defaultMessage: 'Đã xảy ra lỗi khi xuất khóa học.',
  },
  errorDescriptionNotUnit: {
    id: 'course-authoring.export.modal.error.description.not.unit',
    defaultMessage: 'Khóa học của bạn không thể xuất ra XML. Không đủ thông tin để xác định thành phần gây lỗi. Hãy kiểm tra khóa học của bạn để xác định các thành phần gặp vấn đề và thử lại. Thông báo lỗi gốc là: {errorMessage}',
  },
  errorDescriptionUnit: {
    id: 'course-authoring.export.modal.error.description.unit',
    defaultMessage: 'Đã xảy ra lỗi khi xuất ra XML ít nhất một thành phần. Khuyến nghị bạn truy cập trang chỉnh sửa và sửa lỗi trước khi thử xuất lại. Vui lòng kiểm tra tất cả các thành phần trên trang để đảm bảo chúng hợp lệ và không hiển thị bất kỳ thông báo lỗi nào. Thông báo lỗi gốc là: {errorMessage}',
  },
  errorCancelButtonUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.unit',
    defaultMessage: 'Quay lại xuất khóa học',
  },
  errorCancelButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.not.unit',
    defaultMessage: 'Hủy',
  },
  errorActionButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.action.not.unit',
    defaultMessage: 'Đi tới trang chính của khóa học',
  },
  errorActionButtonUnit: {
    id: 'course-authoring.export.modal.error.button.action.unit',
    defaultMessage: 'Sửa thành phần bị lỗi',
  },
});

export default messages;