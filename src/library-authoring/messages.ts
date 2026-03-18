import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingSubtitle: {
    id: 'course-authoring.library-authoring.heading-subtitle',
    defaultMessage: 'Thư viện nội dung',
    description: 'The page heading for the library page.',
  },
  headingInfoAlt: {
    id: 'course-authoring.library-authoring.heading-info-alt',
    defaultMessage: 'Thông tin',
    description: 'Alt text for the info icon next to the page heading.',
  },
  searchPlaceholder: {
    id: 'course-authoring.library-authoring.search',
    defaultMessage: 'Tìm kiếm...',
    description: 'Placeholder for search field',
  },
  noSearchResults: {
    id: 'course-authoring.library-authoring.no-search-results',
    defaultMessage: 'Không tìm thấy thành phần phù hợp trong thư viện này.',
    description: 'Message displayed when no search results are found',
  },
  noComponents: {
    id: 'course-authoring.library-authoring.no-components',
    defaultMessage: 'Bạn chưa thêm nội dung nào vào thư viện này.',
    description: 'Message displayed when the library is empty',
  },
  addComponent: {
    id: 'course-authoring.library-authoring.add-component',
    defaultMessage: 'Thêm thành phần',
    description: 'Button text to add a new component',
  },
  homeTab: {
    id: 'course-authoring.library-authoring.home-tab',
    defaultMessage: 'Tất cả nội dung',
    description: 'Tab label for the home tab',
  },
  componentsTab: {
    id: 'course-authoring.library-authoring.components-tab',
    defaultMessage: 'Thành phần',
    description: 'Tab label for the components tab',
  },
  collectionsTab: {
    id: 'course-authoring.library-authoring.collections-tab',
    defaultMessage: 'Bộ sưu tập',
    description: 'Tab label for the collections tab',
  },
  unitsTab: {
    id: 'course-authoring.library-authoring.units-tab',
    defaultMessage: 'Bài học',
    description: 'Tab label for the units tab',
  },
  componentsTempPlaceholder: {
    id: 'course-authoring.library-authoring.components-temp-placeholder',
    defaultMessage: 'Có {componentCount} thành phần trong thư viện này',
    description: 'Temp placeholder for the component container. This will be replaced with the actual component list.',
  },
  collectionsTempPlaceholder: {
    id: 'course-authoring.library-authoring.collections-temp-placeholder',
    defaultMessage: 'Sắp ra mắt!',
    description: 'Temp placeholder for the collections container. This will be replaced with the actual collection list.',
  },
  createLibrary: {
    id: 'course-authoring.library-authoring.create-library',
    defaultMessage: 'Tạo thư viện',
    description: 'Header for the create library form',
  },
  createLibraryTempPlaceholder: {
    id: 'course-authoring.library-authoring.create-library-temp-placeholder',
    defaultMessage: 'Đây là phần giữ chỗ cho biểu mẫu tạo thư viện. Sẽ được thay thế bằng biểu mẫu thực tế.',
    description: 'Temp placeholder for the create library container. This will be replaced with the new library form.',
  },
  recentlyModifiedTitle: {
    id: 'course-authoring.library-authoring.recently-modified-title',
    defaultMessage: 'Đã chỉnh sửa gần đây',
    description: 'Title for the recently modified components and collections container',
  },
  collectionsTitle: {
    id: 'course-authoring.library-authoring.collections-title',
    defaultMessage: 'Bộ sưu tập ({collectionCount})',
    description: 'Title for the collections container',
  },
  componentsTitle: {
    id: 'course-authoring.library-authoring.components-title',
    defaultMessage: 'Thành phần ({componentCount})',
    description: 'Title for the components container',
  },
  addContentTitle: {
    id: 'course-authoring.library-authoring.drawer.title.add-content',
    defaultMessage: 'Thêm nội dung',
    description: 'Title of add content in library container.',
  },
  newContentButton: {
    id: 'course-authoring.library-authoring.buttons.new-content.text',
    defaultMessage: 'Mới',
    description: 'Text of button to open "Add content drawer"',
  },
  closeButtonAlt: {
    id: 'course-authoring.library-authoring.buttons.close.alt',
    defaultMessage: 'Đóng',
    description: 'Alt text of close button',
  },
  libraryInfoButton: {
    id: 'course-authoring.library-authoring.buttons.library-info.text',
    defaultMessage: 'Thông tin thư viện',
    description: 'Text of button to open "Library Info sidebar"',
  },
  readOnlyBadge: {
    id: 'course-authoring.library-authoring.badge.read-only',
    defaultMessage: 'Chỉ đọc',
    description: 'Text in badge when the user has read only access',
  },
  returnToLibrarySelection: {
    id: 'course-authoring.library-authoring.pick-components.return-to-library-selection',
    defaultMessage: 'Đổi thư viện',
    description: 'Breadcrumbs link to return to library selection',
  },
  librariesV2DisabledError: {
    id: 'authoring.alert.error.libraries.v2.disabled',
    defaultMessage: 'Không thể hiển thị trang này: Libraries v2 đã bị tắt.',
    description: 'Error message shown to users when trying to load a libraries V2 page while libraries v2 are disabled.',
  },
});

export default messages;