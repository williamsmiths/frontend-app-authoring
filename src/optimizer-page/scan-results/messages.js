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
    defaultMessage: 'Không tìm thấy liên kết hỏng',
  },
  scanHeader: {
    id: 'course-authoring.course-optimizer.scanHeader',
    defaultMessage: 'Quét liên kết hỏng',
  },
  lockedCheckboxLabel: {
    id: 'course-authoring.course-optimizer.lockedCheckboxLabel',
    defaultMessage: 'Hiển thị các tệp khóa của khóa học',
  },
  brokenLinksNumber: {
    id: 'course-authoring.course-optimizer.brokenLinksNumber',
    defaultMessage: '{count} liên kết hỏng',
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
    defaultMessage: 'Những tệp này bị "khóa", nên chúng tôi không thể xác minh liên kết có thể truy cập tệp hay không.',
  },
  brokenLinkStatus: {
    id: 'course-authoring.course-optimizer.brokenLinkStatus',
    defaultMessage: 'Trạng thái: Hỏng',
  },
  lockedLinkStatus: {
    id: 'course-authoring.course-optimizer.lockedLinkStatus',
    defaultMessage: 'Trạng thái: Khóa',
  },
  recommendedManualCheckText: {
    id: 'course-authoring.course-optimizer.recommendedManualCheckText',
    defaultMessage: 'Kiểm tra thủ công được khuyến nghị',
  },
  recommendedManualCheckTooltip: {
    id: 'course-authoring.course-optimizer.recommendedManualCheckTooltip',
    defaultMessage: 'Đối với các trang web trả về 403, các trang web thường hiển thị 403 vì họ không muốn bot truy cập nội dung của họ',
  },
});

export default messages;