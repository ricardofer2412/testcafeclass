import { Selector } from "testcafe";
import Navbar from "../page-objects/components/Navbar";

const navbar = new Navbar();

//prettier-ignore
fixture `Send Forgotten Password Test`
    .page`http://zero.webappsecurity.com/index.html`

test("User can request new paswword to be send to his email", async (t) => {
  //Get Selectors
  const signButton = Selector("#signin_button");
  const linKToPassword = Selector("a").withText("Forgot your password");
  const emailInput = Selector("#user_email");
  const message = Selector("div").innerText;

  // Actions

  await t.click(navbar.signInButton);
  await t.click(linKToPassword);
  await t.typeText(emailInput, "email@random.com", { paste: true });
  await t.pressKey("enter");

  //Assertions

  await t.expect(message).contains("email@random.com");
  await t.expect(emailInput.exists).notOk();
});
