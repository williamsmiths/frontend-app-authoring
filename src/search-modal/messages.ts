import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  searchAllCourses: {
    id: 'course-authoring.course-search.searchAllCourses',
    defaultMessage: 'Tất cả khóa học',
    description: 'Option to get search results from all courses.',
  },
  searchThisCourse: {
    id: 'course-authoring.course-search.searchThisCourse',
    defaultMessage: 'Khóa học này',
    description: 'Option to limit search results to the current course only.',
  },
  title: {
    id: 'course-authoring.course-search.title',
    defaultMessage: 'Tìm kiếm',
    description: 'Title for the course search dialog',
  },
  showMore: {
    id: 'course-authoring.course-search.showMore',
    defaultMessage: 'Hiển thị thêm',
    description: 'Show more tags / filter options',
  },
  showMoreResults: {
    id: 'course-authoring.course-search.showMoreResults',
    defaultMessage: 'Hiển thị thêm kết quả',
    description: 'Show more results - a button to add to the list of results by loading more from the server',
  },
  loadingMoreResults: {
    id: 'course-authoring.course-search.loadingMoreResults',
    defaultMessage: 'Đang tải thêm kết quả',
    description: 'Loading more results - the button displays this message while more results are loading',
  },
  emptySearchTitle: {
    id: 'course-authoring.course-search.emptySearchTitle',
    defaultMessage: 'Bắt đầu tìm kiếm để tìm nội dung',
    description: 'Title shown when the user has not yet entered a keyword',
  },
  emptySearchSubtitle: {
    id: 'course-authoring.course-search.emptySearchSubtitle',
    defaultMessage: 'Tìm phần, tiểu mục, đơn vị và thành phần',
    description: 'Subtitle shown when the user has not yet entered a keyword',
  },
  noResultsTitle: {
    id: 'course-authoring.course-search.noResultsTitle',
    defaultMessage: 'Không tìm thấy kết quả phù hợp',
    description: 'Title shown when the search returned no results',
  },
  noResultsSubtitle: {
    id: 'course-authoring.course-search.noResultsSubtitle',
    defaultMessage: 'Vui lòng thử từ khóa hoặc bộ lọc khác',
    description: 'Subtitle shown when the search returned no results',
  },
  openInNewWindow: {
    id: 'course-authoring.course-search.openInNewWindow',
    defaultMessage: 'Mở trong cửa sổ mới',
    description: 'Alt text for the button that opens the search result in a new window',
  },
  searchError: {
    id: 'course-authoring.course-search.searchError',
    defaultMessage: 'Đã xảy ra lỗi. Không thể tải kết quả tìm kiếm.',
    description: 'Error message shown when search is not working.',
  },
});

export default messages;