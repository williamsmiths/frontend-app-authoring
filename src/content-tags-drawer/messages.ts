import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headerSubtitle: {
    id: 'course-authoring.content-tags-drawer.header.subtitle',
    defaultMessage: 'Quản lý thẻ',
  },
  addTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.collapsible.add-tags.button',
    defaultMessage: 'Thêm thẻ',
  },
  loadingMessage: {
    id: 'course-authoring.content-tags-drawer.spinner.loading',
    defaultMessage: 'Đang tải',
  },
  loadingTagsDropdownMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.spinner.loading',
    defaultMessage: 'Đang tải thẻ',
  },
  loadMoreTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.load-more-tags.button',
    defaultMessage: 'Tải thêm',
  },
  noTagsFoundMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.no-tags-found',
    defaultMessage: 'Không tìm thấy thẻ nào với từ khóa "{searchTerm}"',
  },
  noTagsInTaxonomyMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.no-tags-in-taxonomy',
    defaultMessage: 'Chưa có thẻ nào trong phân loại này',
    description: 'Message when the user uses the tags dropdown selector of an empty taxonomy',
  },
  taxonomyTagChecked: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-checked',
    defaultMessage: 'Đã chọn',
  },
  taxonomyTagUnchecked: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-unchecked',
    defaultMessage: 'Chưa chọn',
  },
  taxonomyTagImplicit: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-implicit',
    defaultMessage: 'Tự động',
  },
  taxonomyTagActionInstructionsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-action-instructions.aria.label',
    defaultMessage: '{tagState} Thẻ: {tag}. Sử dụng các phím mũi tên để di chuyển giữa các thẻ trong phân loại này. Nhấn phím cách để chọn thẻ.',
  },
  taxonomyTagActionsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-actions.aria.label',
    defaultMessage: '{tagState} Thẻ: {tag}',
  },
  taxonomyTagsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.selectable-box.selection.aria.label',
    defaultMessage: 'Lựa chọn thẻ phân loại',
  },
  manageTagsButton: {
    id: 'course-authoring.content-tags-drawer.button.manage',
    defaultMessage: 'Quản lý thẻ',
    description: 'Label in the button that opens the drawer to edit content tags',
  },
  tagsSidebarTitle: {
    id: 'course-authoring.course-unit.sidebar.tags.title',
    defaultMessage: 'Thẻ của bài học',
    description: 'Title of the tags sidebar',
  },
  collapsibleAddTagsPlaceholderText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.placeholder-text',
    defaultMessage: 'Thêm một thẻ',
  },
  collapsibleNoTagsAddedText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.no-tags-added-text',
    defaultMessage: 'Chưa có thẻ nào được thêm.',
  },
  collapsibleAddStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.save-staged-tags',
    defaultMessage: 'Thêm thẻ',
  },
  collapsibleCancelStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.cancel-staged-tags',
    defaultMessage: 'Hủy',
  },
  collapsibleInlineAddStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.inline-save-staged-tags',
    defaultMessage: 'Thêm',
  },
  tagsDrawerCancelButtonText: {
    id: 'course-authoring.content-tags-drawer.cancel',
    defaultMessage: 'Hủy',
    description: 'Button to cancel edit tags.',
  },
  tagsDrawerSaveButtonText: {
    id: 'course-authoring.content-tags-drawer.save',
    defaultMessage: 'Lưu',
    description: 'Button to save edited tags.',
  },
  tagsDrawerCloseButtonText: {
    id: 'course-authoring.content-tags-drawer.close',
    defaultMessage: 'Đóng',
    description: 'Button to close manage tags drawer.',
  },
  tagsDrawerEditTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.edit-tags',
    defaultMessage: 'Chỉnh sửa thẻ',
    description: 'Button to edit tags in manage tags drawer.',
  },
  tagsSaveToastTextTypeAdded: {
    id: 'course-authoring.content-tags-drawer.toast.added',
    defaultMessage: 'Đã thêm {tagsAdded} thẻ.',
    description: 'Text of toast after save when the user added tags.',
  },
  tagsSaveToastTextTypeRemoved: {
    id: 'course-authoring.content-tags-drawer.toast.removed',
    defaultMessage: 'Đã xóa {tagsRemoved} thẻ.',
    description: 'Text of toast after save when the user removed tags.',
  },
  tagsDeleteAltText: {
    id: 'course-authoring.content-tags-drawer.tag.delete',
    defaultMessage: 'Xóa',
    description: 'Alt label for Delete tag button.',
  },
  otherTagsHeader: {
    id: 'course-authoring.content-tags-drawer.other-tags.header',
    defaultMessage: 'Thẻ khác',
    description: 'Header of "Other tags" subsection in tags drawer',
  },
  otherTagsDescription: {
    id: 'course-authoring.content-tags-drawer.other-tags.description',
    defaultMessage: 'Những thẻ này đã được áp dụng, nhưng bạn không thể thêm thẻ mới vì bạn không có quyền truy cập vào các phân loại của chúng.',
    description: 'Description of "Other tags" subsection in tags drawer',
  },
  emptyDrawerContent: {
    id: 'course-authoring.content-tags-drawer.empty',
    defaultMessage: 'Để sử dụng thẻ, vui lòng {link} hoặc liên hệ quản trị viên của bạn.',
    description: 'Message when there are no taxonomies.',
  },
  emptyDrawerContentLink: {
    id: 'course-authoring.content-tags-drawer.empty-link',
    defaultMessage: 'kích hoạt phân loại thẻ',
    description: 'Message of the link used in empty drawer message.',
  },
});

export default messages;