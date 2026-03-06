import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { SearchField } from '@openedx/paragon';
import { debounce } from 'lodash';
import messages from './messages';
import { useSearchContext } from './SearchManager';

/**
 * The "main" input field where users type in search keywords. The search happens as they type (no need to press enter).
 */
const SearchKeywordsField: React.FC<{
  className?: string,
  placeholder?: string,
  autoFocus?: boolean,
}> = (props) => {
  const intl = useIntl();
  const { searchKeywords, setSearchKeywords, usageKey } = useSearchContext();
  const defaultPlaceholder = usageKey ? messages.clearUsageKeyToSearch : messages.inputPlaceholder;
  const { placeholder = intl.formatMessage(defaultPlaceholder) } = props;

  // local state để update input nhanh
  const [inputValue, setInputValue] = React.useState(searchKeywords);
  
  const handleSearch = React.useCallback(
    debounce((term) => setSearchKeywords(term.trim()), 400),
    [searchKeywords],
  );// Perform search after 500ms

  const onChangeInput = (value) => {
    setInputValue(value);
    handleSearch(value);
  }

  return (
    // <SearchField.Advanced
    //   onSubmit={setSearchKeywords}
    //   onChange={handleSearch}
    //   onClear={() => setSearchKeywords('')}
    //   value={searchKeywords}
    //   className={props.className}
    //   disabled={!!usageKey}
    // >
    //   <SearchField.Label />
    //   <SearchField.Input
    //     autoFocus={Boolean(props.autoFocus)}
    //     placeholder={placeholder}
    //   />
    //   <SearchField.ClearButton />
    //   <SearchField.SubmitButton />
    // </SearchField.Advanced>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onChangeInput(e.target[0].value.trim());
      }}
      className={`mr-4 custom-input-search ${props.className ?? ''}`}
      data-testid="input-filter-courses-search"
    >
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => onChangeInput(e.target.value)}
        className="form-control"
        autoFocus={Boolean(props.autoFocus)}
        disabled={!!usageKey}
      />
    </form>
  );
};

export default SearchKeywordsField;
