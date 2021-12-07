import { Selector } from "testcafe";

// prettier-ignore
fixture`Getting started with TestCafe`
  .page`https://devexpress.github.io/testcafe/example/`;

test(`My first TestCafe Test`, async (t) => {
  await t.typeText("#developer-name", "Richard");
  await t.click("#submit-button");

  await t.expect(Selector("#article-header").innerText).contains("Richard");
});
