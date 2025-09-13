import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.progress.heading',
    defaultMessage: 'Cấu hình tiến trình',
  },
  enableProgressLabel: {
    id: 'course-authoring.pages-resources.progress.enable-progress.label',
    defaultMessage: 'Tiến trình',
  },
  enableProgressHelp: {
    id: 'course-authoring.pages-resources.progress.enable-progress.help',
    defaultMessage: `Khi học viên làm các bài tập được chấm điểm, điểm số sẽ hiển thị trong tab Tiến trình. 
        Tab Tiến trình chứa biểu đồ tất cả các bài tập được chấm điểm trong khóa học, 
        kèm theo danh sách các bài tập và điểm số bên dưới.`,
  },
  enableProgressLink: {
    id: 'course-authoring.pages-resources.progress.enable-progress.link',
    defaultMessage: 'Tìm hiểu thêm về tiến trình',
  },
  enableGraphLabel: {
    id: 'course-authoring.pages-resources.progress.enable-graph.label',
    defaultMessage: 'Bật biểu đồ tiến trình',
  },
  enableGraphHelp: {
    id: 'course-authoring.pages-resources.progress.enable-graph.help',
    defaultMessage: 'Nếu được bật, học viên có thể xem biểu đồ tiến trình',
  },
});

export default messages;
