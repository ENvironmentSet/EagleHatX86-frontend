import React from 'react';

import FilterSelector from 'containers/atoms/FilterSelector';
import SearchInput from 'containers/atoms/SearchInput';
import NoticeArticleList from 'containers/organisms/NoticeArticleList';
import LoadNoticeButton from 'containers/atoms/LoadNoticeButton';

const Notice = () => (
  <>
    <FilterSelector />
    <SearchInput />
    <LoadNoticeButton />
    <NoticeArticleList />
  </>
);

export default Notice;
