import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  sidebarTitleDraftNeverPublished: {
    id: 'course-authoring.course-unit.sidebar.title.draft.never-published',
    defaultMessage: 'Bản nháp (chưa từng xuất bản)',
  },
  sidebarTitleVisibleToStaffOnly: {
    id: 'course-authoring.course-unit.sidebar.title.visible.to-staff-only',
    defaultMessage: 'Chỉ hiển thị với nhân viên',
  },
  sidebarTitlePublishedAndLive: {
    id: 'course-authoring.course-unit.sidebar.title.published.live',
    defaultMessage: 'Đã xuất bản và đang hiển thị',
  },
  sidebarTitleDraftUnpublishedChanges: {
    id: 'course-authoring.course-unit.sidebar.title.draft.unpublished',
    defaultMessage: 'Bản nháp (thay đổi chưa xuất bản)',
  },
  sidebarTitlePublishedNotYetReleased: {
    id: 'course-authoring.course-unit.sidebar.title.published.not-yet-released',
    defaultMessage: 'Đã xuất bản (chưa phát hành)',
  },
  sidebarHeaderUnitLocationTitle: {
    id: 'course-authoring.course-unit.sidebar.header.unit-location.title',
    defaultMessage: 'Vị trí đơn vị học',
  },
  sidebarBodyNote: {
    id: 'course-authoring.course-unit.sidebar.body.note',
    defaultMessage: 'Lưu ý: Không ẩn các bài tập có chấm điểm sau khi chúng đã được phát hành.',
  },
  publishInfoPreviouslyPublished: {
    id: 'course-authoring.course-unit.publish.info.previously-published',
    defaultMessage: 'Đã xuất bản trước đó',
  },
  publishInfoDraftSaved: {
    id: 'course-authoring.course-unit.publish.info.draft.saved',
    defaultMessage: 'Bản nháp đã lưu vào {editedOn} bởi {editedBy}',
  },
  publishLastPublished: {
    id: 'course-authoring.course-unit.publish.info.last.published',
    defaultMessage: 'Xuất bản lần cuối {publishedOn} bởi {publishedBy}',
  },
  releaseInfoUnscheduled: {
    id: 'course-authoring.course-unit.release.info.unscheduled',
    defaultMessage: 'Chưa lên lịch',
  },
  releaseInfoWithSection: {
    id: 'course-authoring.course-unit.release.info.with-unit',
    defaultMessage: 'với {sectionName}',
  },
  visibilityIsVisibleToTitle: {
    id: 'course-authoring.course-unit.visibility.is-visible-to.title',
    defaultMessage: 'ĐANG HIỂN THỊ VỚI',
  },
  visibilityWillBeVisibleToTitle: {
    id: 'course-authoring.course-unit.visibility.will-be-visible-to.title',
    defaultMessage: 'SẼ HIỂN THỊ VỚI',
  },
  unitLocationTitle: {
    id: 'course-authoring.course-unit.unit-location.title',
    defaultMessage: 'MÃ ĐỊNH DANH VỊ TRÍ',
  },
  unitLocationDescription: {
    id: 'course-authoring.course-unit.unit-location.description',
    defaultMessage: 'Để tạo liên kết đến đơn vị học này từ một thành phần HTML trong khóa học, nhập /jump_to_id/{id} làm giá trị URL',
  },
  visibilityCheckboxTitle: {
    id: 'course-authoring.course-unit.visibility.checkbox.title',
    defaultMessage: 'Ẩn với người học',
  },
  visibilityStaffOnlyTitle: {
    id: 'course-authoring.course-unit.visibility.staff-only.title',
    defaultMessage: 'Chỉ nhân viên',
  },
  visibilityStaffAndLearnersTitle: {
    id: 'course-authoring.course-unit.visibility.staff-and-learners.title',
    defaultMessage: 'Nhân viên và người học',
  },
  visibilityHasExplicitStaffLockText: {
    id: 'course-authoring.course-unit.visibility.has-explicit-staff-lock.text',
    defaultMessage: 'với {sectionName}',
  },
  actionButtonPublishTitle: {
    id: 'course-authoring.course-unit.action-buttons.publish.title',
    defaultMessage: 'Xuất bản',
  },
  actionButtonDiscardChangesTitle: {
    id: 'course-authoring.course-unit.action-button.discard-changes.title',
    defaultMessage: 'Hủy bỏ thay đổi',
  },
  actionButtonCopyUnitTitle: {
    id: 'course-authoring.course-unit.action-button.copy-unit.title',
    defaultMessage: 'Sao chép đơn vị học',
  },
  releaseStatusTitle: {
    id: 'course-authoring.course-unit.status.release.title',
    defaultMessage: 'PHÁT HÀNH',
  },
  releasedStatusTitle: {
    id: 'course-authoring.course-unit.status.released.title',
    defaultMessage: 'ĐÃ PHÁT HÀNH',
  },
  scheduledStatusTitle: {
    id: 'course-authoring.course-unit.status.scheduled.title',
    defaultMessage: 'ĐÃ LÊN LỊCH',
  },
  modalDiscardUnitChangesTitle: {
    id: 'course-authoring.course-unit.modal.discard-unit-changes.title',
    defaultMessage: 'Hủy bỏ thay đổi',
  },
  modalDiscardUnitChangesActionButtonText: {
    id: 'course-authoring.course-unit.modal.discard-unit-changes.btn.action.text',
    defaultMessage: 'Hủy bỏ thay đổi',
  },
  modalDiscardUnitChangesCancelButtonText: {
    id: 'course-authoring.course-unit.modal.discard-unit-changes.btn.cancel.text',
    defaultMessage: 'Hủy',
  },
  modalDiscardUnitChangesDescription: {
    id: 'course-authoring.course-unit.modal.discard-unit-changes.description',
    defaultMessage: 'Bạn có chắc chắn muốn quay lại phiên bản đơn vị học đã xuất bản lần cuối không? Bạn sẽ không thể hoàn tác hành động này.',
  },
  modalMakeVisibilityTitle: {
    id: 'course-authoring.course-unit.modal.make-visibility.title',
    defaultMessage: 'Hiển thị cho học viên',
  },
  modalMakeVisibilityActionButtonText: {
    id: 'course-authoring.course-unit.modal.make-visibility.btn.action.text',
    defaultMessage: 'Hiển thị cho học viên',
  },
  modalMakeVisibilityCancelButtonText: {
    id: 'course-authoring.course-unit.modal.make-visibility.btn.cancel.text',
    defaultMessage: 'Hủy',
  },
  modalMakeVisibilityDescription: {
    id: 'course-authoring.course-unit.modal.make-visibility.description',
    defaultMessage: 'Nếu đơn vị học đã được xuất bản và phát hành cho học viên trước đó, mọi thay đổi bạn thực hiện khi đơn vị học bị ẩn bây giờ sẽ hiển thị cho học viên. Bạn có muốn tiếp tục không?',
  },
  sidebarSplitTestAddComponentTitle: {
    id: 'course-authoring.course-unit.split-test.sidebar.add-component.title',
    defaultMessage: 'Thêm thành phần',
    description: 'Title for the section that explains how to add components to a split test',
  },
  sidebarSplitTestSelectComponentType: {
    id: 'course-authoring.course-unit.split-test.sidebar.add-component.select-type',
    defaultMessage: 'Chọn một loại thành phần trong {bold_tag}Thêm thành phần mới{bold_tag}. Sau đó chọn một mẫu.',
    description: 'Instruction text for selecting a component type and template when adding new components',
  },
  sidebarSplitTestComponentAdded: {
    id: 'course-authoring.course-unit.split-test.sidebar.add-component.component-added',
    defaultMessage: 'Thành phần mới được thêm vào cuối trang hoặc nhóm. Sau đó bạn có thể chỉnh sửa và di chuyển thành phần.',
    description: 'Instruction text indicating that the component has been added and can be moved or edited',
  },
  sidebarSplitTestEditComponentTitle: {
    id: 'course-authoring.course-unit.split-test.sidebar.edit-component.title',
    defaultMessage: 'Chỉnh sửa thành phần',
    description: 'Title for the section that explains how to edit components in a split test',
  },
  sidebarSplitTestEditComponentInstruction: {
    id: 'course-authoring.course-unit.split-test.sidebar.edit-component.instruction',
    defaultMessage: 'Nhấp vào biểu tượng {bold_tag}Chỉnh sửa{bold_tag} trong một thành phần để chỉnh sửa nội dung của nó.',
    description: 'Instruction text for editing a component by clicking the edit icon',
  },
  sidebarSplitTestReorganizeComponentTitle: {
    id: 'course-authoring.course-unit.split-test.sidebar.reorganize-component.title',
    defaultMessage: 'Sắp xếp lại thành phần',
    description: 'Title for the section that explains how to reorganize components within a split test',
  },
  sidebarSplitTestReorganizeComponentInstruction: {
    id: 'course-authoring.course-unit.split-test.sidebar.reorganize-component.instruction',
    defaultMessage: 'Kéo các thành phần đến vị trí mới trong thành phần này.',
    description: 'Instruction text for reorganizing components by dragging them to new locations within a split test',
  },
  sidebarSplitTestReorganizeGroupsInstruction: {
    id: 'course-authoring.course-unit.split-test.sidebar.reorganize-component.drag-to-groups',
    defaultMessage: 'Đối với các thí nghiệm nội dung, bạn có thể kéo thành phần sang các nhóm khác.',
    description: 'Instruction text for dragging components to other groups for content experiments',
  },
  sidebarSplitTestExperimentComponentTitle: {
    id: 'course-authoring.course-unit.split-test.sidebar.experiment-component.title',
    defaultMessage: 'Làm việc với các thí nghiệm nội dung',
    description: 'Title for the section that explains how to work with content experiments',
  },
  sidebarSplitTestExperimentComponentInstruction: {
    id: 'course-authoring.course-unit.split-test.sidebar.experiment-component.confirm-config',
    defaultMessage: 'Xác nhận rằng bạn đã cấu hình đúng nội dung trong từng nhóm thí nghiệm của mình.',
    description: 'Instruction text reminding users to check content configuration in each experiment group',
  },
  sidebarSplitTestLearnMoreLinkLabel: {
    id: 'course-authoring.course-unit.split-test.sidebar.learn-more-link.label',
    defaultMessage: 'Tìm hiểu thêm về các khung chứa thành phần',
    description: 'Text for a link that directs users to more information about component containers in the split test setup.',
  },
});

export default messages;