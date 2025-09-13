import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.wiki.heading',
    defaultMessage: 'Cấu hình Wiki',
  },
  enableWikiLabel: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.label',
    defaultMessage: 'Wiki',
  },
  enableWikiHelp: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.help',
    defaultMessage: `Wiki của khóa học có thể được thiết lập dựa trên nhu cầu của khóa học.
    Các cách sử dụng phổ biến có thể bao gồm chia sẻ câu trả lời cho các câu hỏi thường gặp (FAQs), 
    chia sẻ thông tin khóa học có thể chỉnh sửa, hoặc cung cấp quyền truy cập vào tài nguyên do người học tạo ra.`,
  },
  enableWikiLink: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.link',
    defaultMessage: 'Tìm hiểu thêm về Wiki',
  },
  enablePublicWikiLabel: {
    id: 'course-authoring.pages-resources.wiki.enable-public-wiki.label',
    defaultMessage: 'Bật quyền truy cập Wiki công khai',
  },
  enablePublicWikiHelp: {
    id: 'course-authoring.pages-resources.wiki.enable-public-wiki.help',
    defaultMessage: `Nếu được bật, bất kỳ người dùng đã đăng ký nào cũng có thể xem Wiki của khóa học 
    ngay cả khi họ chưa ghi danh vào khóa học.`,
  },
});

export default messages;