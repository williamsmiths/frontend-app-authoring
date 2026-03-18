import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headerTitle: {
    id: 'course-authoring.taxonomy-manage-orgs.header.title',
    defaultMessage: 'Gán cho tổ chức',
  },
  bodyText: {
    id: 'course-authoring.taxonomy-manage-orgs.body.text',
    defaultMessage: 'Quản lý các tổ chức có thể truy cập phân loại bằng cách gán trong menu bên dưới. Bạn cũng có thể chọn gán phân loại cho tất cả các tổ chức.',
  },
  assignOrgs: {
    id: 'course-authoring.taxonomy-manage-orgs.assign-orgs',
    defaultMessage: 'Gán tổ chức',
  },
  currentAssignments: {
    id: 'course-authoring.taxonomy-manage-orgs.current-assignments',
    defaultMessage: 'Hiện đang được gán:',
  },
  addOrganizations: {
    id: 'course-authoring.taxonomy-manage-orgs.add-orgs',
    defaultMessage: 'Thêm tổ chức khác:',
  },
  searchOrganizations: {
    id: 'course-authoring.taxonomy-manage-orgs.search-orgs',
    defaultMessage: 'Tìm kiếm tổ chức',
  },
  noOrganizationAssigned: {
    id: 'course-authoring.taxonomy-manage-orgs.no-orgs',
    defaultMessage: 'Chưa có tổ chức nào được gán',
  },
  assignAll: {
    id: 'course-authoring.taxonomy-manage-orgs.assign-all',
    defaultMessage: 'Gán cho tất cả tổ chức',
  },
  cancelButton: {
    id: 'course-authoring.taxonomy-manage-orgs.button.cancel',
    defaultMessage: 'Hủy',
  },
  saveButton: {
    id: 'course-authoring.taxonomy-manage-orgs.button.save',
    defaultMessage: 'Lưu',
  },
  confirmUnassignTitle: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.title',
    defaultMessage: 'Hủy gán phân loại',
  },
  confirmUnassignText: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.text',
    defaultMessage: 'Người tạo nội dung từ các tổ chức bị hủy gán sẽ không thể gắn thẻ nội dung khóa học với {taxonomyName}. Bạn có chắc muốn tiếp tục?',
  },
  continueButton: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.button.continue',
    defaultMessage: 'Tiếp tục',
  },
  assignOrgsSuccess: {
    id: 'course-authoring.taxonomy-manage-orgs.toast.assign-orgs-success',
    defaultMessage: 'Đã cập nhật tổ chức được gán',
  },
  removeOrg: {
    id: 'course-authoring.taxonomy-manage-orgs.remove-org',
    defaultMessage: 'Xóa {org}',
    description: 'button to remove a specific organization from a taxonomy',
  },
});

export default messages;