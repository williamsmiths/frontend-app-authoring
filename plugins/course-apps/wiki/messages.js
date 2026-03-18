import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.wiki.heading',
    defaultMessage: 'Cấu Hình Wiki',
  },
  enableWikiLabel: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.label',
    defaultMessage: 'Wiki',
  },
  enableWikiHelp: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.help',
    defaultMessage: `Wiki khóa học có thể được thiết lập dựa trên nhu cầu của
    khóa học. Các cách sử dụng phổ biến có thể bao gồm chia sẻ câu trả lời cho các câu hỏi thường gặp,
    chia sẻ thông tin khóa học có thể chỉnh sửa hoặc cung cấp quyền truy cập vào tài nguyên
    do học viên tạo ra.`,
  },
  enableWikiLink: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.link',
    defaultMessage: 'Tìm Hiểu Thêm Về Wiki',
  },
  enablePublicWikiLabel: {
    id: 'course-authoring.pages-resources.wiki.enable-public-wiki.label',
    defaultMessage: 'Bật Quyền Truy Cập Wiki Công Khai',
  },
  enablePublicWikiHelp: {
    id: 'course-authoring.pages-resources.wiki.enable-public-wiki.help',
    defaultMessage: `Nếu được bật, bất kỳ người dùng đã đăng ký nào cũng có thể xem wiki khóa học
    ngay cả khi họ không đăng ký học khóa học`,
  },
});

export default messages;