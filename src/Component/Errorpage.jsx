import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="justify-center mt-50 text-center text-3xl ">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>The requested page</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="text-blue-500 text-sm">Go back to homepage</a>
    </div>
  );
}