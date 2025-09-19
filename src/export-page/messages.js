import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.export.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.export.heading.title',
    defaultMessage: 'Xuất khóa học',
  },
  headingSubtitle: {
    id: 'course-authoring.export.heading.subtitle',
    defaultMessage: 'Công cụ',
  },
  description1: {
    id: 'course-authoring.export.description1',
    defaultMessage: 'Bạn có thể xuất khóa học và chỉnh sửa chúng bên ngoài {studioShortName}. Tệp xuất ra là tệp .tar.gz (tức là tệp .tar được nén bằng GNU Zip) chứa cấu trúc và nội dung khóa học. Bạn cũng có thể nhập lại các khóa học mà bạn đã xuất.',
  },
  description2: {
    id: 'course-authoring.export.description2',
    defaultMessage: 'Cảnh báo: Khi bạn xuất một khóa học, thông tin như khóa API MATLAB, LTI passport, chuỗi token bí mật của annotation và URL lưu trữ annotation sẽ được bao gồm trong dữ liệu xuất ra. Nếu bạn chia sẻ các tệp đã xuất, bạn cũng có thể đang chia sẻ thông tin nhạy cảm hoặc thông tin theo giấy phép.',
  },
  titleUnderButton: {
    id: 'course-authoring.export.title-under-button',
    defaultMessage: 'Xuất nội dung khóa học của tôi',
  },
  buttonTitle: {
    id: 'course-authoring.export.button.title',
    defaultMessage: 'Xuất nội dung khóa học',
  },
});

export default messages;