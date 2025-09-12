import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  expandTooltip: {
    id: 'course-authoring.course-outline.card.expandTooltip',
    defaultMessage: 'Thu gọn/Mở rộng thẻ này',
  },
  statusBadgeLive: {
    id: 'course-authoring.course-outline.card.status-badge.live',
    defaultMessage: 'Đang hoạt động',
  },
  statusBadgeGated: {
    id: 'course-authoring.course-outline.card.status-badge.gated',
    defaultMessage: 'Bị hạn chế',
  },
  statusBadgePublishedNotLive: {
    id: 'course-authoring.course-outline.card.status-badge.published-not-live',
    defaultMessage: 'Đã xuất bản nhưng chưa hoạt động',
  },
  statusBadgeStaffOnly: {
    id: 'course-authoring.course-outline.card.status-badge.staff-only',
    defaultMessage: 'Chỉ dành cho nhân viên',
  },
  statusBadgeDraft: {
    id: 'course-authoring.course-outline.card.status-badge.draft',
    defaultMessage: 'Bản nháp',
  },
  statusBadgeUnpublishedChanges: {
    id: 'course-authoring.course-outline.card.status-badge.draft-unpublished-changes',
    defaultMessage: 'Bản nháp (Thay đổi chưa xuất bản)',
  },
  altButtonRename: {
    id: 'course-authoring.course-outline.card.button.edit.alt',
    defaultMessage: 'Đổi tên',
  },
  menuPublish: {
    id: 'course-authoring.course-outline.card.menu.publish',
    defaultMessage: 'Xuất bản',
  },
  menuConfigure: {
    id: 'course-authoring.course-outline.card.menu.configure',
    defaultMessage: 'Cấu hình',
  },
  menuDuplicate: {
    id: 'course-authoring.course-outline.card.menu.duplicate',
    defaultMessage: 'Nhân bản',
  },
  menuMoveUp: {
    id: 'course-authoring.course-outline.card.menu.moveup',
    defaultMessage: 'Di chuyển lên',
  },
  menuMoveDown: {
    id: 'course-authoring.course-outline.card.menu.movedown',
    defaultMessage: 'Di chuyển xuống',
  },
  menuDelete: {
    id: 'course-authoring.course-outline.card.menu.delete',
    defaultMessage: 'Xóa',
  },
  menuCopy: {
    id: 'course-authoring.course-outline.card.menu.copy',
    defaultMessage: 'Sao chép vào clipboard',
  },
  menuProctoringLinkText: {
    id: 'course-authoring.course-outline.card.menu.proctoring-settings',
    defaultMessage: 'Cài đặt giám sát',
  },
  proctoringLinkTooltip: {
    id: 'course-authoring.course-outline.card.menu.proctoring-settings-tooltip',
    defaultMessage: 'Cài đặt giám sát',
  },
  discussionEnabledBadgeText: {
    id: 'course-authoring.course-outline.card.badge.discussionEnabled',
    defaultMessage: 'Cho phép thảo luận',
  },
  menuManageTags: {
    id: 'course-authoring.course-outline.card.menu.manageTags',
    defaultMessage: 'Quản lý thẻ',
  },
  readyToSyncButtonAlt: {
    id: 'course-authoring.course-outline.card.button.sync.alt',
    defaultMessage: 'Có bản cập nhật - nhấn để đồng bộ',
    description: 'Alt text for the sync icon button.',
  },
  cannotEditTooltip: {
    id: 'course-authoring.course-outline.card.button.edit.disable.tooltip',
    defaultMessage: 'Đối tượng này được thêm từ thư viện, nên không thể chỉnh sửa.',
    description: 'Tooltip text of button when the object was added from a library.',
  },
});

export default messages;
