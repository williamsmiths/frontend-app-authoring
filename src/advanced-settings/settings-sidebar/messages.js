import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  about: {
    id: 'course-authoring.advanced-settings.sidebar.about.title',
    defaultMessage: 'Cài Đặt Nâng Cao Làm Gì?',
  },
  aboutDescription1: {
    id: 'course-authoring.advanced-settings.sidebar.about.description-1',
    defaultMessage: 'Cài đặt nâng cao kiểm soát các chức năng cụ thể của khóa học. Trên trang này, bạn có thể chỉnh sửa các chính sách thủ công, là các cặp khóa-giá trị dựa trên JSON kiểm soát các cài đặt khóa học cụ thể.',
  },
  aboutDescription2: {
    id: 'course-authoring.advanced-settings.sidebar.about.description-2',
    defaultMessage: 'Mọi chính sách bạn sửa đổi ở đây sẽ ghi đè tất cả thông tin khác bạn đã định nghĩa trong Studio. Không chỉnh sửa chính sách trừ khi bạn quen thuộc với cả mục đích và cú pháp của chúng.',
  },
  other: {
    id: 'course-authoring.advanced-settings.sidebar.other.title',
    defaultMessage: 'Cài Đặt Khóa Học Khác',
  },
  otherCourseSettingsLinkToScheduleAndDetails: {
    id: 'course-authoring.advanced-settings.sidebar.links.schedule-and-details',
    defaultMessage: 'Chi Tiết & Lịch Trình',
    description: 'Link to Studio Details & schedule page',
  },
  otherCourseSettingsLinkToGrading: {
    id: 'course-authoring.advanced-settings.sidebar.links.grading',
    defaultMessage: 'Chấm Điểm',
    description: 'Link to Studio Grading page',
  },
  otherCourseSettingsLinkToCourseTeam: {
    id: 'course-authoring.advanced-settings.sidebar.links.course-team',
    defaultMessage: 'Nhóm Khóa Học',
    description: 'Link to Studio Course team page',
  },
  otherCourseSettingsLinkToGroupConfigurations: {
    id: 'course-authoring.advanced-settings.sidebar.links.group-configurations',
    defaultMessage: 'Cấu Hình Nhóm',
    description: 'Link to Studio Group configurations page',
  },
  otherCourseSettingsLinkToProctoredExamSettings: {
    id: 'course-authoring.advanced-settings.sidebar.links.proctored-exam-settings',
    defaultMessage: 'Cài Đặt Thi Có Giám Sát',
    description: 'Link to Proctored exam settings page',
  },
});

export default messages;