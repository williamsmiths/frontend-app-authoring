import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  errorTitle: {
    id: 'course-authoring.export.modal.error.title',
    defaultMessage: 'Đã xảy ra lỗi khi xuất.',
  },
  errorDescriptionNotUnit: {
    id: 'course-authoring.export.modal.error.description.not.unit',
    defaultMessage: 'Khóa học của bạn không thể được xuất sang XML. Không có đủ thông tin để xác định thành phần bị lỗi. Kiểm tra khóa học để xác định các thành phần có vấn đề và thử lại. Thông báo lỗi gốc là: {errorMessage}',
  },
  errorDescriptionUnit: {
    id: 'course-authoring.export.modal.error.description.unit',
    defaultMessage: 'Đã không thể xuất sang XML ít nhất một thành phần. Khuyến nghị bạn nên đến trang chỉnh sửa và sửa lỗi trước khi thử xuất lại. Vui lòng kiểm tra rằng tất cả các thành phần trên trang đều hợp lệ và không hiển thị bất kỳ thông báo lỗi nào. Thông báo lỗi gốc là: {errorMessage}',
  },
  errorCancelButtonUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.unit',
    defaultMessage: 'Quay Lại Xuất',
  },
  errorCancelButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.not.unit',
    defaultMessage: 'Hủy',
  },
  errorActionButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.action.not.unit',
    defaultMessage: 'Đưa Tôi Đến Trang Khóa Học Chính',
  },
  errorActionButtonUnit: {
    id: 'course-authoring.export.modal.error.button.action.unit',
    defaultMessage: 'Sửa Thành Phần Bị Lỗi',
  },
});

export default messages;
