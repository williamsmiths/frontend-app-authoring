import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  a11yBodyPolicyLink: {
    id: 'a11yBodyPolicyLink',
    defaultMessage: 'Chính sách truy cập của website',
    description: 'Title for link to full accessibility policy.',
  },
  a11yBodyPageHeader: {
    id: 'a11yBodyPageHeader',
    defaultMessage: 'Quy trình hỗ trợ truy cập dành cho người tạo khóa học',
    description: 'Heading for studio\'s accessibility policy page.',
  },
  a11yBodyIntroGraph: {
    id: 'a11yBodyIntroGraph',
    defaultMessage: `Tại edX, chúng tôi luôn nỗ lực thấu hiểu và tôn trọng nhu cầu cũng như quan điểm đa dạng của cộng đồng edX toàn cầu.
Chúng tôi trân trọng mọi đội ngũ xây dựng khóa học và cam kết mở rộng khả năng tiếp cận cho tất cả mọi người, bao gồm cả
những người tạo và biên soạn khóa học có khuyết tật. Vì mục tiêu đó, chúng tôi đã áp dụng {communityAccessibilityLink}
cùng với quy trình này để cho phép các tác giả và đội ngũ khóa học yêu cầu hỗ trợ nếu họ không thể phát triển và đăng tải
nội dung trên nền tảng của chúng tôi thông qua Studio do các hạn chế về khả năng tiếp cận.`,
    description: 'Introductory paragraph outlining why we care about accessibility, and what we\'re doing about it.',
  },
  a11yBodyStepsHeader: {
    id: 'a11yBodyStepsHeader',
    defaultMessage: 'Những người tạo và biên soạn khóa học cần hỗ trợ có thể thực hiện các bước sau:',
    description: 'Heading for list of steps authors can take for accessibility requests.',
  },
  a11yBodyEdxResponse: {
    id: 'a11yBodyEdxResponse',
    defaultMessage: `Chúng tôi sẽ trao đổi với bạn về nhu cầu và các tùy chọn của bạn để xác định giải pháp phù hợp, tuy nhiên
quyết định cuối cùng sẽ do chúng tôi đưa ra, với điều kiện giải pháp đó hiệu quả và kịp thời. Các yếu tố chúng tôi xem xét
khi lựa chọn giải pháp truy cập bao gồm: hiệu quả; tính kịp thời (so với thời hạn của bạn); mức độ dễ triển khai; và
mức độ dễ sử dụng cho bạn. Chúng tôi sẽ thông báo quyết định và giải thích cơ sở của quyết định trong vòng
10 ngày làm việc kể từ khi trao đổi với bạn.`,
    description: 'Paragraph outlining how we will select an accessibility solution.',
  },
  a11yBodyEdxFollowUp: {
    id: 'a11yBodyEdxFollowUp',
    defaultMessage: `Sau đó, chúng tôi sẽ liên hệ với bạn hàng tuần để cập nhật về quá trình đánh giá, quyết định và
tiến độ triển khai giải pháp truy cập. Chúng tôi sẽ thông báo cho bạn khi việc triển khai hoàn tất và
sẽ tiếp tục theo dõi nếu cần thiết để đảm bảo giải pháp hoạt động hiệu quả.`,
    description: 'Paragraph outlining how we will follow-up with you during and after implementing an accessibility solution.',
  },
  a11yBodyOngoingSupport: {
    id: 'a11yBodyOngoingSupport',
    defaultMessage: 'edX sẽ cung cấp hỗ trợ kỹ thuật liên tục khi cần thiết và xử lý mọi vấn đề phát sinh sau khi khóa học được tạo ban đầu.',
    description: 'A statement of ongoing support.',
  },
  a11yBodyA11yFeedback: {
    id: 'a11yBodyA11yFeedback',
    defaultMessage: 'Vui lòng gửi mọi câu hỏi hoặc đề xuất để cải thiện khả năng truy cập của Studio tới {emailElement} hoặc sử dụng biểu mẫu bên dưới. Chúng tôi luôn hoan nghênh phản hồi của bạn.',
    description: 'Contact information heading for those with accessibility issues or suggestions.',
  },
  a11yBodyEmailHeading: {
    id: 'a11yBodyEmailHeading',
    defaultMessage: 'Gửi email tới {emailElement} với các thông tin sau:',
    description: 'Heading for list of information required when you email us.',
  },
  a11yBodyNameEmail: {
    id: 'a11yBodyNameEmail',
    defaultMessage: 'tên và địa chỉ email của bạn;',
    description: 'Your contact information.',
  },
  a11yBodyInstitution: {
    id: 'a11yBodyInstitution',
    defaultMessage: 'tổ chức thành viên edX mà bạn đang liên kết;',
    description: 'edX affiliate information.',
  },
  a11yBodyBarrier: {
    id: 'a11yBodyBarrier',
    defaultMessage: 'mô tả ngắn gọn về khó khăn hoặc rào cản truy cập mà bạn đang gặp phải; và',
    description: 'Accessibility problem information.',
  },
  a11yBodyTimeConstraints: {
    id: 'a11yBodyTimeConstraints',
    defaultMessage: 'thời điểm bạn cần được hỗ trợ và trong bao lâu (ví dụ: ngày bắt đầu khóa học dự kiến hoặc thời hạn liên quan đến khóa học như nộp bài luận cuối kỳ).',
    description: 'Time contstraint information.',
  },
  a11yBodyReceipt: {
    id: 'a11yBodyReceipt',
    defaultMessage: 'Đội ngũ hỗ trợ edX sẽ phản hồi để xác nhận đã nhận được yêu cầu và chuyển tiếp yêu cầu của bạn đến Quản lý Đối tác edX của tổ chức bạn và Chuyên gia Truy cập Website edX.',
    description: 'Paragraph outlining what steps edX will take immediately.',
  },
  a11yBodyExtraInfo: {
    id: 'a11yBodyExtraInfo',
    defaultMessage: `Với sự hướng dẫn của Chuyên gia Truy cập Website, edX sẽ liên hệ với bạn để thảo luận về yêu cầu
và thu thập thêm thông tin về nhu cầu cũng như tùy chọn của bạn, nhằm xác định liệu có giải pháp khả thi nào
mà edX có thể hỗ trợ hay không.`,
    description: 'Paragraph outlining how and when edX will reach out to you.',
  },
  a11yBodyFixesListHeader: {
    id: 'a11yBodyFixesListHeader',
    defaultMessage: 'edX sẽ hỗ trợ bạn nhanh chóng và đầy đủ để bạn có thể tạo nội dung trên CMS trong thời gian yêu cầu. Các biện pháp hỗ trợ có thể bao gồm nhưng không giới hạn ở:',
    description: 'Heading for list of ways we might be able to assist.',
  },
  a11yBodyThirdParty: {
    id: 'a11yBodyThirdParty',
    defaultMessage: 'Mua công cụ hoặc phần mềm của bên thứ ba để hỗ trợ bạn sử dụng Studio;',
    description: 'Buy third-party software.',
  },
  a11yBodyContractor: {
    id: 'a11yBodyContractor',
    defaultMessage: 'Thuê nhà thầu độc lập đã được đào tạo để cung cấp hỗ trợ trực tiếp về hình ảnh, lời nói hoặc thao tác; hoặc',
    description: 'Hire a contractor.',
  },
  a11yBodyCodeFix: {
    id: 'a11yBodyCodeFix',
    defaultMessage: 'Phát triển mã mới để triển khai giải pháp kỹ thuật.',
    description: 'Make a technical fix.',
  },
});

export default messages;