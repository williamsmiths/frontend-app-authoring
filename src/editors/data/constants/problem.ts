import { StrictDict } from '../../utils';
import singleSelect from '../images/singleSelect.png';
import multiSelect from '../images/multiSelect.png';
import dropdown from '../images/dropdown.png';
import numericalInput from '../images/numericalInput.png';
import textInput from '../images/textInput.png';
import advancedOlxTemplates from './advancedOlxTemplates';
import basicProblemTemplates from './basicProblemTemplates';

export const ProblemTypeKeys = StrictDict({
  SINGLESELECT: 'multiplechoiceresponse',
  MULTISELECT: 'choiceresponse',
  DROPDOWN: 'optionresponse',
  NUMERIC: 'numericalresponse',
  TEXTINPUT: 'stringresponse',
  ADVANCED: 'advanced',
} as const);
export type ProblemType = typeof ProblemTypeKeys[keyof typeof ProblemTypeKeys];

export const ProblemTypes = StrictDict({
  [ProblemTypeKeys.SINGLESELECT]: {
    title: 'Chọn một đáp án',
    preview: singleSelect,
    previewDescription: 'Người học phải chọn đáp án đúng từ danh sách các tùy chọn có sẵn.',
    description: 'Nhập các đáp án cho dạng chọn một dưới đây và đánh dấu đáp án đúng. Người học chỉ được chọn một đáp án chính xác.',
    helpLink: 'https://docs.openedx.org/en/latest/educators/concepts/exercise_tools/about_multi_select.html',
    prev: ProblemTypeKeys.TEXTINPUT,
    next: ProblemTypeKeys.MULTISELECT,
    template: basicProblemTemplates.singleSelect.olx,
    markdownTemplate: basicProblemTemplates.singleSelect.markdown,
  },
  [ProblemTypeKeys.MULTISELECT]: {
    title: 'Chọn nhiều đáp án',
    preview: multiSelect,
    previewDescription: 'Người học phải chọn tất cả các đáp án đúng từ danh sách các tùy chọn có sẵn.',
    description: 'Nhập các đáp án cho dạng chọn nhiều dưới đây và đánh dấu đáp án đúng. Người học phải chọn tất cả các đáp án chính xác.',
    helpLink: 'https://docs.openedx.org/en/latest/educators/how-tos/course_development/exercise_tools/add_multi_select.html',
    next: ProblemTypeKeys.DROPDOWN,
    prev: ProblemTypeKeys.SINGLESELECT,
    template: basicProblemTemplates.multiSelect.olx,
    markdownTemplate: basicProblemTemplates.multiSelect.markdown,
  },
  [ProblemTypeKeys.DROPDOWN]: {
    title: 'Danh sách thả xuống',
    preview: dropdown,
    previewDescription: 'Người học phải chọn đáp án đúng từ danh sách thả xuống.',
    description: 'Nhập các đáp án cho danh sách thả xuống dưới đây và chọn đáp án đúng. Người học chỉ được chọn một đáp án chính xác.',
    helpLink: 'https://docs.openedx.org/en/latest/educators/how-tos/course_development/exercise_tools/add_dropdown.html',
    next: ProblemTypeKeys.NUMERIC,
    prev: ProblemTypeKeys.MULTISELECT,
    template: basicProblemTemplates.dropdown.olx,
    markdownTemplate: basicProblemTemplates.dropdown.markdown,
  },
  [ProblemTypeKeys.NUMERIC]: {
    title: 'Nhập số',
    preview: numericalInput,
    previewDescription: 'Xác định một hoặc nhiều đáp án số chính xác, nhập trong ô trả lời.',
    description: 'Nhập các đáp án số chính xác dưới đây. Người học phải nhập một đáp án chính xác.',
    helpLink: 'https://docs.openedx.org/en/latest/educators/how-tos/course_development/exercise_tools/manage_numerical_input_problem.html',
    next: ProblemTypeKeys.TEXTINPUT,
    prev: ProblemTypeKeys.DROPDOWN,
    template: basicProblemTemplates.numeric.olx,
    markdownTemplate: basicProblemTemplates.numeric.markdown,
  },
  [ProblemTypeKeys.TEXTINPUT]: {
    title: 'Nhập văn bản',
    preview: textInput,
    previewDescription: 'Xác định một hoặc nhiều đáp án văn bản chính xác (bao gồm số và ký tự đặc biệt), nhập trong ô trả lời.',
    description: 'Nhập các đáp án văn bản dưới đây và đánh dấu đáp án đúng. Người học phải nhập một đáp án chính xác.',
    helpLink: 'https://docs.openedx.org/en/latest/educators/how-tos/course_development/exercise_tools/add_text_input.html',
    prev: ProblemTypeKeys.NUMERIC,
    next: ProblemTypeKeys.SINGLESELECT,
    template: basicProblemTemplates.textInput.olx,
    markdownTemplate: basicProblemTemplates.textInput.markdown,
  },
  [ProblemTypeKeys.ADVANCED]: {
    title: 'Bài tập nâng cao',
    preview: ('<div />'),
    description: 'Một loại bài tập nâng cao',
    helpLink: 'something.com',
  },
});

export const AdvanceProblemKeys = StrictDict({
  BLANK: 'blankadvanced',
  CIRCUITSCHEMATIC: 'circuitschematic',
  JSINPUT: 'jsinputresponse',
  CUSTOMGRADER: 'customgrader',
  IMAGE: 'imageresponse',
  FORMULA: 'formularesponse',
  PROBLEMWITHHINT: 'problemwithhint',
} as const);
export type AdvancedProblemType = typeof AdvanceProblemKeys[keyof typeof AdvanceProblemKeys];

export function isAdvancedProblemType(pt: ProblemType | AdvancedProblemType): pt is AdvancedProblemType {
  return Object.values(AdvanceProblemKeys).includes(pt as any);
}

export const AdvanceProblems = StrictDict({
  [AdvanceProblemKeys.BLANK]: {
    title: 'Blank problem',
    status: '',
    template: '<problem></problem>',
  },
  [AdvanceProblemKeys.CIRCUITSCHEMATIC]: {
    title: 'Circuit schematic builder',
    status: 'Not supported',
    template: advancedOlxTemplates.circuitSchematic,
  },
  [AdvanceProblemKeys.JSINPUT]: {
    title: 'Custom JavaScript display and grading',
    status: '',
    template: advancedOlxTemplates.jsInputResponse,
  },
  [AdvanceProblemKeys.CUSTOMGRADER]: {
    title: 'Custom Python-evaluated input',
    status: 'Provisional',
    template: advancedOlxTemplates.customGrader,
  },
  [AdvanceProblemKeys.IMAGE]: {
    title: 'Image mapped input',
    status: 'Not supported',
    template: advancedOlxTemplates.imageResponse,
  },
  [AdvanceProblemKeys.FORMULA]: {
    title: 'Math expression input',
    status: '',
    template: advancedOlxTemplates.formulaResponse,
  },
  [AdvanceProblemKeys.PROBLEMWITHHINT]: {
    title: 'Problem with adaptive hint',
    status: 'Not supported',
    template: advancedOlxTemplates.problemWithHint,
  },
} as const);

export const ShowAnswerTypesKeys = StrictDict({
  ALWAYS: 'always',
  ANSWERED: 'answered',
  ATTEMPTED: 'attempted',
  CLOSED: 'closed',
  FINISHED: 'finished',
  CORRECT_OR_PAST_DUE: 'correct_or_past_due',
  PAST_DUE: 'past_due',
  NEVER: 'never',
  AFTER_SOME_NUMBER_OF_ATTEMPTS: 'after_attempts',
  AFTER_ALL_ATTEMPTS: 'after_all_attempts',
  AFTER_ALL_ATTEMPTS_OR_CORRECT: 'after_all_attempts_or_correct',
  ATTEMPTED_NO_PAST_DUE: 'attempted_no_past_due',
} as const);

export const ShowAnswerTypes = StrictDict({
  [ShowAnswerTypesKeys.ALWAYS]: {
    id: 'authoring.problemeditor.settings.showanswertype.always',
    defaultMessage: 'Always',
  },
  [ShowAnswerTypesKeys.ANSWERED]: {
    id: 'authoring.problemeditor.settings.showanswertype.answered',
    defaultMessage: 'Answered',
  },
  [ShowAnswerTypesKeys.ATTEMPTED]: {
    id: 'authoring.problemeditor.settings.showanswertype.attempted',
    defaultMessage: 'Attempted or Past Due',
  },
  [ShowAnswerTypesKeys.CLOSED]: {
    id: 'authoring.problemeditor.settings.showanswertype.closed',
    defaultMessage: 'Closed',
  },
  [ShowAnswerTypesKeys.FINISHED]: {
    id: 'authoring.problemeditor.settings.showanswertype.finished',
    defaultMessage: 'Finished',
  },
  [ShowAnswerTypesKeys.CORRECT_OR_PAST_DUE]: {
    id: 'authoring.problemeditor.settings.showanswertype.correct_or_past_due',
    defaultMessage: 'Correct or Past Due',
  },
  [ShowAnswerTypesKeys.PAST_DUE]: {
    id: 'authoring.problemeditor.settings.showanswertype.past_due',
    defaultMessage: 'Past Due',
  },
  [ShowAnswerTypesKeys.NEVER]: {
    id: 'authoring.problemeditor.settings.showanswertype.never',
    defaultMessage: 'Never',
  },
  [ShowAnswerTypesKeys.AFTER_SOME_NUMBER_OF_ATTEMPTS]: {
    id: 'authoring.problemeditor.settings.showanswertype.after_attempts',
    defaultMessage: 'After Some Number of Attempts',
  },
  [ShowAnswerTypesKeys.AFTER_ALL_ATTEMPTS]: {
    id: 'authoring.problemeditor.settings.showanswertype.after_all_attempts',
    defaultMessage: 'After All Attempts',
  },
  [ShowAnswerTypesKeys.AFTER_ALL_ATTEMPTS_OR_CORRECT]: {
    id: 'authoring.problemeditor.settings.showanswertype.after_all_attempts_or_correct',
    defaultMessage: 'After All Attempts or Correct',
  },
  [ShowAnswerTypesKeys.ATTEMPTED_NO_PAST_DUE]: {
    id: 'authoring.problemeditor.settings.showanswertype.attempted_no_past_due',
    defaultMessage: 'Attempted',
  },
} as const);

export const RandomizationTypesKeys = StrictDict({
  NEVER: 'never',
  ALWAYS: 'always',
  ONRESET: 'onreset',
  PERSTUDENT: 'per_student',
} as const);

export const RandomizationTypes = StrictDict({
  [RandomizationTypesKeys.ALWAYS]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.always',
    defaultMessage: 'Always',
  },
  [RandomizationTypesKeys.NEVER]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.never',
    defaultMessage: 'Never',
  },
  [RandomizationTypesKeys.ONRESET]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.onreset',
    defaultMessage: 'On Reset',
  },
  [RandomizationTypesKeys.PERSTUDENT]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.perstudent',
    defaultMessage: 'Per Student',
  },
} as const);

export const RichTextProblems = [ProblemTypeKeys.SINGLESELECT, ProblemTypeKeys.MULTISELECT] as const;

export const settingsOlxAttributes = [
  '@_display_name',
  '@_weight',
  '@_max_attempts',
  '@_showanswer',
  '@_show_reset_button',
  '@_submission_wait_seconds',
  '@_attempts_before_showanswer_button',
] as const;

export const ignoredOlxAttributes = [
  // '@_markdown',  // Not sure if this is safe to ignore; some tests seem to indicate it's not.
  '@_url_name',
  '@_x-is-pointer-node',
  '@_markdown_edited',
] as const;

// Useful for the block creation workflow.
export const problemTitles = new Set([...Object.values(ProblemTypes).map((problem) => problem.title),
  ...Object.values(AdvanceProblems).map((problem) => problem.title)]);
