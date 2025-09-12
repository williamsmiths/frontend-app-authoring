import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pacingTitle: {
    id: 'course-authoring.schedule.pacing.title',
    defaultMessage: 'Tốc độ khóa học',
  },
  pacingDescription: {
    id: 'course-authoring.schedule.pacing.description',
    defaultMessage: 'Đặt tốc độ tiến độ cho khóa học này',
  },
  pacingRestriction: {
    id: 'course-authoring.schedule.pacing.restriction',
    defaultMessage: 'Tốc độ khóa học không thể thay đổi sau khi khóa học đã bắt đầu',
  },
  pacingTypeInstructorLabel: {
    id: 'course-authoring.schedule.pacing.radio.instructor.label',
    defaultMessage: 'Theo tiến độ giảng viên',
  },
  pacingTypeInstructorDescription: {
    id: 'course-authoring.schedule.pacing.radio.instructor.description',
    defaultMessage:
      'Khóa học theo tiến độ giảng viên tiến triển theo nhịp độ mà tác giả khóa học đặt ra. Bạn có thể cấu hình ngày phát hành nội dung khóa học và hạn nộp cho các bài tập.',
  },
  pacingTypeSelfLabel: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.label',
    defaultMessage: 'Tự học theo tiến độ',
  },
  pacingTypeSelfDescription: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.description',
    defaultMessage:
      'Khóa học tự học theo tiến độ cung cấp các hạn nộp gợi ý cho bài tập hoặc bài kiểm tra dựa trên ngày đăng ký của học viên và thời lượng khóa học dự kiến. Các khóa học này cho phép học viên linh hoạt thay đổi ngày nộp bài tập khi cần thiết.',
  },
});

export default messages;
