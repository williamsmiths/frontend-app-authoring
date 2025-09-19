import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  assignmentTypeNameTitle: {
    id: 'course-authoring.grading-settings.assignment.type-name.title',
    defaultMessage: 'Tên loại bài tập',
  },
  assignmentTypeNameDescription: {
    id: 'course-authoring.grading-settings.assignment.type-name.description',
    defaultMessage: 'Danh mục chung cho loại bài tập này, ví dụ: Bài tập về nhà hoặc Kiểm tra giữa kỳ. Tên này hiển thị cho học viên.',
  },
  assignmentTypeNameErrorMessage1: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-1',
    defaultMessage: 'Loại bài tập phải có tên.',
  },
  assignmentTypeNameErrorMessage2: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-2',
    defaultMessage: 'Để tính điểm được, bạn phải đổi tất cả các phân mục {initialAssignmentName} sang {value}.',
  },
  assignmentTypeNameErrorMessage3: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-3',
    defaultMessage: 'Đã có loại bài tập khác với tên này.',
  },
  abbreviationTitle: {
    id: 'course-authoring.grading-settings.assignment.abbreviation.title',
    defaultMessage: 'Viết tắt',
  },
  abbreviationDescription: {
    id: 'course-authoring.grading-settings.assignment.abbreviation.description',
    defaultMessage: 'Tên ngắn cho loại bài tập này (ví dụ, BT hoặc Giữa kỳ) hiển thị cạnh các bài tập trên trang Tiến độ của học viên.',
  },
  weightOfTotalGradeTitle: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.title',
    defaultMessage: 'Tỷ trọng trên tổng điểm',
  },
  weightOfTotalGradeDescription: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.description',
    defaultMessage: 'Tỷ trọng của tất cả các bài tập loại này theo phần trăm tổng điểm, ví dụ: 40. Không nhập ký hiệu %.',
  },
  weightOfTotalGradeErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.error.message',
    defaultMessage: 'Vui lòng nhập số nguyên từ 0 đến 100.',
  },
  totalNumberTitle: {
    id: 'course-authoring.grading-settings.assignment.total-number.title',
    defaultMessage: 'Tổng số',
  },
  totalNumberDescription: {
    id: 'course-authoring.grading-settings.assignment.total-number.description',
    defaultMessage: 'Số lượng phân mục trong khóa học có chứa bài tập loại này.',
  },
  totalNumberErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.total-number.error.message',
    defaultMessage: 'Vui lòng nhập số nguyên lớn hơn 0.',
  },
  numberOfDroppableTitle: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.title',
    defaultMessage: 'Số lượng được bỏ',
  },
  numberOfDroppableDescription: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.description',
    defaultMessage: 'Số lượng bài tập loại này sẽ bị bỏ. Bài tập có điểm thấp nhất sẽ bị bỏ trước.',
  },
  numberOfDroppableErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.error.message',
    defaultMessage: 'Vui lòng nhập số nguyên không âm.',
  },
  numberOfDroppableSecondErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.second.error.message',
    defaultMessage: 'Không thể bỏ nhiều bài tập {type} hơn số lượng đã được phân công.',
  },
  assignmentAlertWarningTitle: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.title',
    defaultMessage: 'Cảnh báo: Số lượng bài tập {type} được định nghĩa ở đây không khớp với số lượng bài tập {type} hiện tại trong khóa học:',
  },
  assignmentAlertWarningDescription: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.description',
    defaultMessage: 'Không có bài tập loại này trong khóa học.',
  },
  assignmentAlertWarningUsageTitle: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.usage.title',
    defaultMessage: 'Cảnh báo: Số lượng bài tập {type} được định nghĩa ở đây không khớp với số lượng bài tập {type} hiện tại trong khóa học:',
  },
  assignmentAlertWarningSuccess: {
    id: 'course-authoring.grading-settings.assignment.alert.success.title',
    defaultMessage: 'Số lượng bài tập {type} trong khóa học khớp với số lượng đã định nghĩa ở đây.',
  },
  assignmentDeleteButton: {
    id: 'course-authoring.grading-settings.assignment.delete.button',
    defaultMessage: 'Xóa',
  },
});

export default messages;