import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  expandTooltip: {
    id: 'course-authoring.course-outline.card.expandTooltip',
    defaultMessage: 'Thu Gọn/Mở Rộng Thẻ Này',
  },
  statusBadgeLive: {
    id: 'course-authoring.course-outline.card.status-badge.live',
    defaultMessage: 'Đang Hoạt Động',
  },
  statusBadgeGated: {
    id: 'course-authoring.course-outline.card.status-badge.gated',
    defaultMessage: 'Bị Giới Hạn',
  },
  statusBadgePublishedNotLive: {
    id: 'course-authoring.course-outline.card.status-badge.published-not-live',
    defaultMessage: 'Đã Xuất Bản Nhưng Chưa Hoạt Động',
  },
  statusBadgeStaffOnly: {
    id: 'course-authoring.course-outline.card.status-badge.staff-only',
    defaultMessage: 'Chỉ Dành Cho Nhân Viên',
  },
  statusBadgeDraft: {
    id: 'course-authoring.course-outline.card.status-badge.draft',
    defaultMessage: 'Bản Nháp',
  },
  statusBadgeUnpublishedChanges: {
    id: 'course-authoring.course-outline.card.status-badge.draft-unpublished-changes',
    defaultMessage: 'Bản Nháp (Thay Đổi Chưa Xuất Bản)',
  },
  altButtonRename: {
    id: 'course-authoring.course-outline.card.button.edit.alt',
    defaultMessage: 'Đổi Tên',
  },
  menuPublish: {
    id: 'course-authoring.course-outline.card.menu.publish',
    defaultMessage: 'Xuất Bản',
  },
  menuConfigure: {
    id: 'course-authoring.course-outline.card.menu.configure',
    defaultMessage: 'Cấu Hình',
  },
  menuDuplicate: {
    id: 'course-authoring.course-outline.card.menu.duplicate',
    defaultMessage: 'Nhân Đôi',
  },
  menuMoveUp: {
    id: 'course-authoring.course-outline.card.menu.moveup',
    defaultMessage: 'Di Chuyển Lên',
  },
  menuMoveDown: {
    id: 'course-authoring.course-outline.card.menu.movedown',
    defaultMessage: 'Di Chuyển Xuống',
  },
  menuDelete: {
    id: 'course-authoring.course-outline.card.menu.delete',
    defaultMessage: 'Xóa',
  },
  menuCopy: {
    id: 'course-authoring.course-outline.card.menu.copy',
    defaultMessage: 'Sao Chép Vào Clipboard',
  },
  menuProctoringLinkText: {
    id: 'course-authoring.course-outline.card.menu.proctoring-settings',
    defaultMessage: 'Cài Đặt Giám Sát',
  },
  proctoringLinkTooltip: {
    id: 'course-authoring.course-outline.card.menu.proctoring-settings-tooltip',
    defaultMessage: 'Cài Đặt Giám Sát',
  },
  discussionEnabledBadgeText: {
    id: 'course-authoring.course-outline.card.badge.discussionEnabled',
    defaultMessage: 'Đã Bật Thảo Luận',
  },
  menuManageTags: {
    id: 'course-authoring.course-outline.card.menu.manageTags',
    defaultMessage: 'Quản Lý Thẻ',
  },
  readyToSyncButtonAlt: {
    id: 'course-authoring.course-outline.card.button.sync.alt',
    defaultMessage: 'Có bản cập nhật - nhấn để đồng bộ',
    description: 'Alt text for the sync icon button.',
  },
  cannotEditTooltip: {
    id: 'course-authoring.course-outline.card.button.edit.disable.tooltip',
    defaultMessage: 'Đối tượng này được thêm từ thư viện, vì vậy không thể chỉnh sửa.',
    description: 'Tooltip text of button when the object was added from a library.',
  },
});

export default messages;
