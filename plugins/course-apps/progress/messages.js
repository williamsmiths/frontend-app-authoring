import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.progress.heading',
    defaultMessage: 'Cấu Hình Tiến Trình',
  },
  enableProgressLabel: {
    id: 'course-authoring.pages-resources.progress.enable-progress.label',
    defaultMessage: 'Tiến Trình',
  },
  enableProgressHelp: {
    id: 'course-authoring.pages-resources.progress.enable-progress.help',
    defaultMessage: `Khi học sinh thực hiện các bài tập được chấm điểm, điểm số
        sẽ xuất hiện dưới tab tiến trình. Tab tiến trình chứa biểu đồ của
        tất cả các bài tập được chấm điểm trong khóa học, với danh sách tất cả bài tập và
        điểm số bên dưới.`,
  },
  enableProgressLink: {
    id: 'course-authoring.pages-resources.progress.enable-progress.link',
    defaultMessage: 'Tìm Hiểu Thêm Về Tiến Trình',
  },
  enableGraphLabel: {
    id: 'course-authoring.pages-resources.progress.enable-graph.label',
    defaultMessage: 'Bật Biểu Đồ Tiến Trình',
  },
  enableGraphHelp: {
    id: 'course-authoring.pages-resources.progress.enable-graph.help',
    defaultMessage: 'Nếu được bật, học sinh có thể xem biểu đồ tiến trình',
  },
});

export default messages;