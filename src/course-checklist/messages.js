import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.export.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.course-checklist.heading.title',
    defaultMessage: 'Danh sách kiểm tra',
    description: 'Header text for the Checklist page',
  },
  headingSubtitle: {
    id: 'course-authoring.course-checklist.heading.subtitle',
    defaultMessage: 'Công cụ',
  },
  launchChecklistLabel: {
    id: 'launchChecklistLabel',
    defaultMessage: 'Danh sách kiểm tra trước khi mở khóa học',
    description: 'Header text for a checklist that describes actions to have completed before a course should launch',
  },
  bestPracticesChecklistLabel: {
    id: 'bestPracticesChecklistLabel',
    defaultMessage: 'Danh sách kiểm tra thực hành tốt nhất',
    description: 'Header text for a checklist that describes best practices for a course',
  },
  launchChecklistLoadingLabel: {
    id: 'doneLoadingChecklistStatusLabel',
    defaultMessage: 'Đang tải dữ liệu Danh sách kiểm tra trước khi mở khóa học',
    description: 'Label telling the user that the Launch Checklist is loading',
  },
  launchChecklistDoneLoadingLabel: {
    id: 'launchChecklistDoneLoadingLabel',
    defaultMessage: 'Dữ liệu Danh sách kiểm tra trước khi mở khóa học đã được tải xong',
    description: 'Label telling the user that the Launch Checklist is done loading',
  },
  bestPracticesChecklistLoadingLabel: {
    id: 'bestPracticesChecklistLoadingLabel',
    defaultMessage: 'Đang tải dữ liệu Danh sách kiểm tra thực hành tốt nhất',
    description: 'Label telling the user that the Best Practices Checklist is loading',
  },
  bestPracticesChecklistDoneLoadingLabel: {
    id: 'bestPracticesChecklistDoneLoadingLabel',
    defaultMessage: 'Dữ liệu Danh sách kiểm tra thực hành tốt nhất đã được tải xong',
    description: 'Label telling the user that the Best Practices Checklist is done loading',
  },
});

export default messages;