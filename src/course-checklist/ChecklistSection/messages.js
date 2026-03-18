import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  welcomeMessageShortDescription: {
    id: 'welcomeMessageShortDescription',
    defaultMessage: 'Thêm Lời Chào Mừng',
    description: 'Label for a section that describes a welcome message for a course',
  },
  welcomeMessageLongDescription: {
    id: 'welcomeMessageLongDescription',
    defaultMessage: 'Chào đón học viên vào khóa học của bạn một cách cá nhân và chuẩn bị cho học viên một trải nghiệm khóa học tích cực.',
    description: 'Description for a section that prompts a user to enter a welcome message for a course',
  },
  gradingPolicyShortDescription: {
    id: 'gradingPolicyShortDescription',
    defaultMessage: 'Tạo Chính Sách Chấm Điểm Khóa Học',
    description: 'Label for a section that describes a grading policy for a course',
  },
  gradingPolicyLongDescription: {
    id: 'gradingPolicyLongDescription',
    defaultMessage: 'Thiết lập chính sách chấm điểm, bao gồm loại bài tập và điểm đạt. Tất cả bài tập cộng lại là 100%.',
    description: 'Description for a section that prompts a user to enter a grading policy for a course',
  },
  gradingPolicyComment: {
    id: 'gradingPolicyComment',
    defaultMessage: 'Chính sách chấm điểm hiện tại của bạn cộng lại là {percent}%.',
    description: 'Description for a section that displays a course\'s grading policy total',
  },
  certificateShortDescription: {
    id: 'certificateShortDescription',
    defaultMessage: 'Kích Hoạt Chứng Chỉ',
    description: 'Label for a section that describes a certificate for completing a course',
  },
  certificateLongDescription: {
    id: 'certificateLongDescription',
    defaultMessage: 'Đảm bảo rằng tất cả văn bản đều chính xác, chữ ký đã được tải lên và chứng chỉ đã được kích hoạt.',
    description: 'Description for a section that prompts a user to create a course completion certificate',
  },
  courseDatesShortDescription: {
    id: 'courseDatesShortDescription',
    defaultMessage: 'Đặt Ngày Quan Trọng Của Khóa Học',
    description: 'Label for a section that describes a certificate for completing a course',
  },
  courseDatesLongDescription: {
    id: 'courseDatesLongDescription',
    defaultMessage: 'Thiết lập lịch trình khóa học, bao gồm khi nào khóa học bắt đầu và kết thúc.',
    description: 'Description for a section that prompts a user to set up a course schedule',
  },
  assignmentDeadlinesShortDescription: {
    id: 'assignmentDeadlinesShortDescription',
    defaultMessage: 'Xác Nhận Hạn Nộp Bài Tập',
    description: 'Label for a section that describes course assignment deadlines',
  },
  assignmentDeadlinesLongDescription: {
    id: 'assignmentDeadlinesLongDescription',
    defaultMessage: 'Đảm bảo tất cả hạn nộp bài tập nằm giữa ngày bắt đầu và kết thúc khóa học.',
    description: 'Description for a section that prompts a user to enter course assignment deadlines',
  },
  assignmentDeadlinesComment: {
    id: 'assignmentDeadlinesComment',
    defaultMessage: 'Các bài tập sau có hạn nộp không nằm giữa ngày bắt đầu và kết thúc khóa học:',
    description: 'Description for a section that displays which assignments are outside of a course\'s start and end date',
  },
  videoDurationShortDescription: {
    id: 'videoDurationShortDescription',
    defaultMessage: 'Kiểm Tra Thời Lượng Video',
    description: 'Label for a section that describes video durations',
  },
  videoDurationLongDescription: {
    id: 'videoDurationLongDescription',
    defaultMessage: 'Học viên tương tác tốt nhất với các video ngắn kèm cơ hội thực hành. Đảm bảo rằng 80% hoặc nhiều hơn video khóa học có thời lượng dưới 10 phút.',
    description: 'Description for a section that prompts a user to follow best practices for video length',
  },
  mobileFriendlyVideoShortDescription: {
    id: 'mobileFriendlyVideoShortDescription',
    defaultMessage: 'Tạo Video Thân Thiện Với Di Động',
    description: 'Label for a section that describes mobile friendly videos',
  },
  mobileFriendlyVideoLongDescription: {
    id: 'mobileFriendlyVideoLongDescription',
    defaultMessage: 'Video thân thiện với di động có thể xem trên tất cả các thiết bị được hỗ trợ. Đảm bảo rằng ít nhất 90% video khóa học thân thiện với di động bằng cách tải lên các video khóa học lên hệ thống video edX.',
    description: 'Description for a section that prompts a user to follow best practices for mobile friendly videos',
  },
  diverseSequencesShortDescription: {
    id: 'diverseSequencesShortDescription',
    defaultMessage: 'Xây Dựng Các Chuỗi Học Tập Đa Dạng',
    description: 'Label for a section that describes diverse sequences of educational content',
  },
  diverseSequencesLongDescription: {
    id: 'diverseSequencesLongDescription',
    defaultMessage: 'Nghiên cứu cho thấy trải nghiệm nội dung đa dạng thúc đẩy sự tham gia của học viên. Chúng tôi khuyến nghị rằng 80% hoặc nhiều hơn các chuỗi học tập hoặc phần phụ của bạn bao gồm nhiều loại nội dung (chẳng hạn như video, thảo luận hoặc bài tập).',
    description: 'Description for a section that prompts a user to follow best practices diverse sequences of educational content',
  },
  weeklyHighlightsShortDescription: {
    id: 'weeklyHighlightsShortDescription',
    defaultMessage: 'Đặt Điểm Nổi Bật Hàng Tuần',
    description: 'Label for a section that describes weekly highlights',
  },
  weeklyHighlightsLongDescription: {
    id: 'weeklyHighlightsLongDescription',
    defaultMessage: 'Kích hoạt và chỉ định các điểm nổi bật hàng tuần để giữ cho học viên tham gia và theo dõi trong khóa học.',
    description: 'Description for a section that prompts a user to follow best practices for course weekly highlights',
  },
  unitDepthShortDescription: {
    id: 'unitDepthShortDescription',
    defaultMessage: 'Quản Lý Độ Sâu Đơn Vị',
    description: 'Label for a section that describes course unit depth',
  },
  unitDepthLongDescription: {
    id: 'unitDepthLongDescription',
    defaultMessage: 'Chia nhỏ nội dung khóa học thành các phần có thể quản lý thúc đẩy sự tham gia của học viên. Chúng tôi khuyến nghị các đơn vị không chứa quá ba thành phần.',
    description: 'Description for a section that prompts a user to follow best practices for course unit depth',
  },
  proctoringEmailShortDescription: {
    id: 'proctoringEmailShortDescription',
    defaultMessage: 'Thêm Email Hỗ Trợ Proctortrack',
    description: 'Label for a section that describes proctoring escalation email',
  },
  proctoringEmailLongDescription: {
    id: 'proctoringEmailLongDescription',
    defaultMessage: 'Các khóa học sử dụng Proctortrack yêu cầu email hỗ trợ. Đảm bảo học viên và Hỗ trợ có thể liên hệ với nhóm khóa học của bạn về các vấn đề giám sát thi (ví dụ: khiếu nại, đặt lại bài thi, v.v.).',
    description: 'Description for a section that prompts the user to add a Proctortrack escalation email for the course',
  },
  updateLinkLabel: {
    id: 'updateLinkLabel',
    defaultMessage: 'Cập Nhật',
    description: 'Label for a link that takes the user to a page where they can update settings',
  },
  completionCountLabel: {
    id: 'completionCountLabel',
    defaultMessage: '{completed}/{total} hoàn thành',
    description: 'Label that describes how many tasks have been completed out of a total number of tasks',
  },
  completedItemLabel: {
    id: 'completedItemLabel',
    defaultMessage: 'hoàn thành',
    description: 'Label that describes a completed task',
  },
  uncompletedItemLabel: {
    id: 'uncompletedItemLabel',
    defaultMessage: 'chưa hoàn thành',
    description: 'Label that describes an uncompleted task',
  },
});

export default messages;