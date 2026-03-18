import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pacingTitle: {
    id: 'course-authoring.schedule.pacing.title',
    defaultMessage: 'Tiến độ khóa học',
  },
  pacingDescription: {
    id: 'course-authoring.schedule.pacing.description',
    defaultMessage: 'Thiết lập tiến độ cho khóa học này',
  },
  pacingRestriction: {
    id: 'course-authoring.schedule.pacing.restriction',
    defaultMessage: 'Không thể thay đổi tiến độ khóa học sau khi khóa học đã bắt đầu',
  },
  pacingTypeInstructorLabel: {
    id: 'course-authoring.schedule.pacing.radio.instructor.label',
    defaultMessage: 'Theo tiến độ giảng viên',
  },
  pacingTypeInstructorDescription: {
    id: 'course-authoring.schedule.pacing.radio.instructor.description',
    defaultMessage:
      'Các khóa học theo tiến độ giảng viên sẽ diễn ra theo tốc độ do người tạo khóa học thiết lập. Bạn có thể cấu hình ngày phát hành nội dung và hạn nộp bài tập.',
  },
  pacingTypeSelfLabel: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.label',
    defaultMessage: 'Tự học',
  },
  pacingTypeSelfDescription: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.description',
    defaultMessage: 'Các khóa học tự học cung cấp thời hạn gợi ý cho bài tập hoặc kỳ thi dựa trên ngày ghi danh của người học và thời lượng dự kiến của khóa học. Người học có thể linh hoạt điều chỉnh thời hạn khi cần.',
  },
});

export default messages;