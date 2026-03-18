import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.export.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.export.heading.title',
    defaultMessage: 'Xuất Khóa Học',
  },
  headingSubtitle: {
    id: 'course-authoring.export.heading.subtitle',
    defaultMessage: 'Công Cụ',
  },
  description1: {
    id: 'course-authoring.export.description1',
    defaultMessage: 'Bạn có thể xuất các khóa học và chỉnh sửa chúng bên ngoài {studioShortName}. Tệp được xuất là tệp .tar.gz (tức là tệp .tar được nén bằng GNU Zip) chứa cấu trúc và nội dung khóa học. Bạn cũng có thể nhập lại các khóa học mà bạn đã xuất.',
  },
  description2: {
    id: 'course-authoring.export.description2',
    defaultMessage: 'Chú ý: Khi xuất khóa học, thông tin như khóa API MATLAB, hộ chiếu LTI, chuỗi token bí mật chú thích và URL lưu trữ chú thích được bao gồm trong dữ liệu xuất. Nếu bạn chia sẻ các tệp đã xuất, bạn cũng có thể đang chia sẻ thông tin nhạy cảm hoặc thông tin cụ thể về giấy phép.',
  },
  titleUnderButton: {
    id: 'course-authoring.export.title-under-button',
    defaultMessage: 'Xuất Nội Dung Khóa Học',
  },
  buttonTitle: {
    id: 'course-authoring.export.button.title',
    defaultMessage: 'Xuất Nội Dung Khóa Học',
  },
});

export default messages;
