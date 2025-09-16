import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  selectLibraryInfo: {
    id: 'course-authoring.library-authoring.pick-components.select-library.info',
    defaultMessage: 'Chọn kho học liệu mà bạn muốn tham chiếu thành phần từ đó.',
    description: 'The info text for the select library component',
  },
  selectLibrarySearchPlaceholder: {
    id: 'course-authoring.library-authoring.pick-components.select-library.search-placeholder',
    defaultMessage: 'Tìm kiếm kho học liệu',
    description: 'The placeholder text for the search field in the select library component',
  },
  selectLibraryPaginationLabel: {
    id: 'course-authoring.library-authoring.pick-components.select-library.pagination-label',
    defaultMessage: 'Phân trang kho học liệu',
    description: 'The pagination label for the select library component',
  },
  selectLibraryNoSearchResultsTitle: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-search.results.title',
    defaultMessage: 'Không tìm thấy kết quả nào',
    description: 'The title for the no search results state in the select library component',
  },
  selectLibraryNoSearchResultsMessage: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-search.message',
    defaultMessage: 'Không có kho học liệu nào khớp với bộ lọc hiện tại.',
    description: 'The message for the no search results state in the select library component',
  },
  selectLibraryNoLibrariesTitle: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-libraries.title',
    defaultMessage: 'Không tìm thấy kho học liệu',
    description: 'The title for the no libraries state in the select library component',
  },
  selectLibraryNoLibrariesMessage: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-libraries.message',
    defaultMessage: 'Bạn chưa có kho học liệu nào hoặc bạn không có quyền truy cập vào kho học liệu nào. '
      + 'Để tạo kho học liệu mới, hãy vào Studio Home hoặc liên hệ với quản trị viên hệ thống.',
    description: 'The message for the no libraries state in the select library component',
  },
  selectLibraryNextButton: {
    id: 'course-authoring.library-authoring.pick-components.select-library.next-button',
    defaultMessage: 'Tiếp theo',
    description: 'The text for the next button in the select library component',
  },
  pickerInfoBanner: {
    id: 'course-authoring.library-authoring.pick-components.component-picker.information-alert',
    defaultMessage: 'Chỉ các nội dung đã xuất bản mới hiển thị và có thể tái sử dụng.',
    description: 'The alert text on top of component-picker if only published content is visible.',
  },
});

export default messages;