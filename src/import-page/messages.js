import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.import.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.import.heading.title',
    defaultMessage: 'Nhập khóa học',
  },
  headingSubtitle: {
    id: 'course-authoring.import.heading.subtitle',
    defaultMessage: 'Công Cụ',
  },
  description1: {
    id: 'course-authoring.import.description1',
    defaultMessage: 'Hãy নিশ্চিত bạn muốn nhập khóa học trước khi tiếp tục. Nội dung của khóa học được nhập sẽ thay thế nội dung của khóa học hiện tại. Bạn không thể hoàn tác việc nhập khóa học. Trước khi tiếp tục, chúng tôi khuyến nghị bạn xuất khóa học hiện tại để có bản sao lưu.',
  },
  description2: {
    id: 'course-authoring.import.description2',
    defaultMessage: 'Khóa học bạn nhập phải ở định dạng tệp .tar.gz (tức là tệp .tar được nén bằng GNU Zip). Tệp .tar.gz này phải chứa tệp course.xml. Nó cũng có thể chứa các tệp khác.',
  },
  description3: {
    id: 'course-authoring.import.description3',
    defaultMessage: 'Quy trình nhập gồm năm giai đoạn. Trong hai giai đoạn đầu, bạn phải ở lại trang này. Bạn có thể rời trang sau khi giai đoạn giải nén hoàn tất. Tuy nhiên, chúng tôi khuyến nghị bạn không thực hiện các thay đổi quan trọng cho khóa học cho đến khi quá trình nhập hoàn tất.',
  },
});

export default messages;