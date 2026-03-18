import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.course-optimizer.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  noDataCard: {
    id: 'course-authoring.course-optimizer.noDataCard',
    defaultMessage: 'Không có dữ liệu quét',
  },
  noBrokenLinksCard: {
    id: 'course-authoring.course-optimizer.emptyResultsCard',
    defaultMessage: 'Không tìm thấy liên kết bị hỏng',
  },
  scanHeader: {
    id: 'course-authoring.course-optimizer.scanHeader',
    defaultMessage: 'Quét liên kết bị hỏng',
  },
  lockedCheckboxLabel: {
    id: 'course-authoring.course-optimizer.lockedCheckboxLabel',
    defaultMessage: 'Hiển thị tệp khóa học bị khóa',
  },
  brokenLinksNumber: {
    id: 'course-authoring.course-optimizer.brokenLinksNumber',
    defaultMessage: '{count} liên kết bị hỏng',
  },
  lockedLinksNumber: {
    id: 'course-authoring.course-optimizer.lockedLinksNumber',
    defaultMessage: '{count} liên kết bị khóa',
  },
  externalForbiddenLinksNumber: {
    id: 'course-authoring.course-optimizer.externalForbiddenLinksNumber',
    defaultMessage: '{count} cần kiểm tra thủ công',
  },
  lockedInfoTooltip: {
    id: 'course-authoring.course-optimizer.lockedInfoTooltip',
    defaultMessage: 'Các tệp khóa học này bị "khóa", vì vậy chúng tôi không thể xác minh liệu liên kết có thể truy cập tệp hay không.',
  },
  brokenLinkStatus: {
    id: 'course-authoring.course-optimizer.brokenLinkStatus',
    defaultMessage: 'Trạng thái: Bị hỏng',
  },
  lockedLinkStatus: {
    id: 'course-authoring.course-optimizer.lockedLinkStatus',
    defaultMessage: 'Trạng thái: Bị khóa',
  },
  recommendedManualCheckText: {
    id: 'course-authoring.course-optimizer.recommendedManualCheckText',
    defaultMessage: 'Khuyến nghị kiểm tra thủ công',
  },
  recommendedManualCheckTooltip: {
    id: 'course-authoring.course-optimizer.recommendedManualCheckTooltip',
    defaultMessage: 'Đối với các website trả về 403, thường là do họ không muốn bot truy cập nội dung',
  },
});

export default messages;