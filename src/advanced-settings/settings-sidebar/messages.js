import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  about: {
    id: 'course-authoring.advanced-settings.sidebar.about.title',
    defaultMessage: 'Các thiết lập nâng cao dùng để làm gì?',
  },
  aboutDescription1: {
    id: 'course-authoring.advanced-settings.sidebar.about.description-1',
    defaultMessage: 'Thiết lập nâng cao điều khiển các chức năng cụ thể của khóa học. Trên trang này, bạn có thể chỉnh sửa chính sách thủ công, là các cặp khóa và giá trị ở dạng JSON dùng để điều khiển các cài đặt của khóa học.',
  },
  aboutDescription2: {
    id: 'course-authoring.advanced-settings.sidebar.about.description-2',
    defaultMessage: 'Mọi chính sách bạn chỉnh sửa tại đây sẽ ghi đè lên toàn bộ thông tin bạn đã định nghĩa ở nơi khác trong Studio. Không chỉnh sửa các chính sách này trừ khi bạn hiểu rõ cả mục đích và cú pháp của chúng.',
  },
  other: {
    id: 'course-authoring.advanced-settings.sidebar.other.title',
    defaultMessage: 'Các thiết lập khóa học khác',
  },
  otherCourseSettingsLinkToScheduleAndDetails: {
    id: 'course-authoring.advanced-settings.sidebar.links.schedule-and-details',
    defaultMessage: 'Chi tiết & lịch học',
    description: 'Link đến trang Chi tiết & lịch học trong Studio',
  },
  otherCourseSettingsLinkToGrading: {
    id: 'course-authoring.advanced-settings.sidebar.links.grading',
    defaultMessage: 'Chấm điểm',
    description: 'Link đến trang Chấm điểm trong Studio',
  },
  otherCourseSettingsLinkToCourseTeam: {
    id: 'course-authoring.advanced-settings.sidebar.links.course-team',
    defaultMessage: 'Nhóm giảng dạy',
    description: 'Link đến trang Nhóm giảng dạy trong Studio',
  },
  otherCourseSettingsLinkToGroupConfigurations: {
    id: 'course-authoring.advanced-settings.sidebar.links.group-configurations',
    defaultMessage: 'Cấu hình nhóm',
    description: 'Link đến trang Cấu hình nhóm trong Studio',
  },
  otherCourseSettingsLinkToProctoredExamSettings: {
    id: 'course-authoring.advanced-settings.sidebar.links.proctored-exam-settings',
    defaultMessage: 'Cài đặt kỳ thi có giám sát',
    description: 'Link đến trang Cài đặt kỳ thi có giám sát',
  },
});

export default messages;