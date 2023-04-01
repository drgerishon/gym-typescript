import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowercase = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowercase ? "text-primary-500" : ""}
    transition duration-500 hover:text-primary-300 `}
      href={`#${lowercase}`}
      onClick={() => setSelectedPage(lowercase)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
