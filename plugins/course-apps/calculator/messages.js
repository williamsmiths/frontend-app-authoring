import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.calculator.heading',
    defaultMessage: 'Cấu hình máy tính',
  },
  enableCalculatorLabel: {
    id: 'course-authoring.pages-resources.calculator.enable-calculator.label',
    defaultMessage: 'Máy tính',
  },
  enableCalculatorHelp: {
    id: 'course-authoring.pages-resources.calculator.enable-calculator.help',
    defaultMessage: `Máy tính hỗ trợ số, toán tử, hằng số,
      hàm và các khái niệm toán học khác. Khi được bật, một biểu tượng
      để truy cập máy tính sẽ xuất hiện trên tất cả các trang trong phần nội dung của khóa học.`,
  },
  enableCalculatorLink: {
    id: 'course-authoring.pages-resources.calculator.enable-calculator.link',
    defaultMessage: 'Tìm hiểu thêm về máy tính',
  },
});

export default messages;
