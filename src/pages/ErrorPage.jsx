//rrd import
import { Link, useRouteError } from "react-router-dom"
const ErrorPage = () => {
  const error = useRouteError()
  // console.log(error);
  if(error.status == 404) {
    return <div className="error-container container">
      <div className="">
        <h3>
          404 Error: Page not found . But don't worry , our developers are in a treasure hunt to recover it . Meanwhile , enjoy some virtual tea and bisctus !
        </h3>
        <Link to={"/"} className="btn">
         GO To Home 
        </Link>
      </div>
    </div>
  }
  return <div className="error-container container">
    <h3>
    Oops ! Looks like our web page did a somersault and landed in a digital rabbit hole . We're working on untangling the code Hanf tight !
    </h3>
    <Link to={"/" } className="btn">
      Go To Home 
    </Link>
  </div>


}

export default ErrorPage
