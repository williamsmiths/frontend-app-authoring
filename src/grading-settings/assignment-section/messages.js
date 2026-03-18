import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  assignmentTypeNameTitle: {
    id: 'course-authoring.grading-settings.assignment.type-name.title',
    defaultMessage: 'Tên loại bài tập',
  },
  assignmentTypeNameDescription: {
    id: 'course-authoring.grading-settings.assignment.type-name.description',
    defaultMessage: 'Danh mục chung cho loại bài tập này, ví dụ: Bài tập về nhà hoặc Thi giữa kỳ. Tên này hiển thị cho học viên.',
  },
  assignmentTypeNameErrorMessage1: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-1',
    defaultMessage: 'Loại bài tập phải có tên.',
  },
  assignmentTypeNameErrorMessage2: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-2',
    defaultMessage: 'Để việc chấm điểm hoạt động, bạn phải đổi tất cả các mục {initialAssignmentName} thành {value}.',
  },
  assignmentTypeNameErrorMessage3: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-3',
    defaultMessage: 'Đã tồn tại một loại bài tập khác với tên này.',
  },
  abbreviationTitle: {
    id: 'course-authoring.grading-settings.assignment.abbreviation.title',
    defaultMessage: 'Viết tắt',
  },
  abbreviationDescription: {
    id: 'course-authoring.grading-settings.assignment.abbreviation.description',
    defaultMessage: 'Tên ngắn của loại bài tập này (ví dụ: HW hoặc Midterm) sẽ hiển thị bên cạnh bài tập trên trang Tiến độ của học viên.',
  },
  weightOfTotalGradeTitle: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.title',
    defaultMessage: 'Trọng số của tổng điểm',
  },
  weightOfTotalGradeDescription: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.description',
    defaultMessage: 'Trọng số của tất cả bài tập thuộc loại này tính theo phần trăm tổng điểm, ví dụ: 40. Không bao gồm ký hiệu phần trăm.',
  },
  weightOfTotalGradeErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.error.message',
    defaultMessage: 'Vui lòng nhập số nguyên từ 0 đến 100.',
  },
  totalNumberTitle: {
    id: 'course-authoring.grading-settings.assignment.total-number.title',
    defaultMessage: 'Tổng số lượng',
  },
  totalNumberDescription: {
    id: 'course-authoring.grading-settings.assignment.total-number.description',
    defaultMessage: 'Số lượng mục trong khóa học chứa bài tập thuộc loại này.',
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
    defaultMessage: 'Số lượng bài tập loại này sẽ bị loại bỏ. Các bài có điểm thấp nhất sẽ bị loại trước.',
  },
  numberOfDroppableErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.error.message',
    defaultMessage: 'Vui lòng nhập số nguyên không âm.',
  },
  numberOfDroppableSecondErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.second.error.message',
    defaultMessage: 'Không thể bỏ nhiều hơn {type} bài tập so với số lượng đã giao.',
  },
  assignmentAlertWarningTitle: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.title',
    defaultMessage: 'Cảnh báo: Số lượng bài tập {type} được định nghĩa ở đây không khớp với số lượng hiện có trong khóa học:',
  },
  assignmentAlertWarningDescription: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.description',
    defaultMessage: 'Không có bài tập nào thuộc loại này trong khóa học.',
  },
  assignmentAlertWarningUsageTitle: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.usage.title',
    defaultMessage: 'Cảnh báo: Số lượng bài tập {type} được định nghĩa ở đây không khớp với số lượng hiện có trong khóa học:',
  },
  assignmentAlertWarningSuccess: {
    id: 'course-authoring.grading-settings.assignment.alert.success.title',
    defaultMessage: 'Số lượng bài tập {type} trong khóa học khớp với số lượng được định nghĩa ở đây.',
  },
  assignmentDeleteButton: {
    id: 'course-authoring.grading-settings.assignment.delete.button',
    defaultMessage: 'Xóa',
  },
});

export default messages;