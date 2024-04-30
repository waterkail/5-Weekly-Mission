import CardList from "../CardList";
import SearchBar from "../SearchBar";
import MainContent from "../MainContent";
import { LinkItem } from "../CardList";

const SEARCH_LINK = "링크를 검색해보세요";

function Shared({ items }: { items: LinkItem[] }) {
  return (
    <MainContent>
      <SearchBar placeholder={SEARCH_LINK} />
      <CardList items={items} />
    </MainContent>
  );
}

export default Shared;
