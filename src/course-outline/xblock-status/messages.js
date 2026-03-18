import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  unscheduledLabel: {
    id: 'course-authoring.course-outline.xblock-status.unscheduled.label',
    defaultMessage: 'Chưa Lên Lịch',
  },
  releasedLabel: {
    id: 'course-authoring.course-outline.xblock-status.released.label',
    defaultMessage: 'Đã Phát Hành: ',
  },
  scheduledLabel: {
    id: 'course-authoring.course-outline.xblock-status.scheduled.label',
    defaultMessage: 'Đã Lên Lịch: ',
  },
  onboardingExam: {
    id: 'course-authoring.course-outline.xblock-status.onboardingExam.value',
    defaultMessage: 'Kỳ Thi Nhập Môn',
  },
  practiceProctoredExam: {
    id: 'course-authoring.course-outline.xblock-status.practiceProctoredExam.value',
    defaultMessage: 'Kỳ Thi Có Giám Sát Thực Hành',
  },
  proctoredExam: {
    id: 'course-authoring.course-outline.xblock-status.proctoredExam.value',
    defaultMessage: 'Kỳ Thi Có Giám Sát',
  },
  timedExam: {
    id: 'course-authoring.course-outline.xblock-status.timedExam.value',
    defaultMessage: 'Kỳ Thi Có Thời Gian',
  },
  releaseStatusScreenReaderTitle: {
    id: 'course-authoring.course-outline.xblock-status.releaseStatusScreenReader.title',
    defaultMessage: 'Trạng Thái Phát Hành: ',
  },
  gradedAsScreenReaderLabel: {
    id: 'course-authoring.course-outline.xblock-status.gradedAsScreenReader.label',
    defaultMessage: 'Được Chấm Điểm Là: ',
  },
  ungradedText: {
    id: 'course-authoring.course-outline.xblock-status.ungraded.text',
    defaultMessage: 'Chưa Chấm Điểm',
  },
  dueLabel: {
    id: 'course-authoring.course-outline.xblock-status.due.label',
    defaultMessage: 'Hạn Nộp:',
  },
  customDueDateLabel: {
    id: 'course-authoring.course-outline.xblock-status.custom-due-date.label',
    defaultMessage: 'Hạn nộp tùy chỉnh: {relativeWeeksDue, plural, one {# tuần} other {# tuần}} kể từ ngày đăng ký',
  },
  prerequisiteLabel: {
    id: 'course-authoring.course-outline.xblock-status.prerequisite.label',
    defaultMessage: 'Điều Kiện Tiên Quyết: {prereqDisplayName}',
  },
  restrictedUnitAccess: {
    id: 'course-authoring.course-outline.xblock-status.restrictedUnitAccess.text',
    defaultMessage: 'Quyền truy cập vào đơn vị này bị giới hạn cho: {selectedGroupsLabel}',
  },
  restrictedUnitAccessToSomeContent: {
    id: 'course-authoring.course-outline.xblock-status.restrictedUnitAccessToSomeContent.text',
    defaultMessage: 'Quyền truy cập vào một số nội dung trong đơn vị này bị giới hạn cho các nhóm học viên cụ thể',
  },
  gradingPolicyMismatchText: {
    id: 'course-authoring.course-outline.xblock-status.gradingPolicyMismatch.text',
    defaultMessage: 'Mục này được cấu hình là "{gradingType}", một loại không tồn tại trong chính sách chấm điểm hiện tại.',
  },
  hiddenAfterEndDate: {
    id: 'course-authoring.course-outline.xblock-status.hiddenAfterEndDate.text',
    defaultMessage: 'Phần phụ bị ẩn sau ngày kết thúc khóa học',
  },
  hiddenAfterDueDate: {
    id: 'course-authoring.course-outline.xblock-status.hiddenAfterDueDate.text',
    defaultMessage: 'Phần phụ bị ẩn sau ngày đến hạn',
  },
});

export default messages;
