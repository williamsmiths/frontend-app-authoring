import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  manageCollectionsText: {
    id: 'course-authoring.library-authoring.manage-collections.title',
    defaultMessage: 'Quản lý bộ sưu tập',
    description: 'Header and button text for the manage collection widget',
  },
  manageCollectionsAddBtnText: {
    id: 'course-authoring.library-authoring.manage-collections.btn-text',
    defaultMessage: 'Thêm vào bộ sưu tập',
    description: 'Button text for collection section in the manage collections widget',
  },
  manageCollectionsSearchPlaceholder: {
    id: 'course-authoring.library-authoring.manage-collections.search-placeholder',
    defaultMessage: 'Tìm kiếm',
    description: 'Placeholder text for collection search in the manage collections widget',
  },
  manageCollectionsSelectionLabel: {
    id: 'course-authoring.library-authoring.manage-collections.selection-aria-label',
    defaultMessage: 'Chọn bộ sưu tập',
    description: 'Aria label text for collection selection box',
  },
  manageCollectionsToComponentConfirmBtn: {
    id: 'course-authoring.library-authoring.manage-collections.add-confirm-btn',
    defaultMessage: 'Xác nhận',
    description: 'Button text to confirm adding collections for an item',
  },
  manageCollectionsToComponentCancelBtn: {
    id: 'course-authoring.library-authoring.manage-collections.add-cancel-btn',
    defaultMessage: 'Hủy',
    description: 'Button text to cancel collections selection for am item',
  },
  componentNotOrganizedIntoCollection: {
    id: 'course-authoring.library-authoring.manage-collections.no-collections',
    defaultMessage: 'Mục này chưa thuộc bộ sưu tập nào.',
    description: 'Message to display in the manage collections widget when an item is not part of any collection.',
  },
});

export default messages;