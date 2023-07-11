import { useRouteError } from "react-router-dom";
import { FC } from 'react'

//more userfriendly error page

const ErrorPage: FC = () => {
  
  //error has an unkonwn type here
  
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
      <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </div>
  );
}

export default ErrorPage