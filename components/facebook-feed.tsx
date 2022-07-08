import { Fragment, memo, useEffect } from "react";

const Feed = (props: {width: number, height: number}) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Fragment>
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/LaFrancePrie2022/"
        data-tabs="timeline"
        data-width={props.width}
        data-height={props.height}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/LaFrancePrie2022/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/LaFrancePrie2022/">Your Page</a>
        </blockquote>
      </div>
    </Fragment>
  );
};

export default memo(Feed);
