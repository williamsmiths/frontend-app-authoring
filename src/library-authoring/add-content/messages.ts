import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  collectionButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.collection',
    defaultMessage: 'Bộ sưu tập',
    description: 'Content of button to create a Collection.',
  },
  unitButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.unit',
    defaultMessage: 'Bài học',
    description: 'Content of button to create a Unit.',
  },
  libraryContentButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.library-content',
    defaultMessage: 'Nội dung thư viện hiện có',
    description: 'Content of button to add existing library content to a collection.',
  },
  addToCollectionButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.library-content.add-to-collection',
    defaultMessage: 'Thêm vào bộ sưu tập',
    description: 'Button to add library content to a collection.',
  },
  addToUnitButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.library-content.add-to-unit',
    defaultMessage: 'Thêm vào bài học',
    description: 'Button to add library content to a unit.',
  },
  selectedComponents: {
    id: 'course-authoring.library-authoring.add-content.selected-components',
    defaultMessage: '{count, plural, one {# thành phần đã chọn} other {# thành phần đã chọn}}',
    description: 'Title for selected components in library.',
  },
  textTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.text',
    defaultMessage: 'Văn bản',
    description: 'Content of button to create a Text component.',
  },
  problemTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.problem',
    defaultMessage: 'Bài tập',
    description: 'Content of button to create a Problem component.',
  },
  openResponseTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.open-response',
    defaultMessage: 'Trả lời mở',
    description: 'Content of button to create a Open Response component.',
  },
  dragDropTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.drag-drop',
    defaultMessage: 'Kéo thả',
    description: 'Content of button to create a Drag Drod component.',
  },
  videoTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.video',
    defaultMessage: 'Video',
    description: 'Content of button to create a Video component.',
  },
  otherTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.other',
    defaultMessage: 'Nâng cao / Khác',
    description: 'Content of button to create a Advanced / Other component.',
  },
  pasteButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.paste',
    defaultMessage: 'Dán từ clipboard',
    description: 'Content of button to paste from clipboard.',
  },
  successCreateMessage: {
    id: 'course-authoring.library-authoring.add-content.success.text',
    defaultMessage: 'Tạo nội dung thành công.',
    description: 'Message when creation of content in library is success',
  },
  errorCreateMessage: {
    id: 'course-authoring.library-authoring.add-content.error.text',
    defaultMessage: 'Đã xảy ra lỗi khi tạo nội dung.',
    description: 'Message when creation of content in library is on error.',
  },
  errorCreateMessageWithDetail: {
    id: 'course-authoring.library-authoring.add-content.error.text-detail',
    defaultMessage: 'Đã xảy ra lỗi khi tạo nội dung: {detail}',
    description: (
      'Message when creation of content in library is on error.'
      + ' The {detail} text provides more information about the error.'
    ),
  },
  successAssociateComponentToContainerMessage: {
    id: 'course-authoring.library-authoring.associate-container-content.success.text',
    defaultMessage: 'Liên kết nội dung thành công.',
    description: 'Message when linking of content to a container in library is success',
  },
  errorAssociateComponentToContainerMessage: {
    id: 'course-authoring.library-authoring.associate-container-content.error.text',
    defaultMessage: 'Đã xảy ra lỗi khi liên kết nội dung với vùng chứa này.',
    description: 'Message when linking of content to a container in library fails',
  },
  addContentTitle: {
    id: 'course-authoring.library-authoring.sidebar.title.add-content',
    defaultMessage: 'Thêm nội dung',
    description: 'Title of add content in library container.',
  },
  successPasteClipboardMessage: {
    id: 'course-authoring.library-authoring.paste-clipboard.success.text',
    defaultMessage: 'Dán nội dung thành công.',
    description: 'Message when pasting clipboard in library is successful',
  },
  errorPasteClipboardMessage: {
    id: 'course-authoring.library-authoring.paste-clipboard.error.text',
    defaultMessage: 'Đã xảy ra lỗi khi dán nội dung.',
    description: 'Message when pasting clipboard in library errors',
  },
  errorPasteClipboardMessageWithDetail: {
    id: 'course-authoring.library-authoring.paste-clipboard.error.text-detail',
    defaultMessage: 'Đã xảy ra lỗi khi dán nội dung: {detail}',
    description: (
      'Message when pasting clipboard in library errors.'
      + ' The {detail} text provides more information about the error.'
    ),
  },
  pastingClipboardMessage: {
    id: 'course-authoring.library-authoring.paste-clipboard.loading.text',
    defaultMessage: 'Đang dán nội dung từ clipboard...',
    description: 'Message when in process of pasting content in library',
  },
  unsupportedBlockPasteClipboardMessage: {
    id: 'course-authoring.library-authoring.paste-clipboard.unsupportedblock-error.text',
    defaultMessage: 'Thư viện chưa hỗ trợ loại nội dung này.',
    description: 'Message when unsupported block is pasted in library',
  },
  backToAddContentListButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.back',
    defaultMessage: 'Quay lại danh sách',
    description: 'Messag of button in advanced creation view to return to the main creation view.',
  },
});

export default messages;