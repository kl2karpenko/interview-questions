/**
  Challenge:
  Make button disabled when there is no character
  on the input field or the email is not valid.
  Enable the `Submit` button
  when there is at least one character.

  On button click, we show user the email in the div above the button
  for 4 seconds, and then remove it.
 **/

import React from "react";

export default function App() {
	const [] = React.useState("");

	return (
		<>
			<input type="text" />
			<button>Check email</button>
		</>
	);
}
