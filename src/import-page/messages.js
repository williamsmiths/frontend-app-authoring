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
    defaultMessage: 'Công cụ',
  },
  description1: {
    id: 'course-authoring.import.description1',
    defaultMessage: 'Hãy chắc chắn rằng bạn muốn nhập một khóa học trước khi tiếp tục. Nội dung của khóa học được nhập sẽ thay thế nội dung của khóa học hiện có. Bạn không thể hoàn tác việc nhập khóa học. Trước khi tiếp tục, chúng tôi khuyến nghị bạn xuất khóa học hiện tại để có một bản sao lưu.',
  },
  description2: {
    id: 'course-authoring.import.description2',
    defaultMessage: 'Khóa học mà bạn nhập phải ở định dạng .tar.gz (tức là một tệp .tar được nén bằng GNU Zip). Tệp .tar.gz này phải chứa tệp course.xml. Nó cũng có thể chứa các tệp khác.',
  },
  description3: {
    id: 'course-authoring.import.description3',
    defaultMessage: 'Quá trình nhập có năm giai đoạn. Trong hai giai đoạn đầu, bạn phải ở lại trang này. Bạn có thể rời trang sau khi giai đoạn giải nén hoàn tất. Tuy nhiên, chúng tôi khuyến nghị bạn không thực hiện các thay đổi quan trọng đối với khóa học cho đến khi quá trình nhập hoàn tất.',
  },
});

export default messages;