import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  openCollectionButton: {
    id: 'course-authoring.library-authoring.collections-sidebbar.open-button',
    defaultMessage: 'Mở',
    description: 'Button text to open collection',
  },
  manageTabTitle: {
    id: 'course-authoring.library-authoring.collections-sidebar.manage-tab.title',
    defaultMessage: 'Quản lý',
    description: 'Title for manage tab',
  },
  detailsTabTitle: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.title',
    defaultMessage: 'Chi tiết',
    description: 'Title for details tab',
  },
  detailsTabDescriptionTitle: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.description-title',
    defaultMessage: 'Mô tả / Xem trước thẻ',
    description: 'Title for the Description container in the details tab',
  },
  detailsTabDescriptionPlaceholder: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.description-placeholder',
    defaultMessage: 'Thêm mô tả',
    description: 'Placeholder for the Description container in the details tab',
  },
  detailsTabStatsTitle: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.stats-title',
    defaultMessage: 'Thống kê Bộ sưu tập',
    description: 'Title for the Collection Stats container in the details tab',
  },
  detailsTabStatsNoComponents: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.stats-no-components',
    defaultMessage: 'Bộ sưu tập hiện đang trống.',
    description: 'Message displayed when no components are found in the Collection Stats container',
  },
  detailsTabStatsTotalComponents: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.stats-total-components',
    defaultMessage: 'Tổng cộng ',
    description: 'Label for total components in the Collection Stats container',
  },
  detailsTabStatsOtherComponents: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.stats-other-components',
    defaultMessage: 'Khác',
    description: 'Label for other components in the Collection Stats container',
  },
  detailsTabHistoryTitle: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.history-title',
    defaultMessage: 'Lịch sử Bộ sưu tập',
    description: 'Title for the Collection History container in the details tab',
  },
  noComponentsInCollection: {
    id: 'course-authoring.library-authoring.collections-pag.no-components.text',
    defaultMessage: 'Bộ sưu tập hiện đang trống.',
    description: 'Text to display when collection has no associated components',
  },
  addComponentsInCollection: {
    id: 'course-authoring.library-authoring.collections-pag.add-components.btn-text',
    defaultMessage: 'Mới',
    description: 'Text to display in new button if no components in collection is found',
  },
  noSearchResultsInCollection: {
    id: 'course-authoring.library-authoring.collections-pag.no-search-results.text',
    defaultMessage: 'Không tìm thấy thành phần phù hợp trong bộ sưu tập này.',
    description: 'Message displayed when no matching components are found in collection',
  },
  newContentButton: {
    id: 'course-authoring.library-authoring.collections.buttons.new-content.text',
    defaultMessage: 'Mới',
    description: 'Text of button to open "Add content drawer" in collections page',
  },
  collectionInfoButton: {
    id: 'course-authoring.library-authoring.buttons.collection-info.alt-text',
    defaultMessage: 'Thông tin Bộ sưu tập',
    description: 'Alt text for collection info button besides the collection title',
  },
  allCollections: {
    id: 'course-authoring.library-authoring.all-collections.text',
    defaultMessage: 'Tất cả Bộ sưu tập',
    description: 'Breadcrumbs text to navigate back to all collections',
  },
  breadcrumbsAriaLabel: {
    id: 'course-authoring.library-authoring.breadcrumbs.label.text',
    defaultMessage: 'Điều hướng breadcrumbs',
    description: 'Aria label for navigation breadcrumbs',
  },
  noSearchResultsCollections: {
    id: 'course-authoring.library-authoring.no-search-results-collections',
    defaultMessage: 'Không tìm thấy bộ sưu tập phù hợp trong thư viện này.',
    description: 'Message displayed when no matching collections are found',
  },
  noCollections: {
    id: 'course-authoring.library-authoring.no-collections',
    defaultMessage: 'Bạn chưa thêm bộ sưu tập nào vào thư viện này.',
    description: 'Message displayed when the library has no collections',
  },
  addCollection: {
    id: 'course-authoring.library-authoring.add-collection',
    defaultMessage: 'Thêm bộ sưu tập',
    description: 'Button text to add a new collection',
  },
  updateCollectionSuccessMsg: {
    id: 'course-authoring.library-authoring.update-collection-success-msg',
    defaultMessage: 'Cập nhật bộ sưu tập thành công.',
    description: 'Message displayed when collection is updated successfully',
  },
  updateCollectionErrorMsg: {
    id: 'course-authoring.library-authoring.update-collection-error-msg',
    defaultMessage: 'Cập nhật bộ sưu tập thất bại.',
    description: 'Message displayed when collection update fails',
  },
  returnToLibrary: {
    id: 'course-authoring.library-authoring.collection.component-picker.return-to-library',
    defaultMessage: 'Quay lại Thư viện',
    description: 'Breadcrumbs link to return to library',
  },
});

export default messages;