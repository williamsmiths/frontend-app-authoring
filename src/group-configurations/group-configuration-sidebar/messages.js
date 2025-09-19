import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  aboutTitle: {
    id: 'course-authoring.group-configurations.sidebar.about.title',
    defaultMessage: 'Nhóm nội dung',
    description: 'Title for the content groups section in the sidebar.',
  },
  aboutDescription_1: {
    id: 'course-authoring.group-configurations.sidebar.about.description-1',
    defaultMessage: 'Nếu bạn bật các nhóm học phần (cohort) trong khóa học, bạn có thể sử dụng nhóm nội dung để tạo nội dung khóa học riêng cho từng cohort. Nói cách khác, bạn có thể tùy chỉnh nội dung mà các cohort cụ thể sẽ thấy trong khóa học của bạn.',
    description: 'First description for the content groups section in the sidebar.',
  },
  aboutDescription_2: {
    id: 'course-authoring.group-configurations.sidebar.about.description-2',
    defaultMessage: 'Mỗi nhóm nội dung bạn tạo có thể được liên kết với một hoặc nhiều cohort. Ngoài việc cung cấp nội dung khóa học cho tất cả người học, bạn có thể giới hạn quyền truy cập một số nội dung cho người học trong các nhóm nội dung cụ thể. Chỉ những người học trong các cohort liên kết với các nhóm nội dung này mới thấy nội dung bổ sung.',
    description: 'Second description for the content groups section in the sidebar.',
  },
  aboutDescription_3: {
    id: 'course-authoring.group-configurations.sidebar.about.description-3',
    defaultMessage: 'Nhấn {strongText} để thêm nhóm nội dung mới. Để chỉnh sửa tên của một nhóm nội dung, di chuột qua hộp của nhóm và nhấn {strongText2}. Bạn chỉ có thể xóa một nhóm nội dung nếu nó không được sử dụng trong bất kỳ Unit nào. Để xóa một nhóm nội dung, di chuột qua hộp của nó và nhấn biểu tượng xóa.',
    description: 'Third description for the content groups section in the sidebar. Mentions how to add, edit, and delete content groups.',
  },
  aboutDescription_3_strong: {
    id: 'course-authoring.group-configurations.sidebar.about.description-3.strong',
    defaultMessage: 'Nhóm nội dung mới',
    description: 'Strong text (button label) used in the third description for adding a new content group.',
  },
  about_2_title: {
    id: 'course-authoring.group-configurations.sidebar.about-2.title',
    defaultMessage: 'Cấu hình nhóm thí nghiệm',
    description: 'Title for the experiment group configurations section in the sidebar.',
  },
  about_2_description_1: {
    id: 'course-authoring.group-configurations.sidebar.about-2.description-1',
    defaultMessage: 'Sử dụng cấu hình nhóm thí nghiệm nếu bạn đang tiến hành thí nghiệm nội dung (A/B testing) trong khóa học. Cấu hình nhóm thí nghiệm xác định số lượng nhóm người học trong một thí nghiệm nội dung. Khi tạo thí nghiệm nội dung cho khóa học, bạn chọn cấu hình nhóm để sử dụng.',
    description: 'First description for the experiment group configurations section in the sidebar.',
  },
  about_2_description_2: {
    id: 'course-authoring.group-configurations.sidebar.about-2.description-2',
    defaultMessage: 'Nhấn {strongText} để thêm cấu hình mới. Để chỉnh sửa một cấu hình, di chuột qua hộp của nó và nhấn {strongText2}. Bạn chỉ có thể xóa một cấu hình nhóm nếu nó không được sử dụng trong bất kỳ thí nghiệm nào. Để xóa một cấu hình, di chuột qua hộp của nó và nhấn biểu tượng xóa.',
    description: 'Second description for the experiment group configurations section in the sidebar. Mentions how to add, edit, and delete group configurations.',
  },
  about_2_description_2_strong: {
    id: 'course-authoring.group-configurations.sidebar.about-2.description-2.strong',
    defaultMessage: 'Cấu hình nhóm mới',
    description: 'Strong text (button label) used in the second description for adding a new group configuration.',
  },
  about_3_title: {
    id: 'course-authoring.group-configurations.sidebar.about-3.title',
    defaultMessage: 'Nhóm theo đường đăng ký',
    description: 'Title for the enrollment track groups section in the sidebar.',
  },
  about_3_description_1: {
    id: 'course-authoring.group-configurations.sidebar.about-3.description-1',
    defaultMessage: 'Nhóm theo đường đăng ký cho phép bạn cung cấp nội dung khóa học khác nhau cho người học trong từng đường đăng ký. Người học được đăng ký vào mỗi đường đăng ký sẽ tự động được đưa vào nhóm tương ứng.',
    description: 'First description for the enrollment track groups section in the sidebar.',
  },
  about_3_description_2: {
    id: 'course-authoring.group-configurations.sidebar.about-3.description-2',
    defaultMessage: 'Trên các trang Unit trong đề cương khóa học, bạn có thể giới hạn quyền truy cập vào các thành phần dựa trên đường đăng ký của người học.',
    description: 'Second description for the enrollment track groups section in the sidebar.',
  },
  about_3_description_3: {
    id: 'course-authoring.group-configurations.sidebar.about-3.description-3',
    defaultMessage: 'Bạn không thể chỉnh sửa nhóm theo đường đăng ký, nhưng có thể mở rộng từng nhóm để xem chi tiết nội dung khóa học được chỉ định cho người học trong nhóm.',
    description: 'Third description for the enrollment track groups section in the sidebar. Mentions the limitations and options for managing enrollment track groups.',
  },
  aboutDescription_strong_edit: {
    id: 'course-authoring.group-configurations.sidebar.about.description.strong-edit',
    defaultMessage: 'chỉnh sửa',
    description: 'Strong text used to indicate the edit action.',
  },
  learnMoreBtn: {
    id: 'course-authoring.group-configurations.sidebar.learnmore.button',
    defaultMessage: 'Tìm hiểu thêm',
    description: 'Label for the "Learn more" button in the sidebar.',
  },
});

export default messages;