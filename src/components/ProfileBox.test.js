import { render, screen } from "@testing-library/react";
import ProfileBox from "./ProfileBox";

it("profilebox renders correctly", () => {
  render(<ProfileBox />);
  const userNameEl = screen.getByText(/yiğitcan dönmez/i);
  const userNickNameEl = screen.getByText(/@ksealyen/i);
  const userProfileImageEl = screen.getByRole("img", { name: "profile image" });

  expect(userNameEl).toBeInTheDocument();
  expect(userNickNameEl).toBeInTheDocument();
  expect(userProfileImageEl).toBeInTheDocument();
});
