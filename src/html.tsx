/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from "react";
import Helmet from "react-helmet";

// Load production style
let styles: string;
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require("!raw-loader!../public/styles.css");
  } catch (err) {
    console.log(err);
  }
}

interface HtmlProps {
  body: any;
  postBodyComponents: any;
  headComponents: any;
}

const favicon = require("./favicon.ico");

// Use `module.exports` to be compliante with `webpack-require` import method
module.exports = (props: HtmlProps) => {
  const head = Helmet.rewind();

  const css = (process.env.NODE_ENV === `production`) ?
    <style
      id="gatsby-inlined-css"
      dangerouslySetInnerHTML={{ __html: styles }}
    />
    : null;

  return (
    <html lang="en">
      <head>
        {props.headComponents}
        <title>Oni - Modern IDE for (neo)vim</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="shortcut icon" type="image/x-icon" href={favicon} />
          <link href="https://fonts.googleapis.com/css?family=Poppins|Sintony" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" rel="stylesheet" />
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {css}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-113896624-1" />
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', 'UA-113896624-1');
        `}}></script>
      </head>
      <body>
        <div
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf8"></script>
      </body>
    </html>
  );
};
