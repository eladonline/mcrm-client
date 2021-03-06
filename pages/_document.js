// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="web designed" />
          <meta name="author" content="elad BA" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>{`body { margin: 0 }`}</style>
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
