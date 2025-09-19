import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  clearFilters: {
    id: 'course-authoring.search-manager.clearFilters',
    defaultMessage: 'Xóa bộ lọc',
    description: 'Label for the button that removes all applied search filters',
  },
  inputPlaceholder: {
    id: 'course-authoring.search-manager.inputPlaceholder',
    defaultMessage: 'Tìm kiếm',
    description: 'Placeholder text shown in the keyword input field when the user has not yet entered a keyword',
  },
  clearUsageKeyToSearch: {
    id: 'course-authoring.search-manager.clearUsageKeyToSearch',
    defaultMessage: 'Hiển thị một block duy nhất, xóa bộ lọc để tìm kiếm',
    description: 'Placeholder text shown in the keyword input field when a single block filtered by usage key is shown',
  },
  blockTypeFilter: {
    id: 'course-authoring.search-manager.blockTypeFilter',
    defaultMessage: 'Loại',
    description: 'Label for the filter that allows limiting results to a specific component type',
  },
  'blockTypeFilter.empty': {
    id: 'course-authoring.search-manager.blockTypeFilter.empty',
    defaultMessage: 'Không có thành phần phù hợp',
    description: 'Label shown when there are no options available to filter by component type',
  },
  childTagsExpand: {
    id: 'course-authoring.search-manager.child-tags-expand',
    defaultMessage: 'Mở để hiển thị các thẻ con của "{tagName}"',
    description: 'This text describes the ▼ expand toggle button to non-visual users.',
  },
  childTagsCollapse: {
    id: 'course-authoring.search-manager.child-tags-collapse',
    defaultMessage: 'Thu gọn để ẩn các thẻ con của "{tagName}"',
    description: 'This text describes the ▲ collapse toggle button to non-visual users.',
  },
  'blockTagsFilter.empty': {
    id: 'course-authoring.search-manager.blockTagsFilter.empty',
    defaultMessage: 'Không có thẻ nào trong kết quả hiện tại',
    description: 'Label shown when there are no options available to filter by tags',
  },
  'blockTagsFilter.error': {
    id: 'course-authoring.search-manager.blockTagsFilter.error',
    defaultMessage: 'Lỗi khi tải thẻ',
    description: 'Label shown when the tags could not be loaded',
  },
  'blockTagsFilter.incomplete': {
    id: 'course-authoring.search-manager.blockTagsFilter.incomplete',
    defaultMessage: 'Xin lỗi, không tải được tất cả các thẻ',
    description: 'Label shown when the system is not able to display all of the available tag options.',
  },
  'blockType.annotatable': {
    id: 'course-authoring.course-search.blockType.annotatable',
    defaultMessage: 'Chú thích',
    description: 'Name of the "Annotation" component type in Studio',
  },
  'blockType.chapter': {
    id: 'course-authoring.course-search.blockType.chapter',
    defaultMessage: 'Phần',
    description: 'Name of the "Section" course outline level in Studio',
  },
  'blockType.collection': {
    id: 'course-authoring.course-search.blockType.collection',
    defaultMessage: 'Bộ sưu tập',
    description: 'Collection type text',
  },
  'blockType.collection.with_count': {
    id: 'course-authoring.course-search.blockType.collectionWithCount',
    defaultMessage: 'Bộ sưu tập ({count})',
    description: 'Collection type text with children count',
  },
  'blockType.discussion': {
    id: 'course-authoring.course-search.blockType.discussion',
    defaultMessage: 'Thảo luận',
    description: 'Name of the "Discussion" component type in Studio',
  },
  'blockType.drag-and-drop-v2': {
    id: 'course-authoring.course-search.blockType.drag-and-drop-v2',
    defaultMessage: 'Kéo và Thả',
    description: 'Name of the "Drag and Drop" component type in Studio',
  },
  'blockType.html': {
    id: 'course-authoring.course-search.blockType.html',
    defaultMessage: 'Văn bản',
    description: 'Name of the "Text" component type in Studio',
  },
  'blockType.library_content': {
    id: 'course-authoring.course-search.blockType.library_content',
    defaultMessage: 'Nội dung Thư viện',
    description: 'Name of the "Library Content" component type in Studio',
  },
  'blockType.openassessment': {
    id: 'course-authoring.course-search.blockType.openassessment',
    defaultMessage: 'Đánh giá trả lời mở',
    description: 'Name of the "Open Response Assessment" component type in Studio',
  },
  'blockType.problem': {
    id: 'course-authoring.course-search.blockType.problem',
    defaultMessage: 'Bài tập',
    description: 'Name of the "Problem" component type in Studio',
  },
  'blockType.sequential': {
    id: 'course-authoring.course-search.blockType.sequential',
    defaultMessage: 'Tiểu phần',
    description: 'Name of the "Subsection" course outline level in Studio',
  },
  'blockType.vertical': {
    id: 'course-authoring.course-search.blockType.vertical',
    defaultMessage: 'Đơn vị',
    description: 'Name of the "Unit" course outline level in Studio',
  },
  'blockType.video': {
    id: 'course-authoring.course-search.blockType.video',
    defaultMessage: 'Video',
    description: 'Name of the "Video" component type in Studio',
  },
  'blockType.choiceresponse': {
    id: 'course-authoring.course-search.blockType.choiceresponse',
    defaultMessage: 'Trắc nghiệm',
    description: 'Name of the "choiceresponse" component type in Studio',
  },
  'blockType.multiplechoiceresponse': {
    id: 'course-authoring.course-search.blockType.multiplechoiceresponse',
    defaultMessage: 'Hộp kiểm',
    description: 'Name of the "multiplechoiceresponse" component type in Studio',
  },
  'blockType.numericalresponse': {
    id: 'course-authoring.course-search.blockType.numericalresponse',
    defaultMessage: 'Nhập số',
    description: 'Name of the "numericalresponse" component type in Studio',
  },
  'blockType.optionresponse': {
    id: 'course-authoring.course-search.blockType.optionresponse',
    defaultMessage: 'Danh sách thả xuống',
    description: 'Name of the "optionresponse" component type in Studio',
  },
  'blockType.stringresponse': {
    id: 'course-authoring.course-search.blockType.stringresponse',
    defaultMessage: 'Nhập văn bản',
    description: 'Name of the "stringresponse" component type in Studio',
  },
  'blockType.formularesponse': {
    id: 'course-authoring.course-search.blockType.formularesponse',
    defaultMessage: 'Biểu thức Toán học',
    description: 'Name of the "formularesponse" component type in Studio',
  },
  blockTagsFilter: {
    id: 'course-authoring.search-manager.blockTagsFilter',
    defaultMessage: 'Thẻ',
    description: 'Label for the filter that allows finding components with specific tags',
  },
  searchTagsByKeywordPlaceholder: {
    id: 'course-authoring.search-manager.searchTagsByKeywordPlaceholder',
    defaultMessage: 'Tìm kiếm thẻ',
    description: 'Placeholder text shown in the input field that allows searching through the available tags',
  },
  submitSearchTagsByKeyword: {
    id: 'course-authoring.search-manager.submitSearchTagsByKeyword',
    defaultMessage: 'Gửi tìm kiếm theo từ khóa thẻ',
    description: 'Text shown to screen reader users for the search button on the tags keyword search',
  },
  numResults: {
    id: 'course-authoring.course-search.num-results',
    defaultMessage: '{numResults, plural, one {# kết quả} other {# kết quả}} được tìm thấy',
    description: 'This count displays how many matching results were found from the user\'s search',
  },
  clearFilter: {
    id: 'course-authoring.search-manager.searchFilterWidget.clearFilter',
    defaultMessage: 'Xóa bộ lọc',
    description: 'Label for the button that removes applied search filters in a specific widget',
  },
  searchSortWidgetLabel: {
    id: 'course-authoring.course-search.searchSortWidget.label',
    defaultMessage: 'Sắp xếp theo',
    description: 'Label displayed to users when default sorting is used by the content search drop-down menu',
  },
  searchSortWidgetAltTitle: {
    id: 'course-authoring.course-search.searchSortWidget.title',
    defaultMessage: 'Sắp xếp kết quả tìm kiếm',
    description: 'Alt/title text for the content search sort drop-down menu',
  },
  searchSortTitleAZ: {
    id: 'course-authoring.course-search.searchSort.titleAZ',
    defaultMessage: 'Tiêu đề, A-Z',
    description: 'Label for the content search sort drop-down which sorts by content title, ascending',
  },
  searchSortTitleZA: {
    id: 'course-authoring.course-search.searchSort.titleZA',
    defaultMessage: 'Tiêu đề, Z-A',
    description: 'Label for the content search sort drop-down which sorts by content title, descending',
  },
  searchSortNewest: {
    id: 'course-authoring.course-search.searchSort.newest',
    defaultMessage: 'Mới nhất',
    description: 'Label for the content search sort drop-down which sorts by creation date, descending',
  },
  searchSortOldest: {
    id: 'course-authoring.course-search.searchSort.oldest',
    defaultMessage: 'Cũ nhất',
    description: 'Label for the content search sort drop-down which sorts by creation date, ascending',
  },
  searchSortRecentlyPublished: {
    id: 'course-authoring.course-search.searchSort.recentlyPublished',
    defaultMessage: 'Được xuất bản gần đây',
    description: 'Label for the content search sort drop-down which sorts by published date, descending',
  },
  searchSortRecentlyModified: {
    id: 'course-authoring.course-search.searchSort.recentlyModified',
    defaultMessage: 'Được sửa đổi gần đây',
    description: 'Label for the content search sort drop-down which sorts by modified date, descending',
  },
  openProblemSubmenuAlt: {
    id: 'course-authoring.filter.problem-submenu.icon-button.alt',
    defaultMessage: 'Mở bộ lọc loại bài tập',
    description: 'Alt of the icon button to open problem types filters',
  },
  searchSortMostRelevant: {
    id: 'course-authoring.course-search.searchSort.mostRelevant',
    defaultMessage: 'Phù hợp nhất',
    description: 'Label for the content search sort drop-down which sorts keyword searches by relevance',
  },
  publishStatusPublished: {
    id: 'course-authoring.search-manager.publishStatus.published',
    defaultMessage: 'Đã xuất bản',
    description: 'Label for published content in the publish status filter',
  },
  publishStatusModified: {
    id: 'course-authoring.search-manager.publishStatus.modified',
    defaultMessage: 'Đã chỉnh sửa kể từ khi xuất bản',
    description: 'Label for content modified since last publish in the publish status filter',
  },
  publishStatusNeverPublished: {
    id: 'course-authoring.search-manager.publishStatus.neverPublished',
    defaultMessage: 'Chưa từng xuất bản',
    description: 'Label for content that has never been published in the publish status filter',
  },
  publishStatusFilter: {
    id: 'course-authoring.search-manager.publishStatus.filter',
    defaultMessage: 'Trạng thái xuất bản',
    description: 'Label for the filter that allows filtering content by publish status',
  },
});

export default messages;