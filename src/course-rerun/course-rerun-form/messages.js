import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  rerunCourseDescription: {
    id: 'course-authoring.course-rerun.form.description',
    defaultMessage: 'Cung cấp thông tin nhận dạng cho lần mở lại khóa học này. Khóa học gốc sẽ không bị ảnh hưởng bởi việc mở lại. {strong}',
  },
  rerunCourseDescriptionStrong: {
    id: 'course-authoring.course-rerun.form.description.strong',
    defaultMessage: 'Lưu ý: Tổ chức, mã khóa học và lần chạy khóa học phải kết hợp với nhau để xác định duy nhất phiên bản khóa học mới này.',
  },
});

export default messages;