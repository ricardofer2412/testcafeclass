import { Selector, t } from "testcafe";

class Navbar {
  constructor() {
    //selectors

    this.searchBox = Selector("#searchTerm");
    this.signInButton = Selector("#signin_button");
  }

  async search(text) {
    await t
      .typeText(this.searchBox, text, { paste: true, replace: true })
      .pressKey("enter");
  }
}

export default Navbar;
