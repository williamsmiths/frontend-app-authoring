import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  coursesTabTitle: {
    id: 'course-authoring.studio-home.courses.tab.title',
    defaultMessage: 'Khóa học',
  },
  courseTabErrorMessage: {
    id: 'course-authoring.studio-home.courses.tab.error.message',
    defaultMessage: 'Không thể tải danh sách khóa học. Vui lòng thử lại sau.',
  },
  coursesPaginationInfo: {
    id: 'course-authoring.studio-home.courses.pagination.info',
    defaultMessage: 'Đang hiển thị {length} trong tổng số {total}',
  },
  librariesTabErrorMessage: {
    id: 'course-authoring.studio-home.libraries.tab.error.message',
    defaultMessage: 'Không thể tải danh sách thư viện. Vui lòng thử lại sau.',
  },
  librariesTabTitle: {
    id: 'course-authoring.studio-home.libraries.tab.title',
    defaultMessage: 'Thư viện',
  },
  legacyLibrariesTabTitle: {
    id: 'course-authoring.studio-home.legacy.libraries.tab.title',
    defaultMessage: 'Thư viện di sản',
  },
  archivedTabTitle: {
    id: 'course-authoring.studio-home.archived.tab.title',
    defaultMessage: 'Khóa học đã lưu trữ',
  },
  archiveTabErrorMessage: {
    id: 'course-authoring.studio-home.archived.tab.error.message',
    defaultMessage: 'Không thể tải danh sách khóa học đã lưu trữ. Vui lòng thử lại sau.',
  },
  coursesTabCourseNotFoundAlertTitle: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.title',
    defaultMessage: 'Chúng tôi không tìm thấy kết quả nào',
  },
  coursesTabCourseNotFoundAlertMessage: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.message',
    defaultMessage: 'Không có khóa học nào với bộ lọc hiện tại.',
  },
  coursesTabCourseNotFoundAlertCleanFiltersButton: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.clean.filters.button',
    defaultMessage: 'Xóa bộ lọc',
  },
  taxonomiesTabTitle: {
    id: 'course-authoring.studio-home.taxonomies.tab.title',
    defaultMessage: 'Phân loại',
    description: 'Title of Taxonomies tab on the home page',
  },
  libraryV2PlaceholderTitle: {
    id: 'course-authoring.studio-home.libraries.placeholder.title',
    defaultMessage: 'Trang giữ chỗ Thư viện V2',
  },
  libraryV2PlaceholderBody: {
    id: 'course-authoring.studio-home.libraries.placeholder.body',
    defaultMessage: 'Đây là trang giữ chỗ vì MFE Tác giả Thư viện chưa được bật.',
  },
  librariesV2TabBetaBadge: {
    id: 'course-authoring.studio-home.libraries.tab.library.beta-badge',
    defaultMessage: 'Beta',
    description: 'Text used to mark the Libraries v2 feature as "in beta"',
  },
  librariesV2TabBetaText: {
    id: 'course-authoring.studio-home.libraries.tab.library.beta-text',
    defaultMessage: 'Chào mừng bạn đến với trải nghiệm Thư viện Beta mới! Thư viện đã được thiết kế lại hoàn toàn, '
      + 'giúp việc tái sử dụng và kết hợp nội dung khóa học dễ dàng hơn nhiều. Không gian Thư viện mới cho phép bạn tạo, tổ chức và '
      + 'quản lý nội dung; tái sử dụng nội dung của bạn trong nhiều khóa học tùy thích; đồng bộ cập nhật tập trung; và tạo, '
      + 'xáo trộn bộ câu hỏi. Xem {link} để biết thêm chi tiết.',
    description: 'Explanatory text shown on the Libraries v2 tab during the beta release.',
  },
  librariesV2TabBetaTutorialLinkText: {
    id: 'course-authoring.studio-home.libraries.tab.library.beta-link-text',
    defaultMessage: 'Hướng dẫn Thư viện v2',
    description: 'Text to use as the link in the "course-authoring.studio-home.libraries.tab.library.beta-text" message',
  },
  librariesV2TabLibrarySearchPlaceholder: {
    id: 'course-authoring.studio-home.libraries.tab.library.search-placeholder',
    defaultMessage: 'Tìm kiếm',
  },
  librariesV2TabLibraryNotFoundAlertTitle: {
    id: 'course-authoring.studio-home.libraries.tab.library.not.found.alert.title',
    defaultMessage: 'Chúng tôi không tìm thấy kết quả nào',
  },
  librariesV2TabLibraryNotFoundAlertMessage: {
    id: 'course-authoring.studio-home.libraries.tab.library.not.found.alert.message',
    defaultMessage: 'Không có thư viện nào với bộ lọc hiện tại.',
  },
});

export default messages;
