import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.export.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.course-checklist.heading.title',
    defaultMessage: 'Danh Sách Kiểm Tra',
    description: 'Header text for the Checklist page',
  },
  headingSubtitle: {
    id: 'course-authoring.course-checklist.heading.subtitle',
    defaultMessage: 'Công Cụ',
  },
  launchChecklistLabel: {
    id: 'launchChecklistLabel',
    defaultMessage: 'Danh Sách Kiểm Tra Khởi Chạy',
    description: 'Header text for a checklist that describes actions to have completed before a course should launch',
  },
  bestPracticesChecklistLabel: {
    id: 'bestPracticesChecklistLabel',
    defaultMessage: 'Danh Sách Kiểm Tra Các Thực Hành Tốt Nhất',
    description: 'Header text for a checklist that describes best practices for a course',
  },
  launchChecklistLoadingLabel: {
    id: 'doneLoadingChecklistStatusLabel',
    defaultMessage: 'Dữ liệu Danh Sách Kiểm Tra Khởi Chạy đang được tải',
    description: 'Label telling the user that the Launch Checklist is loading',
  },
  launchChecklistDoneLoadingLabel: {
    id: 'launchChecklistDoneLoadingLabel',
    defaultMessage: 'Dữ liệu Danh Sách Kiểm Tra Khởi Chạy đã tải xong',
    description: 'Label telling the user that the Launch Checklist is done loading',
  },
  bestPracticesChecklistLoadingLabel: {
    id: 'bestPracticesChecklistLoadingLabel',
    defaultMessage: 'Dữ liệu Danh Sách Kiểm Tra Thực Hành Tốt Nhất đang được tải',
    description: 'Label telling the user that the Best Practices Checklist is loading',
  },
  bestPracticesChecklistDoneLoadingLabel: {
    id: 'bestPracticesChecklistDoneLoadingLabel',
    defaultMessage: 'Dữ liệu Danh Sách Kiểm Tra Thực Hành Tốt Nhất đã tải xong',
    description: 'Label telling the user that the Best Practices Checklist is done loading',
  },
});

export default messages;