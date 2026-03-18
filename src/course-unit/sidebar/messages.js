import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  sidebarTitleDraftNeverPublished: {
    id: 'course-authoring.course-unit.sidebar.title.draft.never-published',
    defaultMessage: 'Bản nháp (chưa từng xuất bản)',
  },
  sidebarTitleVisibleToStaffOnly: {
    id: 'course-authoring.course-unit.sidebar.title.visible.to-staff-only',
    defaultMessage: 'Chỉ hiển thị cho nhân viên',
  },
  sidebarTitlePublishedAndLive: {
    id: 'course-authoring.course-unit.sidebar.title.published.live',
    defaultMessage: 'Đã xuất bản và đang hoạt động',
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
    defaultMessage: 'Vị trí Unit',
  },
  sidebarBodyNote: {
    id: 'course-authoring.course-unit.sidebar.body.note',
    defaultMessage: 'Lưu ý: Không ẩn các bài tập có chấm điểm sau khi đã phát hành.',
  },
  publishInfoPreviouslyPublished: {
    id: 'course-authoring.course-unit.publish.info.previously-published',
    defaultMessage: 'Đã từng xuất bản',
  },
  publishInfoDraftSaved: {
    id: 'course-authoring.course-unit.publish.info.draft.saved',
    defaultMessage: 'Bản nháp được lưu vào {editedOn} bởi {editedBy}',
  },
  publishLastPublished: {
    id: 'course-authoring.course-unit.publish.info.last.published',
    defaultMessage: 'Xuất bản lần cuối vào {publishedOn} bởi {publishedBy}',
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
    defaultMessage: 'HIỂN THỊ CHO',
  },
  visibilityWillBeVisibleToTitle: {
    id: 'course-authoring.course-unit.visibility.will-be-visible-to.title',
    defaultMessage: 'SẼ HIỂN THỊ CHO',
  },
  unitLocationTitle: {
    id: 'course-authoring.course-unit.unit-location.title',
    defaultMessage: 'ID VỊ TRÍ',
  },
  unitLocationDescription: {
    id: 'course-authoring.course-unit.unit-location.description',
    defaultMessage: 'Để tạo liên kết đến unit này từ một component HTML trong khóa học, nhập /jump_to_id/{id} làm giá trị URL',
  },
  visibilityCheckboxTitle: {
    id: 'course-authoring.course-unit.visibility.checkbox.title',
    defaultMessage: 'Ẩn khỏi người học',
  },
  visibilityStaffOnlyTitle: {
    id: 'course-authoring.course-unit.visibility.staff-only.title',
    defaultMessage: 'Chỉ dành cho nhân viên',
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
    defaultMessage: 'Hủy thay đổi',
  },
  actionButtonCopyUnitTitle: {
    id: 'course-authoring.course-unit.action-button.copy-unit.title',
    defaultMessage: 'Sao chép unit',
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
    defaultMessage: 'Hủy thay đổi',
  },
  modalDiscardUnitChangesActionButtonText: {
    id: 'course-authoring.course-unit.modal.discard-unit-changes.btn.action.text',
    defaultMessage: 'Hủy thay đổi',
  },
  modalDiscardUnitChangesCancelButtonText: {
    id: 'course-authoring.course-unit.modal.discard-unit-changes.btn.cancel.text',
    defaultMessage: 'Hủy',
  },
  modalDiscardUnitChangesDescription: {
    id: 'course-authoring.course-unit.modal.discard-unit-changes.description',
    defaultMessage: 'Bạn có chắc muốn quay về phiên bản đã xuất bản gần nhất của unit không? Bạn không thể hoàn tác hành động này.',
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
    defaultMessage: 'Nếu unit đã được xuất bản và phát hành trước đó cho học viên, mọi thay đổi bạn thực hiện khi unit bị ẩn giờ sẽ hiển thị cho học viên. Bạn có muốn tiếp tục không?',
  },
  sidebarSplitTestAddComponentTitle: {
    id: 'course-authoring.course-unit.split-test.sidebar.add-component.title',
    defaultMessage: 'Thêm component',
    description: 'Title for the section that explains how to add components to a split test',
  },
  sidebarSplitTestSelectComponentType: {
    id: 'course-authoring.course-unit.split-test.sidebar.add-component.select-type',
    defaultMessage: 'Chọn loại component trong {bold_tag}Add New Component{bold_tag}. Sau đó chọn mẫu.',
    description: 'Instruction text for selecting a component type and template when adding new components',
  },
  sidebarSplitTestComponentAdded: {
    id: 'course-authoring.course-unit.split-test.sidebar.add-component.component-added',
    defaultMessage: 'Component mới được thêm vào cuối trang hoặc nhóm. Sau đó bạn có thể chỉnh sửa và di chuyển component.',
    description: 'Instruction text indicating that the component has been added and can be moved or edited',
  },
  sidebarSplitTestEditComponentTitle: {
    id: 'course-authoring.course-unit.split-test.sidebar.edit-component.title',
    defaultMessage: 'Chỉnh sửa component',
    description: 'Title for the section that explains how to edit components in a split test',
  },
  sidebarSplitTestEditComponentInstruction: {
    id: 'course-authoring.course-unit.split-test.sidebar.edit-component.instruction',
    defaultMessage: 'Nhấn vào biểu tượng {bold_tag}Edit{bold_tag} trên component để chỉnh sửa nội dung.',
    description: 'Instruction text for editing a component by clicking the edit icon',
  },
  sidebarSplitTestReorganizeComponentTitle: {
    id: 'course-authoring.course-unit.split-test.sidebar.reorganize-component.title',
    defaultMessage: 'Sắp xếp lại component',
    description: 'Title for the section that explains how to reorganize components within a split test',
  },
  sidebarSplitTestReorganizeComponentInstruction: {
    id: 'course-authoring.course-unit.split-test.sidebar.reorganize-component.instruction',
    defaultMessage: 'Kéo các component đến vị trí mới trong component này.',
    description: 'Instruction text for reorganizing components by dragging them to new locations within a split test',
  },
  sidebarSplitTestReorganizeGroupsInstruction: {
    id: 'course-authoring.course-unit.split-test.sidebar.reorganize-component.drag-to-groups',
    defaultMessage: 'Đối với thử nghiệm nội dung, bạn có thể kéo component sang nhóm khác.',
    description: 'Instruction text for dragging components to other groups for content experiments',
  },
  sidebarSplitTestExperimentComponentTitle: {
    id: 'course-authoring.course-unit.split-test.sidebar.experiment-component.title',
    defaultMessage: 'Làm việc với thử nghiệm nội dung',
    description: 'Title for the section that explains how to work with content experiments',
  },
  sidebarSplitTestExperimentComponentInstruction: {
    id: 'course-authoring.course-unit.split-test.sidebar.experiment-component.confirm-config',
    defaultMessage: 'Xác nhận rằng bạn đã cấu hình đúng nội dung trong từng nhóm thử nghiệm.',
    description: 'Instruction text reminding users to check content configuration in each experiment group',
  },
  sidebarSplitTestLearnMoreLinkLabel: {
    id: 'course-authoring.course-unit.split-test.sidebar.learn-more-link.label',
    defaultMessage: 'Tìm hiểu thêm về container component',
    description: 'Text for a link that directs users to more information about component containers in the split test setup.',
  },
});

export default messages;